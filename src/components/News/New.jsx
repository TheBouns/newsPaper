import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./New.css";

const News = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  });
  const newItem = news.map((item) => {
    console.log(item.title);
    if (item.multimedia && item.title)
      return (
        <div className="new" key={item.title}>
          <img src={item.multimedia[1].url}></img>
          <div className="newInfo">
            <h2>{item.title}</h2>
            <p>{item.abstract}</p>
            <div className="newFooter">
              <h4>{item.byline}</h4>
              <a href={item.url} target="_blank">
                <h3>
                  More
                  <AiOutlineArrowRight />
                </h3>
              </a>
            </div>
          </div>
        </div>
      );
  });
  return <div className="newsContainer">{newItem}</div>;
};

export default News;
