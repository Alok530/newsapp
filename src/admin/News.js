import React from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import Scroll from './Scroll';
import { useState, useEffect } from 'react';

const News = (props) => {
    const [loading, setloading] = useState(false);
    const [nextBTNdisable, setnextBTNdisable] = useState(false);
    const [alok, setalok] = useState([]);
    const [tolatItem, settotalItem] = useState(0);
    const [page, setpage] = useState(1);
    
    
    
    const fetchAllfun = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=940e644e5d17426fb7643fdd69f1f3ec&page=1&pageSize=${props.pagesize}`
        setloading(true);
        let data = await fetch(url);
        // fetch() it return promises so await
        // the data we are getting after fetch url is in form of (json) which can not be use in javascript
        // so we need to convert json data into javascript Object by the help of { .json() } methods 
        let parsedData = await data.json();
        setalok(parsedData.articles);
        settotalItem(parsedData.totalResults);
        setpage(1);
        setnextBTNdisable(false);
        setloading(false);
    }

    const nextPage = async () => {
        if (page + 1 > Math.ceil(tolatItem / props.pagesize)) {
            setnextBTNdisable(true);
        } else {            
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=940e644e5d17426fb7643fdd69f1f3ec&page=${page + 1}&pageSize=${props.pagesize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setpage(page + 1);
            setalok(parsedData.articles);
            setnextBTNdisable(false);
        }
    }

    const previousPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=940e644e5d17426fb7643fdd69f1f3ec&page=${page - 1}&pageSize=${props.pagesize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        setalok(parsedData.articles);
        setpage(page - 1);
        setnextBTNdisable(false);
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        fetchAllfun();
    }, []);

    return (
        <>
            <Scroll />
            <div className="pageback" style={{ height: `${loading ? '100vh' : '100%'}` }}>
                <div className="container" >
                    <h1 className="text-center my-4" style={{ color: 'white' }}>News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                    {loading ? <Spiner /> : ''}
                    <div className="row">
                        {alok.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title}
                                        description={element.description}
                                        imgurl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className="container d-flex justify-content-between pb-4">
                        <button style={{ background:'#ff523b',color:'white'}} type="button" onClick={previousPage} disabled={page <= 1} className="btn btn-dark">&larr; Previous</button>
                        <button style={{ background:'#ff523b',color:'white'}} type="button" onClick={nextPage} disabled={nextBTNdisable} className="btn btn-dark">Next &rarr;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;