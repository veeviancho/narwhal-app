import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

const BreadCrumbs = () => {

  const { pathname } = useLocation();
  const { id } = useParams();

  const paths = pathname.slice(1).split('/');

  const [crumbs, setCrumbs] = useState([]);

  const getCrumbs = () => {
    let url = ''
    let newItem = []
    for (let i=0; i<paths.length; i++) {
      url += `/${paths[i]}`
      const name = paths[i] === id ? "Details" : paths[i]
      newItem.push({
        name: name ? name[0].toUpperCase() + name.slice(1) : 'Home',
        url
      })
    }
    setCrumbs(newItem)
  }

  useEffect(() => {
    getCrumbs();
  }, [pathname])

  return (
    <p className="title title-regular nav-item center px-2">
      {crumbs.map((item, index, { length }) => {
        const { name, url } = item;
        if (index !== length-1) return <Link key={index} to={url}>{ `${name} >` }</Link>
        return <Link key={index} to={url}>&nbsp;{ name }</Link>
      })}
    </p>
  );
};

export default BreadCrumbs;