import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhaGluZW1haGZvdWRoIiwiYSI6ImNsMncwaXFsYjBoNHAzanBoZWx3NWtrdTUifQ.A1Z3sBcBOUJn1aPWVHFh2Q';



const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [8.4194, 35.7749],
      zoom: 5,
      
      
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="map-container" style={{ height: '630px', width: '90%' }} />;
};

export default Map;
