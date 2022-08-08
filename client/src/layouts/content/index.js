import ContentCard from "../../components/content/contentCard"
import { useOutletContext } from "react-router-dom"

const ContentBody = ({data}) => {
  return <>
    { data.map(item => {
      return (
        <ContentCard key={item.id} data={item} />
      )
    })}
  </>
}

const Content = () => {
  const [ total, content ] = useOutletContext();
  const { loading, data } = content;

  return <div className="box box-content">
    <div className="spaced center content-top">
      <h2 className="title title-bold">All Teams</h2>
      <p className="text-grey">Showing {data.length} out of {total} teams</p>
    </div>
    <div className="content-bottom">
      { loading ? <h1>...</h1> : <ContentBody data={data}/>}
    </div>
  </div>
}

export default Content;