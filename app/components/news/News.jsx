import React from 'react'
import { createStore } from 'redux';

import  './news.scss'

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="news">
          Hi, guys!
          <p>Welcome to News Page!</p>
        </h2>
      </div>
    )
  }
})