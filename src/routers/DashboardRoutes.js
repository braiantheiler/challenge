import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Heroes } from '../components/heroes/Heroes';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/heroes" component={Heroes} />
                    <Route exact path="/heroe/:heroeId" component={HeroScreen} />

                    <Redirect to="/heroes" />

                </Switch>

            </div>

        </>
    )
}
