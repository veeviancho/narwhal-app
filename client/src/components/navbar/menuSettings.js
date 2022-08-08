import { caret } from '../../assets/icons/nav'
import { useContext } from 'react'
import { UserContext } from "../../App"

const MenuSettings = () => {
  const { user } = useContext(UserContext)
  const { name, avatar } = user

  return (
  <div className="subtitle title-bold center">
    <span className="op-5 px">Hello, { name }</span>
    <img 
      className="profile-img px" 
      src={ avatar }
      alt={ name }
    />
    <div className="px">{caret}</div>
  </div>
  );
}

export default MenuSettings