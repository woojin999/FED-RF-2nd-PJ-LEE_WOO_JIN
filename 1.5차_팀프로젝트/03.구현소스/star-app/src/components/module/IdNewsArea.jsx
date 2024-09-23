//  3-2. 메인 뉴스(뉴스,시리즈)영역 컴포넌트 - IdNewsArea.jsx 

import React from "react";
import { newsItemData, seriesData } from "../../data/id_main_data";

// CSS 불러오기
import "../../css/id_news_area.scss";

function IdNewsArea(props) {
  return (
    <section className="news-area">
      <div className="news-area box fx-box">
        <div className="left-wrap">
          <div className="left-box news-box">
            <h2>12 Star Wars Movie Poster Designs Found Only in Japan</h2>
            <div className="left-img hover-img"></div>
          </div>
        </div>
        <div className="right-wrap">
          <h4>More News + Features</h4>
          {newsItemData
            .slice(1)
            .map(
              (v,i) => 
        <div key={i} className="item-box news-box">
        <div className="series-img hover-img"></div>
        <p className="info">
         {v.tit}
        </p>
      </div>
        
            )
            }
          <div className="btnbox">
            <a className="btn" href="https://www.starwars.com/news" target="_blank" rel="noreferrer">
              VIEW ALL
            </a>
            <a
              className="btn yellow"
              href="https://www.starwars.com/news/star-wars-japanese-posters"
              target="_blank"
              rel="noreferrer"
            >
              MORE INFO
            </a>
          </div>
        </div>
      </div>
      {/* 한번더붙임 */}
      <div className="right-wrap second">
        <h4 className="title-sub2">ALL series</h4>
        {seriesData
          .map(
            (v,i) => 
      <div key={i} className="item-box">
        <div className={v.imgClass}></div>
        <p className="info"><strong className="title-topic">{v.title}</strong></p>
        <span className="info"
          >{v.info}</span></div>
      
          )
          }
        <div className="btnbox">
          <a className="btn" href="https://www.starwars.com/series" target="_blank"
          rel="noreferrer">
            VIEW ALL
          </a>
          <a
            className="btn yellow"
            href="https://www.starwars.com/search?q=TRAILER"
            target="_blank"
            rel="noreferrer"
          >
            WATCH TRAILER▶
          </a>
        </div>
      </div>
    </section>
  );
}

export default IdNewsArea;
