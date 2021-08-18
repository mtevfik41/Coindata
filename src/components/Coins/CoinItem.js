import React from 'react';
import {Col, Container, Jumbotron, ListGroup, ListGroupItem} from 'reactstrap';

const CoinItem = ({coin}) => {
  return (
      <Col md="6" className="mt-3">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-5">{coin.name}
              <span className="display-6"
                    style={{
                      fontSize: '24px',
                      marginLeft: '15px',
                    }}>Rank: {coin.rank}
              </span>
              <span className="display-6"
                    style={{
                      fontSize: '18px',
                      marginLeft: '15px',
                    }}>{coin.symbol}</span>
            </h1>
            <ListGroup>
              <ListGroupItem>Supply: <span className="text-primary fr">
                {Number(coin.supply).toFixed(2)}
              </span></ListGroupItem>
              <ListGroupItem>Market Cap: <span className="text-primary fr">
                {Number(coin.marketCapUsd).toFixed(2)}$
              </span> </ListGroupItem>
              <ListGroupItem>Max Supply: <span className="text-primary fr">
                {Number(coin.maxSupply).toFixed(2)}
              </span> </ListGroupItem>
              <ListGroupItem>Price: <span className="text-primary fr">
                {Number(coin.priceUsd).toFixed(2)}$
              </span> </ListGroupItem>
              <ListGroupItem>24 Hour Volume: <span className="text-primary fr">
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

  );
};

export default CoinItem;