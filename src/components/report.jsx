import React, { Component } from 'react';
import {Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import scoreBg from '../svg/score_bg.svg';
import './report.css';

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

        <div id="scoreContainer2" style={{minWidth: "400px", maxWidth: "600px", height: "400px", margin: "auto"}}>
          {/* <img src="../svg/score_bg.svg"></img> */}
        </div>


        <div id="examDetailsContainer" style={{margin: 150,textAlign:"center"}}>
          做题情况
          什么类型的题目，对了几道错了几道
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
