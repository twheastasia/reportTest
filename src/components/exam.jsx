import React, {Component} from 'react';
import './exam.css';
import {Button, WingBlank, WhiteSpace, Toast, Modal } from 'antd-mobile';
import QuestionCarousel from './questionCarousel';
import jsonData from '../examData/1.json';


function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}


class ExamPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      modal1: false,
      answers: []
    };

  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    let an = this.refs.question.returnAnswers();
    this.setState({
      [key]: true,
      answers: an
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }


  render(){
    return (

      <WingBlank id="main">
  
        <div id="timeCounter">
          <span style={{color: "red"}}>06:00</span>
        </div>
        <header id="examTitle">
          <h1>{jsonData.name}</h1>
          <h5>（时间{jsonData.time / 60}分钟）</h5>
        </header>
  
        <QuestionCarousel examJsonData={jsonData} ref="question"/>
  
        <WhiteSpace />
        <Button id="submitBtn" onClick={this.showModal('modal1')} type="primary">
          提交
        </Button>
        <WhiteSpace />
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="你提交的答案"
          footer={[{ text: 'Cancel', onPress: () => { console.log('Cancel'); this.onClose('modal1')(); } },
                    { text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            {
              this.state.answers.map((val,index) => (
                <p key={"answer"+index}>第{index+1}题：{val}</p>
              ))
            }
          </div>
        </Modal>

    
      </WingBlank>
    )
  };

}

export default ExamPage;