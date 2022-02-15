import React from "react";

import styled from "styled-components";

import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";

import cms from "../images/cms.png";

import cms1 from "../images/cms/cms1.png";
import cms2 from "../images/cms/cms2.png";
import cms3 from "../images/cms/cms3.png";
import cms4 from "../images/cms/cms4.png";
import cms5 from "../images/cms/cms5.png";
import cms6 from "../images/cms/cms6.png";
import cms7 from "../images/cms/cms7.png";
import cms8 from "../images/cms/cms8.png";
import cms9 from "../images/cms/cms9.png";
import cms10 from "../images/cms/cms10.png";
import cms11 from "../images/cms/cms11.png";
import cms12 from "../images/cms/cms12.png";

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

const CMS = () => {
  return (
    <>
      <img className="work-hero" src={cms} />
      <div className="work-container">
        <a href="/">
          <h3 className="backlink top">back</h3>
        </a>
        <h1 className="workheading title cms">child maintenance service</h1>
        <h4 className="work-subtitle">ux/ui design</h4>
        <a className="to-end" href="#end">
          <h3 className="skip cms">skip to end</h3>
        </a>
        <div className="work-section">
          <h3 className="workheading cms">the project</h3>
          <p>
            The Child Maintenance Service allows separated parents to manage,
            send, and receive finances associated with looking after a child.
            There is an online website, as well as telephone support, and a
            separate service to help users determine if the service is right for
            them.
            <br />
            <br />
            The aim of this project was to provide usability improvements to the
            overall online portal, starting with the homepage. Furthermore, the
            business aims to reduce costs by reducing the need for people to
            call the phone service and use automated channels to complete user
            journeys.
          </p>
        </div>
        <div className="role-team">
          <div className="role-container">
            <h3 className="workheading cms">role</h3>
            <p>UX/UI designer</p>
          </div>
          <div className="team-container">
            <h3 className="workheading cms">team</h3>
            <div className="teamflex">
              <ul>
                <li className="cms">2x UX Designer (inc. me)</li>
                <li className="cms">2 x User Researcher</li>
                <li className="cms">1 x Product Owner</li>
              </ul>
              <ul>
                <li className="cms">2 x Content Designer</li>
                <li className="cms">1 x Business Analyst</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="work-section">
          <h3 className="workheading cms">first steps</h3>
          <p>
            The first step was to look at the current home page and understand
            it’s functionality and where cosmetic improvements could be
            targeted. I looked at user research and the user needs that had
            begun to come out of those, plus web analytics, and other government
            services our users might be familiar with.
            <br />
            <br />
            Two key user needs came out of the research which could relate to
            the homepage.
          </p>
          <ul>
            <li className="cms">
              As a parent I need to be informed about what is happening with my
              case so that I can be reassured actions are being taken
            </li>
            <li className="cms">
              As a parent I need to know what is happening with my case when I
              submit a service/ change request so that I feel reassured that it
              is being actioned
            </li>
          </ul>
        </div>
        <div className="work-pics cms">
          <div className="solo">
            <img src={cms1}></img>
            {/* <img src={cms}></img> */}
          </div>
          <p>previous homescreen design and data</p>
        </div>
        <div className="work-section">
          <h3 className="workheading cms">insights</h3>
          <p>
            From this information, I was able to begin with the first iteration
            of design for the screens.
            <br />
            <br />
            ~70% of the users access via mobile and current screen designs were
            not mobile friendly. The pages with highest views were message
            history, send a message, payment information, and track changes.
          </p>
        </div>
        <div className="work-section">
          <h3 className="workheading cms">first designs</h3>
          <p>
            The red box for covid information was condensed into a black banner.
            Track Changes was added into the nav bar as it was a high traffic
            page. Three cards were added to the page to surface the most popular
            information for users so they could feel informed about their case
            quickly.</p>
            <ul>
              <li className="cms">
                The first card shows a summary of recent messages.
              </li>
              <li className="cms">
                The second card shows a summary of recent payment information and
                the option to report a missed payment
              </li>
              <li className="cms">
              The final card showed a summary of reported changes to the user’s
                account.
              </li>
            </ul>
            <p>
            I then coded the designs into an interactive prototype using
            HTML, CSS, and JavaScript, and hosted it on a Heroku server for
            access with a wider audience.
          </p>
        </div>
        <div className="work-pics cms">
          <div>
            <img src={cms2}></img>
            <img src={cms3}></img>
            {/* <img src={cms4}></img> */}
            <img src={cms5}></img>
            <img src={cms11}></img>
          </div>
          <p>initial designs and code</p>
        </div>
        <h3 className="workheading cms">usability testing</h3>
        <p>
          The user research team then carried out 5 sessions of usability
          testing, and were unfortunately limited to testing with internal
          support staff. I was present for all sessions and took notes while the
          research team facilitated. We wanted to learn about how the users
          understood the summaries of information.
          <br />
          <br />
          The session gave us a lot of insight, two key pieces of information
          were that the language used sometimes caused confusion, the difference
          between communications and contact history was not clear, and the
          number of changes in each status were not understood.
          <br />
          <br />
          Following the usability testing I led my immediate team in an ideation
          session to come up with solutions to the feedback we’d received.
        </p>
        <div className="work-pics">
          <div>
            <img src={cms6} />
            <img src={cms12} />
          </div>
          <p>ideation and actions</p>
        </div>
        <a id="end"></a>
        <div className="work-section">
          <h3 className="workheading cms">final iteration</h3>
          <p>
            The solutions from that ideation session were then used to create a
            second iteration which we were able to test with users of the
            service.
            <br />
          </p>
          <ul>
            <li className="cms">
              Communications and Message History were combined into one section
              called Inbox to make the language clearer
            </li>
            <br />
            <li className="cms">
              The pattern used for Track Changes was changed to a Task List
              which showed the 3 most recently updated changes
            </li>
            <br />
            <li className="cms">
              Payment cards remained separated out as they were the main thing
              that differed between each case, however Inbox and track changes
              were combined for each case to avoid duplication of information
            </li>
            <br />
            <li className="cms">
              Case details and Details were combined into one as Case Details
              had minimal information and users considered that information
              personal as shown by card sort research
            </li>
          </ul>
          <p>
            These designs tested very well with positive feedback from users and
            a clear understanding of how to navigate the page. They were then passed to the development team to go live on the site.
          </p>
          <br />
          <br />
          <h3>
            “This is significantly better and so much easier…It's dead clear. A
            lot better.”
          </h3>
        </div>
        <div className="work-pics cms">
          <div>
            <img className="final-pic" src={cms9} />
            <img className="final-pic" src={cms7} />
          </div>
          <p>final iteration of designs</p>
        </div>
        <div className="work-section">
          <h3 className="workheading cms">learnings</h3>
          <p>
            During the project I learnt the value of the Government Design
            System, as well as ways it can be stretched, and borrowing learnings
            from other government services.
            <br />
            <br />
            Also I learnt to lean on the different expertise of my team members
            in order to drive a quick turnaround for designs and iterations.
          </p>
        </div>
        <a href="/">
          <h3 className="backlink bottom">back</h3>
        </a>
      </div>
    </>
  );
};

export default CMS;
