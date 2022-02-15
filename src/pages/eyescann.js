import React from "react";

import styled from "styled-components";

import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";

import eyes from "../images/eyes.png";
import eyescanvid from "../images/eyescanvid.mov";

import eyescan1 from "../images/eyescan/eyescan1.png";
import eyescan2 from "../images/eyescan/eyescan2.png";
import eyescan3 from "../images/eyescan/eyescan3.png";
import eyescan4 from "../images/eyescan/eyescan4.png";
import eyescan5 from "../images/eyescan/eyescan5.png";
import eyescan6 from "../images/eyescan/eyescan6.png";
import eyescan7 from "../images/eyescan/eyescan7.png";
import eyescan8 from "../images/eyescan/eyescan8.png";
import eyescan9 from "../images/eyescan/eyescan9.png";
import eyescan10 from "../images/eyescan/eyescan10.png";
import eyescan11 from "../images/eyescan/eyescan11.png";
import eyescan12 from "../images/eyescan/eyescan12.png";
import eyescan13 from "../images/eyescan/eyescan13.png";
import eyescan14 from "../images/eyescan/eyescan14.png";

const WorkContainer = styled.div`
  position: relative;
  top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 160px;
  box-sizing: border-box;
  width: 100%;
  max-width: 630px;
  margin: 0 auto;

  /* & > * {
    margin-bottom: 60px;
} */

  @media (max-width: 425px) {
    padding: 48px 36px 0 36px;
  }

  &.workheading {
    align-items: flex-start;
  }
`;

const WorkHero = styled.img`
  max-height: 40vh;
  width: 100vw;
  object-fit: cover;
  margin-bottom: 80px;
`;

const Eyescann = () => {
  return (
    <>
      <img className="work-hero" src={eyes} />
      <div className="work-container">
        <a href="/">
          <h3 className="backlink top">back</h3>
        </a>
        <h1 className="workheading title eyescan">eyescan</h1>
        <h4 className="work-subtitle">ui design and development</h4>
        <a className="to-end" href="#end">
          <h3 className="skip eyescan">skip to end</h3>
        </a>
        <div className="work-section">
          <h3 className="workheading eyescan">the project</h3>
          <p>
            Ophthalmologists need to diagnose patients’ eyes to determine if
            they’re diseased. After an appointment with the patient, photos are
            sent to a lab to be analysed and the results come back, which can
            take up to a. However, with the advancements in AI, this diagnosis
            can be sped up drastically to mere moments.
            <br />
            <br />
            The aim of this project was to test a proof-of-concept AI diagnostic
            model by creating an application for ophthalmologists to take photos
            and diagnose all within the same appointment.
          </p>
        </div>
        <div className="role-team">
          <div className="role-container">
            <h3 className="workheading eyescan">role</h3>
            <p>UI designer and full-stack developer</p>
          </div>
          <div className="team-container">
            <h3 className="workheading eyescan">team</h3>
            <div className="teamflex">
              <ul>
                <li className="eyescan">1x UI Designer (me)</li>
                <li className="eyescan">2 x Full Stack developer (inc. me)</li>
                <li className="eyescan">1x UX Designer</li>
                <li className="eyescan">1 x Product Owner</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="work-section">
          <h3 className="workheading eyescan">first steps</h3>
          <p>
            My first task was to create some backend APIs and connected the
            application to a websocket which would be used to control the
            optical and position settings for the camera with near-instant
            feedback.
          </p>
        </div>
        {/* <div className="work-pics eyescan">
          <div>
            <img src={eyescan1}></img>
            <img src={eyescan2}></img>
          </div>
          <p>coded websocket and backend APIs</p>
        </div> */}
        <div className="work-section">
          <h3 className="workheading eyescan">initial design</h3>
          <p>
            Later, the main journey had already
            been outlined by the UX designer but needed some UI improvements. I
            analysed the initial designs and took a step back to make some
            improvements to colour language, sizes, and touch targets.
            <br />
            <br />
            These improvements meant there was a consistent colour language that
            reflected the affordability and states of different elements.
          </p>
        </div>
        <div className="work-pics eyescan">
          <div>
            <img src={eyescan9}></img>
            <img src={eyescan7}></img>
            <img src={eyescan8}></img>
          </div>
          <p>intial designs</p>
        </div>
        <div className="work-section">
          <h3 className="workheading eyescan">iterated desgins</h3>
          <p>
            I then iterated the designs to look more polished, considered more
            edge scenarios and designed for them.
          </p>
        </div>
        <div className="work-pics">
          <div>
            <img className="eyescan" src={eyescan12}></img>
            <img className="eyescan" src={eyescan11}></img>
            <img className="eyescan" src={eyescan10}></img>
          </div>
          <p>iterated designs</p>
        </div>
        <h3 className="workheading eyescan">development</h3>
        <p>
          Once these designs were accepted by the PO, I began to code the page
          structure in React alongside another developer on the team. Following
          that, I ensured data flowed correctly between the pages.
          <br/><br/>
          Once the main structure and data flow was complete, I added styling
            to reflex the designs in pixel perfect detail, then added animations
            and micro-interactions for extra flair.
        </p>
        {/* <div className="work-pics">
          <div>
            <img className="eyescan" src={eyescan3}></img>
            <img className="eyescan" src={eyescan5}></img>
          </div>
          <p>react code</p>
        </div> */}
        <a id="end"></a>
        <div className="work-pics eyescan">
          <div className="solo">
            <video id="eyescanvid" src={eyescanvid} autoPlay loop />
          </div>
          <p>final prototype</p>
        </div>
        <div className="work-section">
          <h3 className="workheading eyescan">further work</h3>
          <p>
            If this work were to continue, I would have liked the opportunity to
            hold some usability testing with ophthalmologists and test the
            screens in the naturally dark environment they carry out their eye
            exams in.
          </p>
        </div>
        <a href="/">
          <h3 className="backlink bottom">back</h3>
        </a>
      </div>
    </>
  );
};

export default Eyescann;
