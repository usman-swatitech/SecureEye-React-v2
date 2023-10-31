import React, { Fragment } from 'react';
import './index.css';
import './aziz.css'
import './usman.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Router';

const App = () => {
  return(
    <Fragment>
      <h1 className='text-danger'>Heading</h1>
      <Routes/>
    </Fragment>
  )
}

export default App;