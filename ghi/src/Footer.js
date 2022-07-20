import React from "react";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Nomad-Nerds Inc.</h4>
            <h1 className="list-unstyled">
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>About our company</h4>
              <li>Nomad-Nerds</li>
          </div>
          {/* Column3 */}
          <div className="col">
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Nomad-Nerds | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
