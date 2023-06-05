import Client from "./Client";
import React, { useEffect, useState } from "react";

function Clients(props) {
  const handlePage1 = () => {
    props.setLoading(true);
    props.setResult();
    setTimeout(async () => {
      const response = await fetch(`https://reqres.in/api/users?page=1`);
      const response_json = await response.json();
      const res = response_json.data;
      props.setResult(res);
      props.setLoading(false);
    }, 2000);
  };

  const handlePage2 = () => {
    props.setLoading(true);
    props.setResult();
    setTimeout(async () => {
      const response = await fetch(`https://reqres.in/api/users?page=2`);
      const response_json = await response.json();
      const res = response_json.data;
      props.setResult(res);
      props.setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="grid grid-cols-2 place-items-center">
        {props.result && (
          <>
            <div className=" 'btn btn-outline-info'">
              <button
                type="submit"
                className="bg-info text-white w-10"
                style={{
                  marginLeft: 400,
                  marginTop: 20,
                  borderColor: "white",
                  borderRadius: "10px",
                  height: "50px",
                  width: "150px",
                }}
                onClick={handlePage1}
              >
                First Page
              </button>
              <button
                type="submit"
                className="bg-info text-white w-10"
                style={{
                  marginLeft: 90,
                  marginTop: 20,
                  borderColor: "white",
                  borderRadius: "10px",
                  height: "50px",
                  width: "150px",
                }}
                onClick={handlePage2}
              >
                Second Page
              </button>
            </div>
          </>
        )}
      </div>
      <div className="d-inline-flex mr-10 p-3 flex-wrap justify-content-around mx-5 my-2">
        {props.result
          ? props.result.map((item) => {
              return (
                <Client
                  id={item.id}
                  first_name={item.first_name}
                  last_name={item.last_name}
                  email={item.email}
                  avatar={item.avatar}
                  key={item.id}
                />
              );
            })
          : !props.loading && (
              <div className="text-white">
                Click the 'Get User' Button To Get All The Client Details
              </div>
            )}
      </div>
    </>
  );
}

export default Clients;
