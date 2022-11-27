import "./widget.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function Sidebar() {


    const newsArticle = (heading, subtitle) => {
        return (<div className="widgets__article">
            <div className="widget__articleleft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkdin News</h2>
                <InfoIcon />
            </div>

            {newsArticle('Woman Life Freedom', 'top news of Iran -1M readers')}
            {newsArticle('Iranian Revolution', 'top news of Iran -1M readers')}
            {newsArticle('It is going to happen', 'top news of Iran -1M readers')}
        </div>
    )
}