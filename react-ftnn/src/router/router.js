import React from 'react';
import Home from '../pages/home/'
import Clrcle from '../pages/clrcle/'
import Consult from '../pages/consult/'
import My from '../pages/my/'

import Farm from '../pages/my/my-other/otherRouter/Farm'
import Quotation from '../pages/my/my-other/otherRouter/Quotation'
import Activity from '../pages/my/my-other/otherRouter/Activity'
import Task from '../pages/my/my-other/otherRouter/Task'
import Invitation from '../pages/my/my-other/otherRouter/Invitation'
import Simulation from '../pages/my/my-other/otherRouter/Simulation'
import Staff from '../pages/my/my-other/otherRouter/Staff'


import { Route, Redirect, Switch } from 'react-router-dom';
class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/clrcle" component={Clrcle} />
                <Route path="/consult" component={Consult} />
                <Route path="/my" component={My} />
                <Route path='/farm' component={Farm}></Route>
                <Route path='/quotation' component={Quotation}></Route>
                <Route path='/activity' component={Activity}></Route>
                <Route path='/task' component={Task}></Route>
                <Route path='/invitation' component={Invitation}></Route>
                <Route path='/simulation' component={Simulation}></Route>
                <Route path='/staff' component={Staff}></Route>
                <Redirect from="/" to="/home" exact />
            </Switch>
        )
    }

}

export default Router;