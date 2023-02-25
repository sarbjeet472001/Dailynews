import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const capitalize=(word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  const [p,setP]=useState(1);
  const [tr,setTr]=useState(0);
  const [article,setArticle]=useState([])
  const [loading,setLoading]=useState(true)
  document.title=`${capitalize(props.cat)}-DailyNews`

  const cmd=async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apikey}&pageSize=${props.pagesize}`;
    setLoading(true)
    let data=await fetch(url);
    props.setProgress(30)
    let parsedData=await data.json()
    props.setProgress(70)
    console.log(parsedData)
    setArticle(parsedData.articles)
    setTr(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  useEffect(()=>{
    cmd();
  },[])

  const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apikey}&page=${p+1}&pageSize=${props.pagesize}`;
    setP(p+1);
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData)
    setArticle(article.concat(parsedData.articles))
    setTr(parsedData.totalResults)
  };

  return (
    <>
       <h2 className={`text-center text-${props.tcol}`} style={{margin:"35px 0px", marginTop:"90px"}}>DailyNews-Top {capitalize(props.cat)} Headlines</h2>
       {loading && <Spinner/>}
       <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==tr}
          loader={<Spinner/>}
        >
      <div className="container">
      <div className='row my-3'>
        {article.map((element)=>{
            return <div className='col-md-4 my-2'>
            <Newsitem title={element.title?`${element.title.slice(0,45)}...`:""} description={element.description?`${element.description.slice(0,88)}...`:""} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
      </div>
      </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
