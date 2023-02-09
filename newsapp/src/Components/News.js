import React, { Component } from 'react';
import Loading from './Loading';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter= (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`${this. capitalizeFirstLetter(this.props.category)} - JK NewsApp`
    }
     

    async newsPageUpdate() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9856e4b407c245f294e49ed3ace91c5b&page=${this.state.page}&pagesize={this.props.pageSize}`;

        this.setState({ loading: true })//loading is made true when we are going to hit the apit thata is when we are going to fetch the url

        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false // as data has been fetched so we now make loading:false
        })
    }

    async componentDidMount() {
        this.newsPageUpdate();

    }


    previousPageHandler = async () => {
        await this.setState({ page: this.state.page - 1 });
        this.newsPageUpdate();
    }

    nextPageHandler = async () => {
        await this.setState({ page: this.state.page + 1 });
        this.newsPageUpdate();

    }


    render() {
        return (
            <>
                {/* Loading component should only be displayed when state variable 'loading is true' */}
                {this.state.loading && <Loading />}
                <div className="container my-3">
                    <h1 className=" text-center" style={{ margin: "50px" }}>JK NewsFlash - Top Headlines on {this. capitalizeFirstLetter(this.props.category)}</h1>
                    <div className="row">
                        {/* When loading is true  and Loading Component is displayed we do not want the data of earlier page to be shown */}
                        {!this.state.loading && this.state.articles.map((element) => {
                            return (<div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>)
                        })}
                    </div>

                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.previousPageHandler}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.nextPageHandler}>Next &rarr;</button>
                </div>
            </>
        )
    }
}


export default News

