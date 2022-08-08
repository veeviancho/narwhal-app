import { search } from "../../assets/icons/header";
import { useContext } from "react";
import { TeamsContext } from "../../views/teams";
import { Link } from "react-router-dom"

const SearchBar = () => {
  const {handleSearch, searchTerm} = useContext(TeamsContext)

  const searchTeams = (e) => {
    handleSearch(e.target.value);
  }

  return <Link to="/teams"><div className="title-bold">
    {search} &nbsp;
    <input 
      className="search" 
      placeholder="Search team name ..."
      onChange={e => searchTeams(e)}
      value={searchTerm}
    />
  </div>
  </Link>
}

export default SearchBar;