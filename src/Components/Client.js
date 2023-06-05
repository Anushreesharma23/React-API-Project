import React from "react";
import CopyImage from "../Static Images/clipboard-data.svg";

export default function People(props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.email);
    alert("Copied Successfully!");
  };

  return (
    <div
      className="card m-10 px-10 pb-10 "
      style={{
        backgroundColor: "rgb(230, 255, 255)",
        marginTop: "30px",
        width: "18rem",
        height: "25rem",
      }}
    >
      <img src={props.avatar} className="card-img-top" alt={props.avatar} />
      <div className="card-body ">
        <h5 className="card-title">
          {props.first_name} {props.last_name}
        </h5>
        <span className="card-text">{props.email}</span>
        <span className="card-text">
          <button
            type="submit"
            className="btn btn-info ml-2 text-white"
            onClick={handleCopy}
          >
            <img src={CopyImage} />
          </button>
        </span>
        <div>{props.id}</div>
      </div>
    </div>
  );
}
