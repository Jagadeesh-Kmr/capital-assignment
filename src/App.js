import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import CreateContext from './Context/CreateContext'

import './App.css'

import Home from './components/Home'

class App extends Component {
  state = {
    showImg: true,
  }

  toggleImg = () => {
    this.setState(prevState => ({showImg: !prevState.showImg}))
  }

  render() {
    const {showImg} = this.state
    return (
      <CreateContext.Provider
        value={{
          showImg,
          toggleImg: this.toggleImg,
        }}
      >
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </CreateContext.Provider>
    )
  }
}

export default App

/*
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]
*/
