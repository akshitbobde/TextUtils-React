import React, { useState } from "react";

//ye syntax basically use kar raheb hi bhai set text
//kuch enter kari and vo jo type kiya hai usko kar do settext simple kyahai ki jab mai text variable me kuch likha to mai normal variable se aase nahi kar sakhte hai text = settext ye react me apan function se hi kar sakhte hai badiya se aur defalut value hai "Enter the text"

//text = "Enter the text" //wrong way to change it

export default function Textform(props) {
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    //to isse ho ye raha hai ki jab apan textbox me click kar rahe hai to inhadle wala b hi update ho raha to karo ye jo jo mai text likh raha hu usko text ke barabar use karo to mai edit karta jaunga and vo apne app edit hote rahega badiya se
  };
  const handleUpClick = () => {
    console.log("Uppercase was Clicked" + text);
    //ye delhna jo apan likh rahe n console me print ho raha uppercase was click ke sath console kholo smh aaega chl kya raha hai

    //to isse ho ye raha ki jo text apan likh rahe vo text me store ho o rha hai settext se text me ayr us text of upper case me convert karke vapas text me daal rahe hai to jo string apan dalenge vo uppercse me convert hojaegi
    let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on HandleUpClicked")
    //to isse yebhonga ki button me click karege to text area me ye aaega you have clicked wala text me update kar lenge
    props.showAlert("Coverted to Uppercase", "Success");
  };
  const handleClearClick = () => {
    console.log("Uppercase was Clicked" + text);
    //ye delhna jo apan likh rahe n console me print ho raha uppercase was click ke sath console kholo smh aaega chl kya raha hai

    //to isse ho ye raha ki jo text apan likh rahe vo text me store ho o rha hai settext se text me ayr us text of upper case me convert karke vapas text me daal rahe hai to jo string apan dalenge vo uppercse me convert hojaegi
    let newText = " ";
    setText(newText);
    // setText("You have clicked on HandleUpClicked")
    //to isse yebhonga ki button me click karege to text area me ye aaega you have clicked wala text me update kar lenge
    props.showAlert("Text Cleared", "Success");
  };
  //same hai pura bas lowercase me dalna hai
  const handleLowClick = () => {
    console.log("Uppercase was Clicked" + text);
    //ye delhna jo apan likh rahe n console me print ho raha uppercase was click ke sath console kholo smh aaega chl kya raha hai

    //to isse ho ye raha ki jo text apan likh rahe vo text me store ho o rha hai settext se text me ayr us text of upper case me convert karke vapas text me daal rahe hai to jo string apan dalenge vo uppercse me convert hojaegi
    let newText = text.toLowerCase();
    setText(newText);
    // setText("You have clicked on HandleUpClicked")
    //to isse yebhonga ki button me click karege to text area me ye aaega you have clicked wala text me update kar lenge
    props.showAlert("Coverted to Lowercase", "Success");
  };

  const handleCopy = () => {
    console.log("Copied");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "Success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="conatiner"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Covert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Covert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words , {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Approx Time Required To Read
        </p>
        <h2>Preview</h2>
        <h2>
          {text.length > 0 ? text : "Enter Something in the Textbox above"}
        </h2>
      </div>
    </>
  );
}

//haar component ki kich na kuch state hogi to mainr agar likha to vo ek state aur khkali rakha to vo ek state aasa kar ke
