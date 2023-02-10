
import React from 'react'
const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div>
            <div className="card" style={{height:'430px'}}>
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "80%" }}>
                    {source}
                </span>
                <img src={imageUrl ? imageUrl : "https://gumlet.assettype.com/barandbench%2F2021-01%2F47f6c197-325e-4776-86e5-354fbb11fee1%2FElection__1_.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true"} style={{ height: "200px" }} className="card-img-top" alt='loading error' />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p>By {author ? author : "unknown"} on {(new Date(date)).toDateString()}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary" style={{position:"absolute",bottom:"20px"}}>Read More</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem