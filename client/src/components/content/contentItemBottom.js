import { chat, leads } from "../../assets/icons/content"
import { useEffect, useState, useContext } from "react"
import initialState from "./initialState";

const ContentItemBottom = ({content, updateCount}) => {

  const [isVisible, setIsVisible] = useState({
    campaigns_count: true,
    leads_count: true
  })
  const [temp, setTemp] = useState(initialState)

  useEffect(() => {
    if (content.campaigns_count !== undefined || content.leads_count !== undefined) setTemp(content)
  }, [content])

  const toggleVisibility = (e) => {
    const { name } = e.target;
    setIsVisible(prev => {
      return {
        ...prev,
        [name]: !prev[name]
      }
    })
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTemp(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleUpdate = (e) => {
    updateCount(e, temp);
    toggleVisibility(e);
  }

  return (
  <div className="columns">
    <div className="pr-1 center">
      {chat}
      <div className={isVisible.campaigns_count ? "visible" : "visible-false" }>
        <span className="px">{ content.campaigns_count } Campaigns</span>
        <button className="edit-btn" name="campaigns_count" onClick={(e) => toggleVisibility(e)}>Edit</button>
      </div>
      <div className={isVisible.campaigns_count ? "visible-false" : "visible" }>
        <span className="px"><input className="edit-input" type="number" name="campaigns_count" value={temp.campaigns_count} onChange={e => handleChange(e)}/> Campaigns</span>
        <button className="edit-btn" name="campaigns_count" onClick={(e) => handleUpdate(e)}>Update</button>
        <button className="edit-btn" name="campaigns_count" onClick={(e) => toggleVisibility(e)}>Cancel</button>
      </div>
    </div>

    <div className="pr-1 center">
      {leads}
      <div className={isVisible.leads_count ? "visible" : "visible-false" }>
        <span className="px">{ content.leads_count } Leads</span>
        <button className="edit-btn" name="leads_count" onClick={(e) => toggleVisibility(e)}>Edit</button>
      </div>
      <div className={isVisible.leads_count ? "visible-false" : "visible" }>
        <span className="px"><input className="edit-input" type="number" name="leads_count" value={temp.leads_count} onChange={e => handleChange(e)}/> Leads</span>
        <button className="edit-btn" name="leads_count" onClick={(e) => handleUpdate(e)}>Update</button>
        <button className="edit-btn" name="leads_count" onClick={(e) => toggleVisibility(e)}>Cancel</button>
      </div>
    </div>

  </div>
  )
}

export default ContentItemBottom;