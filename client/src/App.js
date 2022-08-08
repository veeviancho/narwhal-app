import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react"

import api from "./api"
import SharedLayout from "./layouts/sharedLayout";

import routes from "./routes"

const UserContext = createContext();

function App() { 
  
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await api.get("/current_user");
    const data = await response.data;
    if (data) {
      setUser(data)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const nestedRoutes = (route, index) => {
    const { path, element, children } = route;
    if (children) {
      return <Route key={index} path={path} element={element}>
        {children.map((child, index) => {
          return nestedRoutes(child, index)
        })}
      </Route>
    }
    return <Route key={index} path={path} element={element} />
  }

  return (
    <UserContext.Provider value={{user}}>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        {routes.map((route, index) => {
          return nestedRoutes(route, index)
        })}
        <Route path='help'/>
      </Route>
    </Routes>
    </UserContext.Provider>
  )
}

export default App;
export { UserContext };
