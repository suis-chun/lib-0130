//図書館情報の取得

import { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Libbooks from './Libbooks';

const Library = (props) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  //const lat = props.lat
  //const lng = props.lng
  console.log("経度2:", props.lng+ "緯度2:", props.lat);


  const getData = () => {
   
    fetchJsonp('https://api.calil.jp/library?appkey=%7B9ee7b53e4e93f4a89386d1ad2327d8%7D&geocode='+props.lng+','+props.lat+'&limit=5&format=json')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log('図書館情報', json)
      setData(json);
      setIsLoaded(true);
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  useEffect(
    ()=>{
      getData()
    },[]

  )

    if(isLoaded==false){
      return(
        <div>Loading...</div>
      )
    }else{
    
      return (

        data && data.map((item) => {
          const systemId = item.systemid;
          //console.log('id1', systemId);
          return (
          <div >
            <p>これはLibrary.js →  {systemId}</p>
            <Libbooks systemId={systemId} />
          </div>
          );
        })
      );
      
    }
    
  
}

export default Library;