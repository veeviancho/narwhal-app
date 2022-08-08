const ActivityItem = ({activity}) => {
  const { person, action, target, created_at } = activity
  const [ act, object ] = action.split("_");

  return (
    <div className="columns">
      <div>
        <img className="profile-img" src={ person.avatar } alt="img" />
      </div>
      <div className="activity-text">
        <p className="activity-desc"><strong>{ person.name }</strong> { act } <strong>{ target }</strong>'s { object }.</p>
        <p className="activity-desc text-grey">{ created_at }</p>
      </div>
    </div>
  )
}

export default ActivityItem;