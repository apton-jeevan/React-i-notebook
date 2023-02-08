
import React, { Component } from 'react'
export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date,source } = this.props
        return (
            <div>
                <div className="card">
                    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{zIndex:"1", left:"80%"}}>
                       {source}
                    </span>
                    <img src={imageUrl ? imageUrl : "https://gumlet.assettype.com/barandbench%2F2021-01%2F47f6c197-325e-4776-86e5-354fbb11fee1%2FElection__1_.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true"} style={{ height: "200px" }} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p>By {author?author:"unknown"} on {(new Date(date)).toDateString()}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewsItem