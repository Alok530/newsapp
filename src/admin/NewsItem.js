import React from 'react'



const NewsItem = (props) => {
    let { title, description, imgurl, newsUrl, author, date } = props;
    return (
        <div className="my-3">
            <div className="card" style={{background:'white',border:'1px solid black'}}>
                <img src={imgurl == null ? "https://images.barrons.com/im-238909/social" : imgurl} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text" style={{ fontSize: '10px', fontWeight: 'bold' }}>By : {author == null ? 'Unknow' : author} on {new Date(date).toGMTString()}</p>
                    <a href={newsUrl} target=" " class="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;