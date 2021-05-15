import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Footer } from "../Footer/Footer";

export const Error500 = () => {
  return (
    <div>
      <div id="layoutError">
        <div id="layoutError_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mt-4">
                    <h1 className="display-1">500</h1>
                    <p className="lead">Internal Server Error</p>
                    <a href="index.html">
                      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                      Return to Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
