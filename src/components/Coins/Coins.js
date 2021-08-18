import React from 'react';
import CoinItem from './CoinItem';
import {Container, Row} from 'reactstrap';

const Coins = ({coins}) => {
  return (
      <Container className="mb-3">
        <Row>
          {coins.map(coin => (
              <CoinItem coin={coin} key={coin.rank}/>
          ))}
        </Row>
      </Container>
  );
};

export default Coins;