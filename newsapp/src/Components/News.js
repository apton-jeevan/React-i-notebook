import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Heinz Schenk",
            "title": "Ice-man Miller believes Jansen can become his spiritual Proteas successor: 'He has the gift'",
            "description": "David Miller has little doubt Marco Jansen can add to his ever-expanding cricketing repertoire by eventually becoming the type of \"finisher\" he already is with the bat for the Proteas.",
            "url": "https://www.news24.com/sport/cricket/proteas/ice-man-miller-believes-jansen-can-become-his-spiritual-proteas-successor-he-has-the-gift-20230201",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/8208/bc853fe5febe4d7fabeb303e90ceb31c.jpg",
            "publishedAt": "2023-02-01T09:58:53+00:00",
            "content": "In Kimberley\r\n<ul><li>David Miller believes Marco Jansen could take the baton from him as the Proteas' designated finisher in white-ball cricket in future.</li><li>The stalwart added that he enjoyed … [+3237 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h1>News Component</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return(<div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>)

                    })}


                </div>

            </div>
        )
    }
}


export default News
