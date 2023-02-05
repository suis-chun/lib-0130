import React, { useEffect, useState } from 'react';
import Library from './Library';

const Geo2 = (props) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  console.log('ISBN', props.ISBN);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    } else {
      alert("位置情報が修復できませんでした。");
    }
  }, []);

  return (
    <div>
      {lat && lng ? <Library  ISBN={props.ISBN} lng={lng} lat={lat} /> : <p>位置情報を取得中...</p>}
    </div>
  );
};

export default Geo2


/*import React, { useState, useEffect } from 'react';
import Library from './Library';

const Geo2 = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  return (
    <div>
      <Library lat={lat} lng={lng} />
    </div>
  );
};

export default Geo2;*/
