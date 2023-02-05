import { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';

function Libbooks(props) {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function getData2() {

    fetchJsonp('https://api.calil.jp/check?appkey=%7B9ee7b53e4e93f4a89386d1ad2327d8%7D&isbn=' + props.ISBN + '&systemid=' + props.systemId + '&format=json')
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        console.log('蔵書検索', json);
        console.log({ id: props.systemId, ISBN: props.ISBN })
        setData(json);
        setIsLoaded(true);
      })
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }

  useEffect(
    () => {
      getData2()
    }, []);

  const isbn = Object.values(data.books)[0]
  const systemId = Object.values(isbn)[0]
  const { libkey } = systemId;

  console.log('ああああ', isbn);

  // libkayを加工。
  // "玉川台: 貸出可, 世田谷: 貸出中, 経堂: 館内のみ" みたいな形の文字列に。
  const reserveState = Object.entries(libkey).map(([libraryName, state]) => libraryName + ": " + state + ", ")


  if (isLoaded == false) {
    return (
      <div>Loading...</div>
    )
  } else {

    return (
      <div>
        {/* 加工したlibkeyを表示。 */}
        <p>{reserveState}</p>
      </div>
    );
  }
}

export default Libbooks;

//<p>{data.books["4834000826"].Aomori_Pref.libkey.県立}</p>


