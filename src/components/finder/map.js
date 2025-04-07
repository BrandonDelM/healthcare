import React from 'react';
import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";
import env from "react-dotenv";
import Longitude from './longitude.js';
import Latitude from './latitude.js';

const lats = Longitude(0);
const lngs = Latitude(0);

export default function HospitalMap(){
    const generateMarkers = (lats, lngs) => {
        const markers = [];
    
        for (let i = 0; i < 500; i++){
            markers.push(<Marker position={{lat:lats[i], lng:lngs[i]}} />);
        }
    
        return markers
    };
    
    return(
        <APIProvider apiKey={env.REACT_APP_API}>
            <div style={{height: "100vh", width: "100%"}}>
                <Map zoomControl={true} streetViewControl={true} cameraControl={true}
                 mapTypeControl={false} scrollwheel={true}
                 disableDoubleClickZoom={false} mapId={"e82a49a0aed5df04"}>
                    {generateMarkers(lats, lngs)}
                </Map>
            </div>
        </APIProvider>
    );
}