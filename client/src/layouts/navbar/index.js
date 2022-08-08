import MenuSettings from '../../components/navbar/menuSettings'
import MenuNotif from '../../components/navbar/menuNotif'
import BreadCrumbs from '../../components/navbar/breadCrumbs'
import AppName from '../../components/navbar/appName'

const NavBar = ({handleClick}) => {
  return <div className="nav columns spaced">
  <div className="columns">
    <div onClick={handleClick}><AppName /></div>
    <BreadCrumbs />
  </div>
  <div className="columns px-2">
    <MenuNotif />
    <MenuSettings />
  </div>
  </div>
}

export default NavBar