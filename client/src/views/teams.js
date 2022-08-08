import Header from "../layouts/header";
import ActivityFeed from "../layouts/activity";

import React, { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";

import api from "../api";

import { UserContext } from "../App"

const TeamsContext = React.createContext();

const Teams = () => {

  const { user } = useContext(UserContext);

  const [content, setContent] = useState({
    loading: true,
    data: []
  })
  const [activity, setActivity] = useState({
    loading: true,
    data: []
  })
  const [isFilter, setIsFilter] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [filteredContent, setFilteredContent] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [finalContent, setFinalContent] = useState({
    loading: true,
    data: []
  });

  const getAllData = async (url) => {
    try {
      let loading = true
      const response = await api.get(url);
      const data = await response.data
      if (data) {
        loading = false
        if (url === "teams") {
          setContent({ loading, data })
        }
        else {
          setActivity({ loading, data })
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getAllData("teams");
    getAllData("activities");
  }, [])

  const total = content.data.length;

  const handleFilter = (filter) => {
    setIsFilter(true)
    setSearchTerm('');
    if (filter === "Favorites") {
      const data = content.data.filter(item => item.is_favorited)
      setFilteredContent({loading: false, data })
      setFinalContent({loading: false, data })
    } else if (filter === "Archive") {
      const data = content.data.filter(item => item.is_archived)
      setFilteredContent({loading: false, data })
      setFinalContent({loading: false, data })
    } else {
      setFilteredContent(content)
      setFinalContent(content)
    }
  }

  const handleSearch = (term) => {
    setIsSearch(true)
    setSearchTerm(term)

    let arr = []
    if (isFilter) arr = filteredContent.data;
    else arr = content.data;

    if (term !== '') {
      const data = arr.filter(item => {
        return item.name
          .toLowerCase()
          .includes(term.toLowerCase())
      });
      setFinalContent({ loading: false, data })
    } else {
      setFinalContent({ loading: false, data: arr })
    }
  }

  const updateContent = async (team) => {
    try {
      const response = await api.put(`/teams/${team.id}`, team);
      const res = await response.data;
      if (res) {
        getAllData("teams");
      }
    } catch (err) {
      console.error(err)
    }
  }

  const updateActivity = async (action, target) => {
    const created_at = "1 minute ago"
    const { id, name, avatar } = user;
    const newActivity = {
      person: {
        id,
        name,
        avatar
      },
      action,
      target,
      created_at
    }
    const response = await api.post(`/activities`, newActivity)
    const res = await response.data;
    if (res) {
      getAllData("activities");
    }
  }

  const final = isFilter || isSearch ? finalContent : content
  
  return (
    <>
      <TeamsContext.Provider value={{handleSearch, handleFilter, searchTerm, updateContent, updateActivity}}>
        <Header/>
      <div className="content-activity">
        <Outlet context={[total, final]}/>
        <ActivityFeed activity={activity} />
      </div>
      </TeamsContext.Provider>
    </>
  );
}

export default Teams;
export { TeamsContext };