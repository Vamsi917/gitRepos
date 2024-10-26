// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, handleRepos, isActive} = props
  const {id, language} = eachLanguage
  const choosenTab = isActive ? 'colored-butn' : 'butn'
  const tabClicked = () => {
    handleRepos(id)
  }
  return (
    <button className={`${choosenTab}`} id={id} onClick={tabClicked}>
      <li className="li-cont">
        <p className="language">{language}</p>
      </li>
    </button>
  )
}

export default LanguageFilterItem
