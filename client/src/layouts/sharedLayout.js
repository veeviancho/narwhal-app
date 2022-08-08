import SideNav from './sidenav';
import Nav from './navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react'

const SharedLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log('click')
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideNav isOpen={isOpen} />
      <div className="right-screen">
        <Nav handleClick={handleClick} />
        <Outlet />
      </div>
    </>
  )
};

export default SharedLayout;