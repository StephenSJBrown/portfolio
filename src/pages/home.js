import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import { lighten, darken } from "../actions";

import Container from "../containers/container";

import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";
// import ProjectCard from "../components/ProjectCard"

// import { Left, Right } from "../containers/backgrounds";

import doc from "../images/doc.svg";
import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import plantstripe from "../images/plantstripe.jpg";
import avatar from "../images/avatar.jpg";
import cms from "../images/cms.png";
import bank from "../images/bank.png";
import eyes from "../images/eyes.png";
import leaves from "../images/leaves.png";

import cv from "../docs/CV.pdf";

const Header = styled.div`
  margin-bottom: 48px;
  position: relative;

  @media (max-width: 425px) {
    /* left: 23px; */
  }

  @media (min-width: 426px) {
    /* left: 33px; */
  }

  @media (min-width: 769px) {
    /* left: 47px; */
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  right: 17px;
  height: 100%;
  width: 100%;
`;

const FlexCentre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Sub = styled.div`
  /* height: 48px; */
  position: relative;
  display: inline-block;
  /* align-items: center; */
  margin-bottom: 60px;
`;

const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 256px;
  width: 256px;
  position: relative;
  right: 96px;
  bottom: -60px;

  &:hover {
    transform: scale(1.01);
    transition: 0.5s;
  }

  @media (max-width: 1024px) {
    height: 25vw;
    width: 25vw;
    right: 0;
  }

  @media (min-width: 1024px) {
    height: 20vw;
    width: 20vw;
  }

  @media (max-width: 425px) {
    top: 200px;
  }
`;

const Hero = styled.div`
  width: 100%;
  padding: 96px 0 96px 0;
  box-sizing: border-box;
  position: relative;
  overflow: visible;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    padding-top: 30px;
  }
`;

const Work = styled.div`
  /* background: yellow; */
  width: 100%;
  margin: 80px 0;
  margin-bottom: 96px;

  @media (max-width: 425px) {
    margin: 40px 0;
  }
`;

const Contact = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 0;
  box-sizing: border-box;
`;

const Leaves = styled.img`
  opacity: 0.5;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  right: 50%;
  width: 100vw;
  object-fit: cover;
`;

const ProjectCard = styled.a`
  height: 300px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  border-radius: 8px;

  @media (max-width: 425px) {
    flex-direction: column;
    height: auto;
  }

  @media (min-width: 1024px) {
    height: 25vw;
    margin-bottom: 64px;
  }

  &:hover {
    img {
      transform: scale(1.01);
      transition: all 0.2s;
      /* cursor: pointer; */
    }
  }

  img {
    width: 60%;
    height: 100%;
    background: pink;
    border: none;
    object-fit: cover;

    @media (max-width: 1024px) {
      width: 40%;
    }
    @media (max-width: 425px) {
      width: 100%;
      order: 1;
    }
  }

  div {
    width: 40%;
    padding: 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      width: 60%;
    }
    @media (max-width: 425px) {
      width: auto;
      /* display: none; */
    }

    .project-title {
      margin-bottom: 10px;

      @media (min-width: 1024px) {
      margin-bottom: 24px;
    }
    }

    .view-project {
      margin-top: auto;
      font-family: Numans;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  #cms {
    background: rgba(87, 157, 218, 0.5);
  }
  #bank {
    background: rgba(171, 231, 185, 0.5);
  }
  #eyescan {
    background: rgba(239, 211, 133, 0.5);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 16px;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 248px;
    a {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 248px;
    a {
      margin-bottom: 10px;
    }
  }
`;

const About = styled.div`
& > * {
    margin-bottom: 48px;
    margin-right: 96px;
  }

`

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <a className="anchor" id="about"></a>
      <Container>
        <Hero>
          <About>
            <h1>Stephen SJ Brown</h1>
            <h4>
              i design digital experiences... usually with intermittent dancing
              in the process.
            </h4>
            <ButtonRow>
              <a href="mailto:stephen.sjbrown@gmail.com">
                <Button>
                  email <img src={email} />
                </Button>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/stephensjbrown/"
              >
                <Button>
                  linkedin <img src={linkedin} />
                </Button>
              </a>
              <a target="_blank" href="https://github.com/StephenSJBrown/">
                <Button>
                  github <img src={github} />
                </Button>
              </a>
              {/* <a target="_blank" href={cv}>
              <Button>
                cv <img src={doc} />
              </Button>
            </a> */}
            </ButtonRow>
          </About>
          <Avatar src={avatar} />
        </Hero>
        <a className="anchor" id="work"></a>
        <Work>
          <h2>selected work</h2>
          <ProjectCard href="/cms">
            <div id="cms">
              <h3 className="project-title">child maintenance service</h3>
              <h4>ux/ui design</h4>
              <p>
                I joined a team to help reimagine this online government
                service.
              </p>
              <a href="/cms" className="view-project">
                view project
              </a>
            </div>
            <img src={cms} />
          </ProjectCard>
          <ProjectCard href="/bank">
            <img src={bank} />
            <div id="bank">
              <h3 className="project-title">bank prize draw</h3>
              <h4>user research</h4>
              <p>
                I led research to inform the design of a loyalty prize draw for
                a UK bank.
              </p>
              <a href="/bank" className="view-project">
                view project
              </a>
            </div>
          </ProjectCard>
          <ProjectCard href="/eyescan">
            <div id="eyescan">
              <h3 className="project-title">eyescan</h3>
              <h4>ui design and development</h4>
              <p>
                I designed and developed this proof of concept for an
                opthalmology diagnostic tool.
              </p>
              <a href="/eyescan" className="view-project">
                view project
              </a>
            </div>
            <img src={eyes} />
          </ProjectCard>
        </Work>
        <a className="anchor" id="contact"></a>
        {/* <Contact>
          <h2>contact</h2>
          <p>get in touch to work with me</p>
          <ButtonRow>
            <a href="mailto:stephen.sjbrown@gmail.com">
              <Button>
                email <img src={email} />
              </Button>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/stephensjbrown/"
            >
              <Button>
                linkedin <img src={linkedin} />
              </Button>
            </a>
          </ButtonRow>
        </Contact> */}
      </Container>
    </>
  );
};

export default Home;
