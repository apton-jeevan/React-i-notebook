import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

   
    constructor() {
        super()
        this.state = {
            articles:[],
            loading: false
        }
    }
    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?q=india&apiKey=9856e4b407c245f294e49ed3ace91c5b";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    render() {
        return (
            <div className="container my-3">
                <h1>News Component</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (<div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title? element.title.slice(0, 45):""} description={element.description? element.description.slice(0, 88):""} imageUrl={element.urlToImage }newsUrl={element.url} />
                        </div>)
                    })}
                </div>

            </div>
        )
    }
}


export default News
