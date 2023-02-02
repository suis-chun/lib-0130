import './newbook.css';

function Newbook(props) {
  return (
    <div>
      <h2>{props.message}</h2>
      <h1>This page is Newbook</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img className="bookimg" src="/book/1.jpg" />
            </div>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img className="bookimg" src="/book/1.jpg" />
            </div>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
      


    </div>
  );
}

export default Newbook;