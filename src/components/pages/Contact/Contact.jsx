import React from "react";
import Curve from "../../Animation/Page/Curve";

import Navigationbar from "../../assets/Navbar/Navigationbar";
import ScrollToTop from "../../assets/ScrollToTop/ScrollToTop";
import ReactiveForm from "../Home/Contact";
import { SpotlightPreview } from "../../assets/Spotlight/SpotLight";
import Navbar from "../../assets/Navbar/Navbar";

const Contact = () => {

  return (
    <>
      <Curve>
        <ScrollToTop>
          <Navbar/>
            <div className="image_container">
             <SpotlightPreview>
                <ReactiveForm/>
            </SpotlightPreview>
            </div>
        </ScrollToTop>
      </Curve>
    </>
  );
};

export default Contact;
