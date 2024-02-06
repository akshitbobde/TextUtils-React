import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import About from "./components/About";

/*
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

*/

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark"); //kyuki ye state variable hai to isko apan direct set nahi kar skahte hai
      document.body.style.backgroundColor = "#042743";
      //ab jaise mode change ho raha hai to apan pure body ke colour ko bhi chge karna chaoyie hai isiliye apan ye property likh rahe hai
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  /*
  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("dark"); //kyuki ye state variable hai to isko apan direct set nahi kar skahte hai
      document.body.style.backgroundColor = "red";
      //ab jaise mode change ho raha hai to apan pure body ke colour ko bhi chge karna chaoyie hai isiliye apan ye property likh rahe hai
      showAlert("Red mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("dark"); //kyuki ye state variable hai to isko apan direct set nahi kar skahte hai
      document.body.style.backgroundColor = "green";
      //ab jaise mode change ho raha hai to apan pure body ke colour ko bhi chge karna chaoyie hai isiliye apan ye property likh rahe hai
      showAlert("Green mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  */
  return (
    <>
      {/*<Router>*/}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container my-3">
        <div className="container">
          {/*<Routes>
              <Route exact path="/about" element={<About />}></Route>
              <Route
                exact
                path="/"
                element={
                  
                }
              ></Route>
            </Routes>
              */}
          <TextForm
            heading="Enter text Here"
            mode={mode}
            showAlert={showAlert}
          />
        </div>
        {/*<About></About>*/}
      </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
