
//蔵書検索
//'https://api.calil.jp/check?appkey=%7B9ee7b53e4e93f4a89386d1ad2327d8%7D&isbn=4834000826&systemid=' + {systemId} + '&format=json'
//'https://api.calil.jp/check?appkey=%7B9ee7b53e4e93f4a89386d1ad2327d8%7D&isbn=4834000826&systemid=Aomori_Pref&format=json'


import { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';

function Libbooks  (props)  {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  //const systemId = props.systemId
  console.log('id2', props.systemId);
  console.log('ISBN', props.ISBN);
  
  function getData2 ()  {
   
    fetchJsonp('https://api.calil.jp/check?appkey=%7B9ee7b53e4e93f4a89386d1ad2327d8%7D&isbn='+props.ISBN+'&systemid=' + props.systemId + '&format=json')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log('蔵書検索', json);
      setData(json);
      setIsLoaded(true);
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  useEffect(
    ()=>{
      getData2()
    },[]

  )

    if(isLoaded==false){
      return(
        <div>Loading...</div>
      )
    }else{
    
      return (
        <div >
          <p>あ</p>
        </div>

      );

    }
}

export default Libbooks;

//<p>{data.books["4834000826"].Aomori_Pref.libkey.県立}</p>


