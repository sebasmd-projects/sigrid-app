import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { HomeScreen } from "../components/home/HomeScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";





export const AppRouter = () => {
    return (
        <Router>



            <Routes >
                <Route path="/" element={<HomeScreen />} />


                <Route path="/login" element=
                    {
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>

                    }
                />

                <Route path="/*" element=
                    {
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    }
                />


            </Routes>

        </Router>
    )
}

