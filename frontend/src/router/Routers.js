import React from "react"
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import TourDetails from "../pages/TourDetails";
import Tours from "../pages/Tours";
import About from "../pages/About";

const Routers = () => {
    return(
        <Routes>
            <Route path="/"  element={ <Navigate to="/home/" /> }/>
            <Route path="/home"  element={<Home />}/>
            <Route path="/register"  element={<Register />}/>
            <Route path="/tours/search"  element={<SearchResultList />}/>
            <Route path="/tours:id"  element={<TourDetails />}/>
            <Route path="/tours"  element={<Tours />}/>
            <Route path="/about-us" element={ <About /> } />
        </Routes>
    ) 
}

export default Routers;