
import React from "react";

const Note = (props) =>{
    <>
    <div className="note">
    <h1> {props.Title} </h1>
    <br />
    <p> {props.Contents} </p>
    <button className="btn">
      -
    </button>
  </div>
  </>

};

export default Note;