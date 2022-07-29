/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-07-29 22:28:28
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-07-29 23:23:26
 */
import './App.less';

import { Button } from 'antd';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes></Routes>
        <Button> 111</Button>
      </div>
    </BrowserRouter>
  );
}

export default App;
