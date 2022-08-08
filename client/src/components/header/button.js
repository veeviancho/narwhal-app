import {plus} from "../../assets/icons/header"
import Modal from "./modal"
import { useState } from "react"

const Button = () => {

  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return <>
  <button className="btn subtitle" onClick={() => openModal()}>
    <span className="pr-1">{plus}</span> 
    CREATE NEW TEAM
  </button>
  { modalVisible && <Modal closeModal={closeModal}/>}
  </>
}

export default Button;