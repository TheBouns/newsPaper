import React,{useContext, useEffect} from "react";
import { GlobalContext } from "../../context/GlobalState";
import './New.css'

const News =()=>{
  const {news,getNews}   = useContext(GlobalContext);
  useEffect(()=>{
    getNews()
  },);
  const newItem= news.map((item)=>{
    return(
      
      <div className="new" key={item.title} >
          <img src={item.multimedia[1].url}></img>
          <h2>{item.title}</h2>
          <p>{item.abstract}</p>
          <p>{item.byline}</p>
          
      </div>
      
    )
  })
  return <div className="newsContainer">{newItem}</div>
}

export default News;