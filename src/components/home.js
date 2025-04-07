import React from 'react';
import AboutUs from './about.js'
import Main from './main.js'
import Finder from './finder/finder.js'

export default function Home() {
    return(
        <div>
            <Main />
            <AboutUs />
            <Finder />
        </div>
    );
}