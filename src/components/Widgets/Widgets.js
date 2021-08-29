import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__inner">
        <div className="widgets__header">
          <h2>
            LinkedIn News
          </h2>
          <InfoIcon />
        </div>
        {newsArticle("Communication Foundations", "Brenda Bailey-Hughes and Tatiana Kolovou")}
        {newsArticle("How to Be Both Assertive and Likable", "American Negotiation Institute and Kwame Christian")}
        {newsArticle("Agile Foundations", "Sandy Bail")}
        {newsArticle("Job Offers & Careers", "Company, Staffingand recruiting")}
        {newsArticle("The Economist", "Auckland in New Zealand is the best city to live in across the globe")}
      </div>


      <div className="widgets__image">
        <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />

      </div>
    </div>
  )
}

export default Widgets
