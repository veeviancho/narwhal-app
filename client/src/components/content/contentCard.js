import { star, starFill, chat, leads } from '../../assets/icons/content'
import { useContext, useState } from 'react'
import { TeamsContext } from '../../views/teams'
import { Link } from "react-router-dom"


const ContentCard = ({data}) => {
  const { updateContent, updateActivity } = useContext(TeamsContext)

  const { id, name, image, description, campaigns_count, leads_count, is_favorited, is_archived, created_at } =  data;
  const [isFav, setIsFav] = useState(is_favorited)
  const [isArch, setIsArch] = useState(is_archived)

  const handleClickFav = () => {
    setIsFav(!is_favorited)
    const newData = {...data, is_favorited: !is_favorited}
    updateContent(newData)
  }

  const handleClickArch = () => {
    setIsArch(!is_archived)
    const newData = {...data, is_archived: !is_archived}
    updateContent(newData)
    if (is_archived === false) {
      updateActivity("archived_team", data.name)
    }
  }

  return <div className={`content-item ${isArch && 'content-item-archive'}`} onDoubleClick={handleClickArch}>
    <div className="content-item-top">
      <div className="columns">
        <Link to={`/teams/${id}`}><div><img className="content-img" src={ image } alt="img" /></div></Link>
        <Link to={`/teams/${id}`}>
        <div className="px-1">
          <div className="content-title">{ name }</div>
          <div className="content-subtitle">{ created_at && `Created ${ created_at }`}</div>
        </div>
        </Link>
        <div className="content-star" onClick={() => handleClickFav()}>
          { isFav ? starFill : star }
        </div>
      </div>
      <p className="content-desc">{ description }</p>
    </div>

    <div className="content-item-bottom columns">
      <div className="pr-1 center">{chat} <span className="px">{ campaigns_count } Campaigns</span></div>
      <div className="center">{leads} <span className="px">{ leads_count } Leads</span></div>
    </div>

  </div>
}

export default ContentCard;