import React from 'react';
import CategoryBar from './categorybar.js';
import HospitalMap from './map.js';

export default function Finder(){
    return(
        <div>
            <CategoryBar/>
            <HospitalMap/>
        </div>
    );
}