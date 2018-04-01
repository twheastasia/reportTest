import React from 'react';
import './exam.css';
import {Button, Progress, InputItem, WingBlank, Carousel, WhiteSpace } from 'antd-mobile';

let state = {
  data: ['1', '2', '3'],
  imgHeight: 176,
  slideIndex: 0,
}


const ExamPage = ({}) => {
  return (

    <WingBlank id="main">

      <Progress percent={30} position="fixed" />
      <div id="timeCounter">
        <span style={{color: "red"}}>06:00</span>
      </div>
      <header id="examTitle">
        <h1>数学xxx考试</h1>
        <h5>（时间6分钟）</h5>
      </header>

      <Carousel
          autoplay={false}
          infinite
          selectedIndex={0}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {state.data.map((val, index) => (
            <div class="questionContainer">
              <div class="questions">
                <h3>第{val}题:</h3>
                <section>
                  <article>
                    计算::4.65×32+2.5×46.5+0.465×430=__________。
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。  
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=__________。 
                    计算::4.65×32+2.5×46.5+0.465×430=______2____。 
                    计算::4.65×32+2.5×46.5+0.465×430=_____1_____。 
                  </article>
                  <div class="questionImagesContainer">
                  </div>
                  <br/>
                  <div class="answerImageContainer">
                  </div>
                </section>
              </div>
              <div class="answers">
                <InputItem />
              </div>
            </div>
          ))}
        </Carousel>
      <WhiteSpace />
      <Button id="submitBtn" onclick="onSubmitBtnClicked()" type="primary">
        提交
      </Button>

      <div class="questionTable">
        <div class="questionRow" id="tips">
          <div class="questions" >
            <strong>题目内容</strong>
          </div>
          <div class="answers">
            <strong>请在这里填入你的答案</strong>
          </div>
        </div>

        <div class="questionRow">
          <div class="questions">
            <h3>第1题:</h3>
            <section>
              <article>
                计算::4.65×32+2.5×46.5+0.465×430=__________。 
              </article>
              <div class="questionImagesContainer">
              </div>
              <br/>
              <div class="answerImageContainer">
              </div>
            </section>
          </div>
          <div class="answers">
            <InputItem />
          </div>
        </div>

        <div class="questionRow">
          <div class="questions">
            <h3>第2题:</h3>
            <section>
              <article>
                有六个数,平均数2017,如果把其中一个数改为2018,那么这六个数的平均数是2019,这个被改动的数原来是__________。
              </article>
              <div class="questionImagesContainer">
              </div>
              <br/>
              <div class="answerImageContainer">
              </div>
            </section>
          </div>
          <div class="answers">
              <InputItem />
          </div>
        </div>
        
        <div class="questionRow">
          <div class="questions">
            <h3>第3题:</h3>
            <section>
              <article>
                下列注有英文字母的6个图形中,你能选出一个适合的填入空白方格中吗?__________
              </article>
              <div class="questionImagesContainer">
                <img src={require("../images/2.png")} width="300" height="100"/>
              </div>
              <br/>
              <div class="answerImageContainer">
                <img src={require("../images/3a.png")} width="100" height="100"/>
                <img src={require("../images/3b.png")} width="100" height="100"/>
                <img src={require("../images/3c.png")} width="100" height="100"/>
                <img src={require("../images/3d.png")} width="100" height="100"/>
                <img src={require("../images/3e.png")} width="100" height="100"/>
                <img src={require("../images/3f.png")} width="100" height="100"/>
              </div>
            </section>
          </div>
          <div class="answers">
              <InputItem />
          </div>
        </div>

        <div class="questionRow">
          <div class="questions">
            <h3>第4题:</h3>
            <section>
              <article>
                袋子里有红、黑、黄、白球若干个,每人随意摸两个球,至少有多少人才能保证他们当中一定有两人所摸的球的花色是相同的?__________           
              </article>
              <div class="questionImagesContainer">
              </div>
              <br/>
              <div class="answerImageContainer">
              </div>
            </section>
          </div>
          <div class="answers">
              <InputItem />
          </div>
        </div>

        <div class="questionRow">
          <div class="questions">
            <h3>第5题:</h3>
            <section>
              <article>
                甲、乙、丙三人中,甲每分钟走20米,乙每分钟走30米,丙每分钟走40米,甲、乙两人从A地、丙一人从B地同时相向出发,丙遇到乙后2分钟再遇到甲,问AB两地相距多少米?__________
              </article>
              <div class="questionImagesContainer">
              </div>
              <br/>
              <div class="answerImageContainer">
              </div>
            </section>
          </div>
          <div class="answers">
              <InputItem />
          </div>
        </div>


        <div class="questionRow">
          <div class="questions">
            <h3>第6题:</h3>
            <section>
              <article>
                如图,四边形ABCD为长方形,BC=15厘米,CD=8厘米,三角形AFB的面积比三角形DEF的面积大30平方厘米,求DE的长。__________
              </article>
              <div class="questionImagesContainer">
                <img src={require("../images/6.png")} width="100" height="100"/>
              </div>
              <br/>
              <div class="answerImageContainer">
              </div>
            </section>
          </div>
          <div class="answers">
              <InputItem />
          </div>
        </div>
      </div>

      <hr/>

 
    </WingBlank>

  );
}

export default ExamPage;