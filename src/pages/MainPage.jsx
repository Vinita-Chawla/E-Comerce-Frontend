import React from 'react'
import Home from './Home';
import Products from './Products';
import NewCollection from '../components/NewCollection';
import Reviews from '../components/Reviews';

function MainPage(props) {
  return (
    <>
        <Home/>
        <Products searchTerm={props.searchTerm} />
        <NewCollection/>
        <Reviews/>
    </>
  )
}

export default MainPage
