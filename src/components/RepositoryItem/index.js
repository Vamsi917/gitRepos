// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachRepo} = props
  const {
    name,
    id,
    issues_count: issuesCount,
    forks_count: forksCount,
    stars_count: starsCount,
    avatar_url: avatarUrl,
  } = eachRepo
  return (
    <li className="li-git">
      <img src={avatarUrl} className="avatar-img" alt={name} />
      <div className="head-cont">
        <h1 className="git-head">{name}</h1>
      </div>
      <div className="three-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars-img"
        />
        <p className="stars-par">{`${starsCount} stars`}</p>
      </div>
      <div className="three-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars-img"
        />
        <p className="stars-par">{`${forksCount} forks`}</p>
      </div>
      <div className="three-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="stars-img"
        />
        <p className="stars-par">{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
