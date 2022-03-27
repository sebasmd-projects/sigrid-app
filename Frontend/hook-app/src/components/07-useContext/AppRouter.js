import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { AboutScreen } from "./AboutScreen";
import { Error404Screen } from "./Error404Screen404Screen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";


export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <div className="container">
                

                <Routes >
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="*" element={<Error404Screen />} />
                </Routes>
            </div>
        </Router>
    )
}

