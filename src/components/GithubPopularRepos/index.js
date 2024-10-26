import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    gitItems: [],
    isError: false,
    isLoading: true,
    activeTab: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getGitItems()
  }

  onSuccess = data => {
    const popularRepos = data.popular_repos
    this.setState({gitItems: popularRepos, isLoading: false})
  }

  onFailure = () => {
    this.setState({isError: true, isLoading: false})
  }

  getGitItems = async () => {
    const {activeTab} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTab}`
    try {
      const response = await fetch(url)

      const data = await response.json()
      if (response.ok === true) {
        this.onSuccess(data)
      } else {
        this.onFailure()
      }
    } catch (error) {
      this.onFailure()
    }
  }

  handleRepos = id => {
    const {isLoading} = this.state
    this.setState({activeTab: id, isLoading: true}, this.getGitItems)
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {gitItems, isError, isLoading, activeTab} = this.state

    return (
      <div className="bg-cont">
        <h1 className="head">Popular</h1>
        <ul className="ul-laguage">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              eachLanguage={eachLanguage}
              key={eachLanguage.id}
              handleRepos={this.handleRepos}
              isActive={eachLanguage.id === activeTab}
            />
          ))}
        </ul>
        <div>
          {isError ? (
            isLoading ? (
              this.renderLoader()
            ) : (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
                  alt="failure view"
                  className="fail-img"
                />
              </div>
            )
          ) : (
            <ul className="ul-git">
              {isLoading
                ? this.renderLoader()
                : gitItems.map(eachRepo => (
                    <RepositoryItem eachRepo={eachRepo} key={eachRepo.id} />
                  ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
