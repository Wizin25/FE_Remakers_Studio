// src/components/Home/MapComponent.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 10.841653, 
  lng: 106.838178, // TP.HCM
};

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    // Khi map được tải xong
    setMapLoaded(true);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBtZknAQ6GIYsOD0WSNHMwnqzHeMvMDTtM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={() => console.log('Map Loaded')}
      >
        {/* Thêm Marker */}
        {mapLoaded && (
          <Marker 
            position={center} 
            onClick={() => setSelectedMarker(center)}
          />
        )}

        {/* Thêm InfoWindow khi Marker được click */}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h3>Địa điểm của bạn</h3>
              <p>Thông tin chi tiết về địa điểm này.</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
