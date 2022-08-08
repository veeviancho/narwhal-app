import { useState } from "react";
import api from "../../api"

const Modal = ({closeModal}) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    name: '',
    image: '',
    description: '',
    campaigns_count: 0,
    leads_count: 0,
    is_favorited: false,
    is_archived: false
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const CreateTeam = (e) => {
    e.preventDefault();
    postData();
  }

  const postData = async () => {
    setLoading(true)
    const response = await api.post("/teams", data)
    const resData = await response.data
    if (resData) {
      setLoading(false)
      closeModal();
      window.location.reload();
    } else {
      console.log("Unable to submit data")
    }
  }

  return <div>
    <div className="modal" onClick={() => closeModal()}></div>
    <div className="modal-close" onClick={() => closeModal()}>
      &times;
    </div>
    <div className="modal-content">
      <h1 className="modal-title">Create New Team</h1>
      <form className="modal-body" onSubmit={(e) => CreateTeam(e)}>
        <label className="label">Team Name</label>
        <input name="name" value={data.name} className="input" type="text" onChange={(e) => handleChange(e)} />

        <label className="label">Image URL</label>
        <input name="image" value={data.image} className="input" type="text" onChange={(e) => handleChange(e)} />

        <label className="label">Team Description</label>
        <textarea name="description" value={data.description} className="input" rows="3" onChange={(e) => handleChange(e)}></textarea>

        <label className="label">Campaigns Count</label>
        <input name="campaigns_count" value={data.campaigns_count} className="input" type="number" min="0" onChange={(e) => handleChange(e)} />

        <label className="label">Leads Count</label>
        <input name="leads_count" value={data.leads_count} className="input" type="number" min="0" onChange={(e) => handleChange(e)} />

        <button className="btn" type="submit">{ loading ? "SUBMITTING..." : "CREATE NEW TEAM"}</button>
      </form>
    </div>
  </div>
}

export default Modal;