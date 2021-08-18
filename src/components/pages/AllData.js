import React, {Fragment, useEffect, useState} from 'react';
import Coins from '../Coins/Coins';
import axios from 'axios';
import NavbarStrap from '../layout/NavbarStrap';
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Spinner,
} from 'reactstrap';
import FilteredCoin from '../Coins/FilteredCoin';
import Footer from '../layout/Footer';

const AllData = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [data]);
  let dataURI = 'https://api.coincap.io/v2/assets';
  const getData = async () => {
    setLoading(true);
    const res = await axios.get(dataURI);
    setData(res.data.data);
    setFilteredData(null);
    setLoading(false);
  };
  const onSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    text.toLowerCase();
    if (text === '') {
      setText('Input cannot be empty');
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
        setText('');
      }, 3000);
    } else {
      setLoading(true);
      text.toLowerCase();
      dataURI = `https://api.coincap.io/v2/assets/${text}`;
      axios.get(dataURI)
          .then((response) => {
            setFilteredData(response.data.data);
            setText('');
          })
          .catch((error) => {
                if (error.response) {
                  setFilteredData(null);
                  setText('Data Not Found');
                  setDisabled(true);
                  setTimeout(() => {
                    setDisabled(false);
                    setText('');
                  }, 3000);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error', error.message);
                }
              },
          );
      setLoading(false);
    }
    setLoading(false);

  };
  return (
      <Fragment>
        <NavbarStrap/>
        <div
            className="d-flex flex-column align-items-center justify-content-center mt-5">
          <h1 className="display-4" style={{marginBottom: '10px'}}>This List
            Contains Top 100
            Coins</h1>
          <p className="lead">It may take some time to load the data.</p>
          <p className="text-secondary">If you can't see it, please refresh the
            page.</p>
          <form onSubmit={onSubmit} className="w-50 m-4">
            <InputGroup>
              <Input type="text" name="text" value={text}
                     placeholder="Search..."
                     onChange={e => setText(e.target.value)}
                     disabled={disabled}/>
              <InputGroupAddon addonType="append">
                <Input type="submit" value="Search" style={{cursor: 'pointer'}}
                       disabled={disabled}/>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </div>
        {
          filteredData !== null ?
              <div>
                {loading ? <Spinner color="primary"/> : <FilteredCoin
                    coin={filteredData}/>}
              </div>
              : loading ? (<Container
                  className="d-flex align-items-center justify-content-center">
                <Spinner color="primary"/>
              </Container>) : <Coins coins={data}/>
        }
        <Footer/>
      </Fragment>
  );
};

export default AllData;