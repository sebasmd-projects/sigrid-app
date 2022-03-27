import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";

import { NavBar } from "../components/ui/Navbar";

import { DcScreen } from "../components/dc/DcScreen";
import { Error404Screen } from "../components/Error404/Error404Screen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />

                <div className="container">
                    <Routes >
                        <Route path="dc" element={<DcScreen />} />
                        <Route path="marvel" element={<MarvelScreen />} />
                        <Route path="heroes/:heroeId" element={<HeroScreen />} />
                        <Route path="search" element={<SearchScreen />} />
                        <Route path="*" element={<Error404Screen />} />
                    </Routes>
                </div>

        </>
    )
}
