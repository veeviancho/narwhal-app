import Tab from "../../components/header/tab"
import SearchBar from "../../components/header/searchBar"
import Button from "../../components/header/button"
import Title from "../../components/header/title"

const Header = () => {
  return <div className="header">
    <div className="px-2 columns spaced">
      <Title />
      <Button />
    </div>
    <div className="columns spaced px-2">
      <div className="columns">
        <Tab />
      </div>
      <div className="pr-1">
        <SearchBar />
      </div>
    </div>
  </div>
}

export default Header;