import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './Redux/store';
import Index from './Components/index'
import Events from './Components/events'
import 'antd/dist/antd.css';
class App extends React.Component {

  render() {


    return (
      <Provider store={store}>

        <BrowserRouter>

          <Switch>

            <Route exact path='/' component={Index} />
            <Route path='/events/:name' component={Events} />
          </Switch>

        </BrowserRouter>
      </Provider>

    )
  }
}
export default App;