import React from "react";
import "./ImageLinkForm.css";
// below is the imput event that is assigned to the input text field on the page. onInputChange is called in the app.js file via the ImageLinkForm component
// both onINputChange and onButtonSubmit are the states that are monitored vie the  InImageLink form component in app.js
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain Will detect faces in your pictures. Give it a shot!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
