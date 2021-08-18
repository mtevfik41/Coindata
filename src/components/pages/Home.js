import React, {Fragment, useEffect, useState} from 'react';
import NavbarStrap from '../layout/NavbarStrap';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Container,
  Jumbotron,
  Spinner,
} from 'reactstrap';
import axios from 'axios';
import Footer from '../layout/Footer';
import {Link} from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  let dataURI = 'https://api.coincap.io/v2/assets';
  const getData = async () => {
    setLoading(true);
    const res = await axios.get(dataURI);
    setData(res.data.data[0]);
    setLoading(false);
  };
  return (
      <Fragment>
        <NavbarStrap/>
        <Container>
          <Jumbotron className="mt-5">
            <h1 className="display-3">Welcome <span
                className="text-primary">Visiter</span></h1>
            <p className="lead">Information about the coin market in the last 24
              hours using the Coincap API.</p>
            <hr className="my-2"/>
            <p className="lead">I used React,Reactstrap and Coincap API.</p>
            <p className="lead d-flex align-items-center">
              <Button color="primary"><a
                  className="text-white text-decoration-none"
                  href="https://github.com/mtevfik41" target="_blank"
                  rel="noreferrer">Github</a></Button>

              <Button color="primary" style={{marginLeft: '20px'}}><a
                  className="text-white text-decoration-none"
                  href="https://coincap.io/" target="_blank"
                  rel="noreferrer">Coincap</a></Button>

            </p>
          </Jumbotron>
          <Card body>
            <CardTitle tag="h5">Last 24 Hours Rank 1: {loading ? <Spinner
                size="sm" color="primary"/> : data.name}</CardTitle>
            <CardText>{loading
                ? <Spinner size="sm" color="primary"/>
                : data.name} was with the largest market size in the last
              24 hours.</CardText>

          </Card>
          <Card body>
            <CardTitle tag="h5">All data</CardTitle>
            <CardText>To access all data about top 100 coins</CardText>
            <Button color="primary" style={{width:'10%'}}>
              <Link to="/coindata/alldata"
                    className="text-white text-decoration-none">View
                More</Link>
            </Button>
          </Card>
          <Footer className="d-flex flex-column align-items-center justify-content-center"/>
        </Container>
      </Fragment>
  );
};

export default Home;