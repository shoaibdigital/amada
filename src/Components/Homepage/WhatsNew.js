import React from "react";

function WhatsNew({ event }) {
    
  return (
    event &&
    <div className="bs-section">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-title">WHAT'S NEW</h2>
        </div>
        <div className="sec-cont">
          <div className="lyt-news">
            <ul className="list">
              {event &&
                event.map((item) => {
                  return  <li className="item" key={item.id}>
                      <div className="bs-img-overlay">
                        <div
                          className="img-wrap bs-news lozad-background"
                          style={{
                            backgroundImage:
                              "url(" +
                              `https://strapi.amada.ae${item.smallImage.url}` +
                              ")",
                          }}
                        >
                          <a
                            href={item.url}
                            target="_blank"
                            className="news-link"
                          ></a>
                          <span className="icon icon-linkedin"></span>
                          <div className="news-info">
                            <div className="date">{item.subtitle}</div>
                            <p className="desc">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
