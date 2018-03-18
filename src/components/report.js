import React, { Component } from 'react';
import {Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import scoreBg from '../svg/score_bg.svg';

class Report extends Component {
  render() {
    return (
      <div className="App">
        <p>this is a report page</p>
        <img src={scoreBg} width="200" height="200"/>
        <br />
        <Button type="primary" inline id='button1'>start</Button>
        <br />
        <Button type="warning" inline >warning</Button>
        <br />
        <Link to="/">Go back</Link>
      </div>
      
    );
  }
}

export default Report;
