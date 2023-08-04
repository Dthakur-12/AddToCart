import React from 'react'
import CounterValue from './Component/CounterValue'
import Product from './AddtoCart/Product'
import { Route } from 'react-router-dom'
import Routing from './AddtoCart/Routing'
import RoutesHandson7 from './Handson7/Pages/RoutesHandson7'
import Home from './Handson7/Pages/Home'
import Header from './Handson7/Pages/Header'
import Comments from './API IN REDUX-TOOLKIT/Comments'
import CommentsList from './API IN REDUX-TOOLKIT/CommentsList'

const App = () => {
  return (
    <>
{/* <CounterValue/> */}
{/* <Product/> */}
{/* <Routing/> */}
{/* <Header/> */}
<Comments/>
<CommentsList/>
{/*  */}
{/* <RoutesHandson7/> */}
    </>
  )
}

export default App