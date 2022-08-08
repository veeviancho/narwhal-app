import { notifs } from '../../assets/icons/nav'
import { useContext } from 'react'
import { UserContext } from '../../App'

const MenuNotif = () => {
  const { user } = useContext(UserContext);
  const { notifications_count : notifs_count } = user;
  return (
    <div className="notif center px-1">
      {notifs}
      <div className="notif-badge center">{ notifs_count }</div>
    </div>
  )
}

export default MenuNotif