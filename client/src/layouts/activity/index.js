import ActivityItem from '../../components/activity/activityItem'

const ActivityBody = ({activities}) => {
  return <>
    {activities.map(item => {
      return <ActivityItem key={item.id} activity={item} />
    })}
  </>
}

const ActivityFeed = ({activity}) => {
  const { loading, data } = activity
  return <div className="box box-activity">
    <div className="content-top">
      <h2 className="title title-bold">Activity</h2>
    </div>
    <div className="activity">
      { loading ? <h1>...</h1> : <ActivityBody activities={data}/> }
    </div>
  </div>
}

export default ActivityFeed;