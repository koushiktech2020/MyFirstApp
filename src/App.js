import React from "react";
import "./App.css";
import Header from "./components/Common/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    // <div className="helloReact">
    //   <form className="formStyle">
    //     <label htmlFor="fname">First name:</label>
    //     <br />
    //     <input type="text" id="fname" name="fname" />
    //     <br />
    //     <label htmlFor="lname">Last name:</label>
    //     <br />
    //     <input type="text" id="lname" name="lname" />
    //     <button className="btn">Submit</button>
    //   </form>
    // </div>
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
