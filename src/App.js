import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import CreateContext from './Context/CreateContext'

import './App.css'

import Home from './components/Home'
import AdditionalQuestions from './components/AdditionalQuestions'

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
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/additional-questions"
            component={AdditionalQuestions}
          />
        </Switch>
      </CreateContext.Provider>
    )
  }
}

export default App
