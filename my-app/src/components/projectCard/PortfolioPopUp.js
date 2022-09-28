import React from "react";
// import Me from "../../assets/img/work.jpg";

function PortfolioPopUp(props) {

  const title = props.title;
  const description = props.description;
  const imgUrl = props.imgUrl
  const OpenPortfolio = () => {
    props.setTrigger(false)
    // console.log(props);
  }

  return (props.trigger) ? (
    <div className="portfolio_popup"> 
      <div className="portfolio_popup-inner">
        <div className="portfolio_popup-content">
          <span className="portfolio_popup-close" onClick={OpenPortfolio}> X</span>
          <div className="pp_thumbail">
            <img
              src={imgUrl}
              alt="alt"
              width="500px"
              height="500px"
              className="portfolio_popup-img"
            />
          </div>

          <div className="portfolio_popup-info">
            <div className="potfolio_popup-subtitle">
              Featured - <span>{title}</span>
            </div>

            <div className="portfolio_popup-body">
              <h3 className="details_title">{title}</h3>
              <p className="details_description">
                {description}
              </p>
              <ul className="details_info">
                <li>
                  Created<span>dfgdh</span>
                </li>
                <li>
                  Tachnologies<span>etet</span>
                </li>
                <li>
                  Role<span>front</span>
                </li>
                <li>
                  View<span>tete</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
  ) : "" ;
}

export default PortfolioPopUp;
