import React, { Component } from 'react';
import {InputItem, Carousel, WhiteSpace} from 'antd-mobile';
import './questionCarousel.css';


class QuestionCarousel extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: props.examJsonData.questions,
      slideIndex: 0,
      currentQuestionId: 0,
      answers: []
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount = () => {
    this.state.answers = this.initAnswerArray();
    this.setState();
  }

  initAnswerArray = () => {
    let mArray = []
    this.state.data.forEach(element => {
      mArray.push("");
    });
    return mArray;
  }

  returnAnswers = () => {
    return this.state.answers;
  }

  onInputChange = (event) => {
    let answerData = this.state.answers;
    answerData[parseInt(this.state.currentQuestionId)] = event;
    this.setState({answers: answerData});
  }
  
  render(){
    return(
      <Carousel
          autoplay={false}
          infinite
          selectedIndex={0}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => {
            this.setState({currentQuestionId: index});
          }}
        >
          {this.state.data.map((val, index) => (
            <div className="questionContainer" key={index}>
              <div className="questions">
                <h3>第{val.questionId}题:</h3>
                <section id="questionSection">
                  <article>
                    {val.content}
                  </article>
                  <br />
                  <div>
                    {
                      val.questionImages.map((value, imageIndex) => (
                        <img src={require("../images/" + value)} alt="题目图片加载中..."  className="questionImages" key={imageIndex+value}/>
                      )) 
                    }
                  </div>
                </section>
                <WhiteSpace />
                <section id="optionSection">
                  <div>
                    {
                      val.optionImages.map((value, imageIndex) => (
                        <img src={require("../images/" + value)} alt="选项图片加载中..." className="optionImages" key={imageIndex+value}/>
                      )) 
                    }
                  </div>
                </section>
              </div>
              <WhiteSpace />
              <div className="answers">
                <InputItem placeholder="请把答案填在这里" id={"inputItem"+index} onChange={this.onInputChange} />
              </div>
            </div>
          ))}
        </Carousel>
    );

  }
}

export default QuestionCarousel;
