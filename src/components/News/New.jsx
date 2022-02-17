import React,{useEffect,useState} from 'react';
import axios from 'axios';

const News = ()=>{
    const [news,setNews] = useState([]);
    
    const getNews = async ()=>{
        try {
            const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=0WpPTShc3tqz70ezkcATWr7zA0pyVNIC");
            const data = response.data.results;
            setNews(data)
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getNews();
      }, []);
      console.log(news)
     const newsItem = news.map((item)=>(
        
        <p>{item.byline}</p>
     )
     );
    return(
        <div>{newsItem}]!</div>
    )
}
export default News;