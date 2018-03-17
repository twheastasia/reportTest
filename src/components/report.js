import React, { Component } from 'react';
import {Button } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Report extends Component {
  render() {
    return (
      <div className="App">
        <p>this is a report page</p>
        <Button type="primary" id='button1'>start</Button>
        <Button type="warning">warning</Button>
        <Link to="/">Go back</Link>
      </div>
      
    );
  }
}

export default Report;
