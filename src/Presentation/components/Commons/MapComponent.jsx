import React, {useState, useEffect} from 'react';
import MapGL, {
    //Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl
  }  from '@goongmaps/goong-map-react';
import Pin from './Pin';

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};


const MapComponent = ({lng, lat, width, height}) => {
    let accessToken = 'QtLPKADnS7mFULT5HQmORqTP3xjuuNf9hlMBBFLi';
    const [viewport, setViewport] = useState({
        latitude: 21.03072,
        longitude: 105.85239,
        zoom: 12,
        bearing: 0,
        pitch: 0
      });
    
    useEffect(() => {
        function ChangeView() {
          if (!(lng === 'undefined') || !(lat === 'undefined')) {
            console.log('Get Latitude and longtitude');
            //setViewport({...viewport, latitude: lat, longitude: lng})
          }
        }
        ChangeView()
    }, [lng])


    return (
        <MapGL 
            {...viewport}
            width={width}
            height={height}
            mapStyle="https://tiles.goong.io/assets/goong_light_v2.json"
            onViewportChange={setViewport}
            goongApiAccessToken="QtLPKADnS7mFULT5HQmORqTP3xjuuNf9hlMBBFLi">
                <Pin latitude={viewport.latitude} longitude={viewport.longitude} />
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navStyle} />
                <ScaleControl style={scaleControlStyle} />
         </MapGL>
    );
}

export default MapComponent;
