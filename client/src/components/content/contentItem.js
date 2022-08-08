import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import initialState from "./initialState"

import ContentItemBottom from "./contentItemBottom";
import { star, starFill } from "../../assets/icons/content"
import { TeamsContext } from "../../views/teams";

const ContentItem = () => {
  const {updateContent, updateActivity} = useContext(TeamsContext)
  const {id} = useParams();
  const [content, setContent] = useState({initialState})
  const {name, image, description, created_at, is_favorited, is_archived } = content;

  const fetchData = async (url) => {
    const response = await api.get(url);
    const data = await response.data;
    if (data) {
      setContent(data)
    }
  }

  useEffect(() => {
    fetchData(`/teams/${id}`)
  }, [])

  const handleClick = () => {
    const newItem = {...content, is_favorited: !is_favorited}
    setContent(newItem)
    updateContent(newItem)
  }

  const handleDblClick = () => {
    const newItem = {...content, is_archived: !is_archived}
    setContent(newItem)
    updateContent(newItem)
    if (is_archived === false) {
      updateActivity("archived_team", name)
    }
  }

  const updateCount = (e, newContent) => {
    const name = e.target.name;

    // Update Content
    setContent(newContent)
    updateContent(newContent);

    // Update Activity
    let value = 0;
    let action = '';
    const target = newContent.name;

    if (name === 'campaigns_count') value = newContent.campaigns_count;
    else value = newContent.leads_count;

    if (value > content[name]) {
      action = `added_${name.slice(0, name.indexOf('_'))}`
      updateActivity(action, target);
    } else if (value < content[name]) {
      action = `reduced_${name.slice(0, name.indexOf('_'))}`
      updateActivity(action, target);
    }
  }

  return <div className="box box-content">

    <div className="spaced center content-top" onDoubleClick={handleDblClick}>
      <h2 className="title title-bold">{ name }<span className="text-grey"> {is_archived && "[Archived]"}</span></h2>
      <div className="cursor" onClick={handleClick}>
        { is_favorited ? starFill : star }
      </div>
    </div>

    <div className="activity">
      <div className="columns center">
        <img src={ image } alt="img" />
        <div className="px-1">
          <div className="content-item-top">
            <div className="content-subtitle">{ created_at && `Created ${ created_at }`}</div>
            <p className="center">{ description }</p>
          </div>
          <div className="content-item-bottom center">
            <ContentItemBottom content={content} updateCount={updateCount}/>
          </div>
        </div>
      </div>
    </div>

  </div>
}

export default ContentItem;