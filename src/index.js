import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import './index.css'

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    navigation = 'true'
    anchors = {['section1', 'section2', 'section3', 'section4', 'section5', 'section6']}
    navigationTooltips = {['About Us', 'Contact', 'idk', 'idk', 'idk', 'idk']}
    showActiveTooltip = 'true'
    slidesNavigation = 'true'


    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section s1">
            <div className="slide sl1">
                  <h1>hello from 1</h1>
            </div>
            <div className="slide sl2">
                <h1>hello from 2</h1>
            </div>
            <div className="slide sl3">
                <h1>hello from 3</h1>
            </div>
            {/* <h2>Section 1</h2>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
          </div>
          <div className="section s2">
            <h1>Section 2</h1>
          </div>
          <div className="section s3">
            <h1>Section 3</h1>
          </div>
          <div className="section s4">
            <h1>Section 4</h1>
          </div>
          <div className="section s5">
            <h1>Section 5</h1>
          </div>
          <div className="section s6">
            <div className="slide sl4">
                <h1>hello from 4</h1>
            </div>
            <div className="slide sl5">
                <h1>hello from 5</h1>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));