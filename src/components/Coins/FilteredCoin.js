import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const FilteredCoin = ({coin}) => {
  const onClick = () => {
    window.location.reload(false);
  };
  return (
      <Fragment>
        <Container className="d-flex align-items-center justify-content-center">
          <Button onClick={onClick}>
            <Link to="/coindata/alldata"
                  className="text-white text-decoration-none">Clear</Link>
          </Button>
        </Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md="6" className="mt-3">
            <Jumbotron fluid>
              <Container className="m-auto" fluid>
                <h1 className="display-5">{coin.name} <span
                    className="display-6"
                    style={{fontSize: '24px'}}>Rank: {coin.rank}</span>
                  <span className="display-6"
                        style={{
                          fontSize: '18px',
                          marginLeft: '15px',
                        }}>{coin.symbol}</span></h1>
                <ListGroup>
                  <ListGroupItem>Supply: <span className="text-primary fr">
                    {Number(coin.supply).toFixed(2)}
                  </span></ListGroupItem>
                  <ListGroupItem>Market Cap: <span className="text-primary fr">
                    {Number(coin.marketCapUsd).toFixed(2)}$
                  </span> </ListGroupItem>
                  <ListGroupItem>Max Supply:<span className="text-primary fr">
                    {Number(coin.maxSupply).toFixed(2)}
                  </span> </ListGroupItem>
                  <ListGroupItem>Price: <span className="text-primary fr">
                    {Number(coin.priceUsd).toFixed(2)}$
                  </span> </ListGroupItem>
                  <ListGroupItem>24 Hour Volume: <span
                      className="text-primary fr">
                    {Number(coin.volumeUsd24Hr).toFixed(2)}$
                  </span> </ListGroupItem>
                  <ListGroupItem>Average Price 24 Hour: <span
                      className="text-primary fr">
                    {Number(coin.vwap24Hr).toFixed(2)}$
                  </span> </ListGroupItem>
                </ListGroup>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Fragment>
  );
};

export default FilteredCoin;