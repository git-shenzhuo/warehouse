import React from 'react';
import './App.scss';
import HeadFtnn from './components/head-ftnn';//头部组件
import FootFtnn from './components/foot-ftnn';//尾部组件
import Router from './router/router';//中间部分
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import './iconfont/iconfont.css'
class App extends React.Component {
  // constructor(){
  //   super();
  //   console.log(this.props.dispatch())  //传参数过去就行
  // }
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <HashRouter>
            <div className="head"> <HeadFtnn /></div>

            <div className="mind"> <Router /></div>

            <FootFtnn className="foot" />
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

