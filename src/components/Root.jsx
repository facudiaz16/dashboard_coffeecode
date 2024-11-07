import React from "react";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../assets/fondo.css';

export default function Root() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <ContentRowTop />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}