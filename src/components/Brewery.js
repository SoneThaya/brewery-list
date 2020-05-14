import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { fetchBrewery } from '../actions';

const Brewery = props => {
  console.log(props)
  useEffect(() => {
    props.fetchBrewery()
  }, [])

  
  return (
    <div>
     
      {props.isFetching && <Loader type="Circles" color="#00BFFF" height={80} width={80}/>}

      {props.brewery && props.brewery.map((item) => (
        <div key={item.id} className="brewery-container">
         
          <Card className="brewery-card">
        
        <CardBody>
              <CardTitle>{item.name}</CardTitle>
          <CardSubtitle>hello</CardSubtitle>
              <CardText>{item.street}</CardText>
              <CardText>{item.city}</CardText>
              <CardText>{item.state}</CardText>
              <CardText>{item.country}</CardText>
              <Button>{item.phone}</Button>
        </CardBody>
      </Card>
          
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)

  return {
    isFetching: state.isFetching,
    brewery: state.brewery,
    
  }
}

export default connect(mapStateToProps, {fetchBrewery})(Brewery)