import React from "react";

import styled from "styled-components";

import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";

import bank from "../images/bank.png";

import bank1 from "../images/bank/bank1.png";
import bank2 from "../images/bank/bank2.png";
import bank3 from "../images/bank/bank3.png";
import bank4 from "../images/bank/bank4.png";
import bank5 from "../images/bank/bank5.png";
import bank6 from "../images/bank/bank6.png";
import bank7 from "../images/bank/bank7.png";
import bank8 from "../images/bank/bank8.png";
import bank9 from "../images/bank/bank9.png";
import bank10 from "../images/bank/bank10.png";
import bank11 from "../images/bank/bank11.png";
import bank12 from "../images/bank/bank12.png";
import bank13 from "../images/bank/bank13.png";
import bank14 from "../images/bank/bank14.png";
import bank15 from "../images/bank/bank15.png";
import bank16 from "../images/bank/bank16.png";
import bank17 from "../images/bank/bank17.png";
import bank18 from "../images/bank/bank18.png";

// const WorkContainer = styled.div`
//   position: relative;
//   top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-bottom: 160px;
//   box-sizing: border-box;
//   width: 100%;
//   max-width: 630px;
//   margin: 0 auto;

//   /* & > * {
//     margin-bottom: 60px;
// } */

//   @media (max-width: 425px) {
//     padding: 48px 36px 0 36px;
//   }

//   &.workheading {
//     align-items: flex-start;
//   }
// `;

const Bank = () => {
  return (
    <>
      <img className="work-hero" src={bank} />
      <div className="work-container">
        <a href="/">
          <h3 className="backlink top">back</h3>
        </a>
        <h1 className="workheading title bank">bank prize draw</h1>
        <h4 className="work-subtitle">user research</h4>
        <a className="to-end" href="#end">
          <h3 className="skip bank">skip to end</h3>
        </a>
        <div className="work-section">
          <h3 className="workheading bank">the project</h3>
          <p>
            A UK retail bank was relaunching their Prize Draw concept which
            allows their customers to win prizes if they meet certain criteria
            within the bank accounts they have open. The prize draw concept aims
            to drive customer loyalty, engagement, and to cross-sell their
            banking products.
            <br />
            <br />
            The aim of this project was to ensure the relaunch was as effective
            as possible to drive the behaviours the bank wanted to carry out. We
            as a team worked together to understand user perceptions towards the
            prize draw and design a service fitting to both the business and its
            users.
          </p>
        </div>
        <div className="role-team">
          <div className="role-container">
            <h3 className="workheading bank">role</h3>
            <p>User Researcher</p>
          </div>
          <div className="team-container">
            <h3 className="workheading bank">team</h3>
            <div className="teamflex">
              <ul>
                <li className="bank">1x User Researcher (me)</li>
                <li className="bank">2x UX Designer</li>
              </ul>
              <ul>
                <li className="bank">1 x Product Owner</li>
                <li className="bank">1 x Project Manager</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="work-section">
          <h3 className="workheading bank">first steps</h3>
          <p>
            First, to understand what makes a good prize draw I carried out some
            analysis within the financial service sector, and looked at prize
            draws and loyalty programmes more widely.
          </p>
        </div>
        <div className="work-pics bank">
          <div>
            <img src={bank9}></img>
            <img src={bank7}></img>
            <img src={bank8}></img>
            <img src={bank2}></img>
          </div>
          <p>extracts from loyalty research report</p>
        </div>
        <div className="work-section">
          <h3 className="workheading bank">insights</h3>
          <p>
            I found that more prizes can increase registration, provide prizes
            related to the business function e.g. clothes for a fashion
            retailer, or in this case, monetary incentives for a bank. Good
            loyalty programmes need to be easy to understand and visually
            appealing. They can also be used for driving brand recognition,
            collecting user generated content and highlighting a particular
            product.
            <br />
            <br />I began to draw up hypotheses from these insights and initial
            speculations from the client.
          </p>
        </div>
        <div className="work-pics">
          <div>
            <img src={bank1}></img>
            <img src={bank4}></img>
          </div>
          <p>initial hypotheses and sentiment questions</p>
        </div>
        <div className="work-section">
          <h3 className="workheading bank">interviews and surveys</h3>
          <p>
            From this point I was able to start my initial next of research
            while concurrently organising lab research with a 6-week lead time.
            I took my initial hypotheses to get qualitative research with
            customers across 4 client bank branches across the country which had
            a high population of the target user group.
            <br />
            <br />
            These were roughly 3-minute interviews with 4 main objectives: to
            check customer awareness of the draw, find motivations and
            deterrents to registration, understand sentiment towards prize
            draws, and understand preferences for prizes.
            <br />
            <br />I also sent out a quantitative survey to branch employees to
            find their thoughts on how likely customers are to open particular
            account types based on prize draw eligibility.
          </p>
        </div>
        <div className="work-pics bank">
          <div>
            <img src={bank16}></img>
            <img src={bank10}></img>
          </div>
          <p>interview script and survey questions</p>
        </div>
        <h3 className="workheading bank">interview and survey insights</h3>
        <p>
          <strong>52 branch customers</strong> and <strong>114 colleagues surveyed</strong>.
          <br />
          <br /> I found that the idea of a less frequent super draw was not much
          of an extra enticement for people to enter the prize draw as their chances of winning were very low. There were mixed views
          on being notified if they had lost, on the one hand they may forget
          about the prize draw if no notification, on the other side it may brew
          negative feelings towards the draw and bank.
          <br />
          <br />
          Many would sign up for internet banking to be eligible for the prize draw as it’s easy to
          do.
          <br />
          <br />
          There was positive sentiment toward opening a current account with mortgage as
          having the two accounts seem related.
        </p>
        <div className="work-pics">
          <div>
            <img src={bank17}></img>
            <img src={bank3}></img>
            {/* <img src={bank15}></img> */}
            <img src={bank5}></img>
            <img src={bank14}></img>
          </div>
          <p>interview script and survey responses and summaries</p>
        </div>
        <a id="end"></a>
        <div className="work-section">
          <h3 className="workheading bank">lab interviews</h3>
          <p>
            Finally I conducted lab based research with <strong>24 participants</strong> across 5
            pre-defined persona groups to usability test a prototype and gain
            more in depth qualitative information. The main insights I found
            were:
            <br />
          </p>
          <ul>
            <li className="bank">
              A largely positive response for opening a current account they
              would use to be eligible for the draw, with many participants
              happy to open the account without assistance.
            </li>
            <li className="bank">
              A countdown to the draw seems feasible to drive engagement and
              people wouldn’t feel upset about as loss as they enter with low
              expectations to win. They would check the results of the draw
              online.
            </li>
            <li className="bank">
              Reading winners news would help validate the legitimacy of the
              draw but if participants were to win they would want to be
              anonymised if it was publicised.
            </li>
          </ul>
          <p>
            All of these points were given as recommendations to the team to
            take further into the next phase of the project.
          </p>
        </div>
        <div className="work-pics bank">
          <div>
            <img src={bank11} />
            {/* <img src={bank12} /> */}
            <img src={bank13} />
            <img src={bank6} />
            <img src={bank18} />
          </div>
          <p>lab interview script, report, and results</p>
        </div>
        <div className="work-section">
          <h3 className="workheading bank">further work</h3>
          <p>
            If I were able to continue on the project, I would have liked to
            create a full quantitative survey would provide robust data to feed
            into a business case and give more indicative figures.
            <br />
            <br />
            After the launch I would also look to gather continuous metrics to
            measure the success of the prize draw. These would be used to update
            the prize draw offering to improve business metrics such as
            registration, engagement, and product retention.
          </p>
        </div>
        <a href="/">
          <h3 className="backlink bottom">back</h3>
        </a>
      </div>
    </>
  );
};

export default Bank;
