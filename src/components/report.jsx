import React, { Component } from 'react';
import {Button, Progress } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './report.css';
import myProgressBar from './myProgressBar';

// Highcharts
const ReactHighcharts = require('react-highcharts');
// // Highcharts more
var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);
var HighchartsExporting = require('highcharts-exporting');
HighchartsExporting(ReactHighcharts.Highcharts);
var HighchartsSolidGauge = require('highcharts-solid-gauge');
HighchartsSolidGauge(ReactHighcharts.Highcharts);

// import highcharts circle view
var singleExamData = require('../utils/single_exam_chart_data.js');
var config = singleExamData.get_single_exam_chart_view_data("exam_data.exam_name", 80);

var config2 = {
  chart: {
      marginTop: 40
  },
  title: {
      text: '2017 YTD'
  },
  xAxis: {
      categories: ['<span class="hc-cat-title">Revenue</span><br/>U.S. $ (1,000s)']
  },
  yAxis: {
      plotBands: [{
          from: 0,
          to: 150,
          color: '#666'
      }, {
          from: 150,
          to: 225,
          color: '#999'
      }, {
          from: 225,
          to: 9e9,
          color: '#bbb'
      }],
      title: null
  },
  series: [{
      data: [{
          y: 275,
          target: 250
      }]
  }],
  tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
  }
};

class Report extends Component {
  render() {
    return (
      <div>
        <div id="titleContainer" style={{textAlign:"center"}}>
          <p>xxx的xxx考试报告</p>
        </div>
        
        <div id="scoreContainer" style={{minWidth: "400px", maxWidth: "600px", height: "400px", margin: "auto"}}>
          <ReactHighcharts config = {config}></ReactHighcharts>
        </div>

        <div id="examDetailsContainer" style={{margin: 150}}>
          做题情况
          什么类型的题目，对了几道错了几道
          <myProgressBar />
          <div className="show-info">
            <div className="progress"><Progress percent={50} position="normal" /></div>
            <div aria-hidden="true">50%</div>
          </div>
        </div>

        <div id="suggestionContainer" style={{margin: 150,textAlign:"center"}}>
          建议意见
        </div>
        {/* <Button type="primary" inline size="small">share</Button> */}

        <br />  
        <Link to="/">Go back</Link>
      </div>
      
    );
  }
}

export default Report;
