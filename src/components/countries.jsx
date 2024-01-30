/* eslint-disable no-unused-vars */
import React from "react";

import '../App.css'
import '../Dark.css'
import Header from '../components/header'
import Search from '../components/search'
import Filter from '../components/filter'
import Country from '../components/country'


export default function Countries({ darkMode, toggleDarkMode}) {

    return(
    <>
    <div className={`main ${darkMode ? 'darkmode' : ''}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <div className="filters">
            <Search darkMode={darkMode}/>
            <Filter darkMode={darkMode}/>
        </div>
        
        <div className={`results-div ${darkMode ? 'darkmode' : ''}`}>
        <Country darkMode={darkMode}/>
        </div>
    </div>
    
        
    </>
)}