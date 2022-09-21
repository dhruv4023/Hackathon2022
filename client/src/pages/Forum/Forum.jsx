import React from 'react'
import InsideForum from './InsideForum'

import './forum.css'

function Forum() {
  return (
    <div className='container_app'>
      <div className="container2_app">
        <div className="title_askBtn_forum">
          <div className="title_Forum">
            Forum To solve Your Doubts
          </div>
          <div className="ask_btn_forum">
            Ask Your Doubt
          </div>
        </div>
        <div className="doubts_list_container_forum">
          <div className="list_forum">
            <InsideForum />
            <InsideForum />
            <InsideForum />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forum