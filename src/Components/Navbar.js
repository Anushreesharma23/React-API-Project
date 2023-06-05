import React from "react";

function Navbar(props) {
  function handleSearch() {
    props.setLoading(true);
    props.setResult();
    setTimeout(async () => {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const response_json = await response.json();
      const res = response_json.data;
      props.setResult(res);
      props.setLoading(false);
    }, 2000);
  }

  return (
    <div>
      <nav className="navbar text-white bg-info">
        <div className="container-fluid  text-white">
          <a className="navbar-brand">SocialX</a>
          <button
            className="btn btn-outline-info text-white border-white"
            type="submit"
            onClick={handleSearch}
          >
            Get User
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
