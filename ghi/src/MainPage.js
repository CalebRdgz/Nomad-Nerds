import background from './SF.png';

function MainPage() {
    return (
    <div className="wrapper" style={{ backgroundImage: `url(${background})`}}>
      <div className="px-5 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Nomad-Nerds</h1>
        <div className="col-lg-4 mx-auto">
          <p className="lead mb-4">
            Connecting you to your favorite activities and locations!
          </p>
        </div>
      </div>
    </div>
  );
}
  
export default MainPage;