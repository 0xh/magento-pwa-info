import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Slides from './Slides'

const Main = () => (
    <main>
        <div className="content-wrapper">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/slides' component={Slides}/>
            </Switch>
        </div>
    </main>
)

export default Main
