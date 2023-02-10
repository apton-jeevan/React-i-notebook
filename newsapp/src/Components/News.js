
import React  from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    
    
    
    const newsPageUpdate = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize={props.pageSize}`;
        
        setloading(true)
        
        //loading is made true when we are going to hit the apit thata is when we are going to fetch the url
        
        let data = await fetch(url);
        
        props.setProgress(30)

        let parsedData = await data.json()
        
        props.setProgress(70)
        
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        
        props.setProgress(100)
    }
    
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - JK NewsApp`
        newsPageUpdate()
    },[])


    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize={props.pageSize}`;
        
        setpage(page + 1)
        
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
      
    }

    return (
        <>
            {/* Loading component should only be displayed when state variable 'loading is true' */}
            {loading && <Loading />}
            <h1 className=" text-center" style={{ margin: "50px", marginTop: '105px' }}>JK NewsFlash - Top Headlines on {capitalizeFirstLetter(props.category)}</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >
                <div className="container my-3">
                    <div className="row">
                        {/* When loading is true  and Loading Component is displayed we do not want the data of earlier page to be shown */}
                        {articles.map((element) => {
                            return (<div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>)
                        })}
                    </div>
                </div>
            </InfiniteScroll>


        </>
    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 20,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News


