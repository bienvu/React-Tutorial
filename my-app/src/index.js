import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout';

// import './css/reset.css'
// import './css/base.css'
// import './css/header.css'
// import './css/style.css'

render((
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
), document.getElementById('app'));
