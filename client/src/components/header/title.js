import { useLocation } from "react-router-dom"
import routes from "../../routes"

const Title = () => {
  const path = useLocation();
  const location = (path.pathname.slice(1, path.pathname.length).split("/"))[0];
  
  const {icon} = routes.find(route => route.path === location)
  const title = location[0].toUpperCase() + location.slice(1)

  return (
    <h1 className="title-bold">
      <span className="icon-grey">{icon}</span>
      <span className="px-1">{ title }</span>
    </h1>
  )
}

export default Title;