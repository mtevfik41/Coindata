import React, {Fragment} from 'react';
import NavbarStrap from '../layout/NavbarStrap';
import {Container, Jumbotron} from 'reactstrap';
import Footer from '../layout/Footer';

const About = () => {
  return (
      <Fragment>
        <NavbarStrap/>
        <Container>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3 mt-5 mb-4">
                Coindata
              </h1>
              <hr className="my-2"/>
              <p className="lead">
                Non profit website made by myself for
                educational purposes. The data is provided by the API of
                https://coincap.io/, not by myself. Does not include investment
                advice.
              </p>
              <hr className="my-2"/>
              <p className="lead">
                I used React,React-router,Hooks and Reactstrap
              </p>
              <hr className="my-2"/>
              <p className="lead">
                Generally, I focused how to use basic hooks such as useState and
                useEffect. I also used props a lot.
              </p>
              <hr className="my-2"/>
              <p className="lead">Built by <i className="fab fa-github"></i>
                <a href="https://github.com/mtevfik41" target="_blank"
                   rel="noreferrer">
                  mtevfik41
                </a> for educational purposes and to practicing in React.
              </p>
            </Container>
          </Jumbotron>
        </Container>
        <Footer/>
      </Fragment>
  );
};

export default About;