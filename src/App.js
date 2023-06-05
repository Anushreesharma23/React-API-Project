import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Clients from "./Components/Clients";
import { useState } from "react";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState();

  return (
    <div>
      <Navbar setResult={setResult} setLoading={setLoading} />
      {loading ? <Loader /> : ""}
      <Clients
        result={result}
        loading={loading}
        setResult={setResult}
        setLoading={setLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
