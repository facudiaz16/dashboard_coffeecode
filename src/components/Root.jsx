import React from "react";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";


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