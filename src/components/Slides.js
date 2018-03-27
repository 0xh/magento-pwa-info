import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SlidesList from './SlidesList'
import Slide from './Slide'

const Slides = () => (
  <Switch>
    <Route exact path='/slides' component={SlidesList}/>
    <Route path='/slides/:url' component={Slide}/>
  </Switch>
)


export default Slides
