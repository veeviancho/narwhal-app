import { Logo, HelpIcon } from "../../assets/icons/sidenav-icons";
import './index.css';
import { NavLink } from "react-router-dom";
import routes from "../../routes"

const SideNav = ({isOpen}) => {

  const activeClassName = "sidenav-box-active sidenav-box center"
  const inactiveClassName = "sidenav-box center"

  const nav = routes.slice(1)

  return (
    <div className={`columns spaced sidenav ${isOpen ? 'sidenav-open' : 'sidenav-close'}`}>
      <div>
        <div className="logo center">{Logo}</div>
        {nav.map((route, index) => {
          const { path, icon } = route;
          return <NavLink key={index} to={path} className={({ isActive }) => isActive ? activeClassName : inactiveClassName }>
            { icon }
          </NavLink>
        })}
      </div>
      <div className="sidenav-box center">{HelpIcon}</div>
    </div>
  )
}

export default SideNav