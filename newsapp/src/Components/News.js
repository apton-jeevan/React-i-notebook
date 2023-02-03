import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    previousPageHandler=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?q=us&apiKey=9856e4b407c245f294e49ed3ace91c5b&page=${this.state.page - 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, page:this.state.page - 1})
        
    }

    nextPageHandler= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?q=us&apiKey=9856e4b407c245f294e49ed3ace91c5b&page=${this.state.page + 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, page:this.state.page + 1})
    }

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?q=us&apiKey=9856e4b407c245f294e49ed3ace91c5b&page=${this.state.page}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className="my-4">Top Headlines</h1>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (<div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title?element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>)
                        })}
                    </div>

                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.previousPageHandler}>&larr;Previous</button>
                    <button type="button" className="btn btn-primary" onClick={this.nextPageHandler}>Next&rarr;</button>
                </div>
            </>
        )
    }
}


export default News
