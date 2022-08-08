import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TeamsContext } from '../../views/teams';

const tabsArr = [
  {
    name: 'All',
    isActive: true
  },
  {
    name: 'Favorites',
    isActive: false
  },
  {
    name: 'Archive',
    isActive: false
  }
];

const Tab = () => {
  const { handleFilter } = useContext(TeamsContext);
  const [tabs, setTabs] = useState(tabsArr);

  const handleClick = (item) => {
    let newArr = tabs.map(newTab => {
      if (newTab.name === item) {
        return {...newTab, isActive: true}
      }
      return {...newTab, isActive: false}
    })
    setTabs(newArr)
    handleFilter(item)
  }

  return <div className="tab columns">
    { tabs.map((item, index) => {
      return (
        <Link key={index} to="/teams">
        <button 
          className={ `tab-item title-bold ${item.isActive && 'tab-item-active'}` }
          value={item.name}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </button>
        </Link>
      )
    })}  
  </div>
}

export default Tab;