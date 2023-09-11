import { useState, ChangeEvent, FormEvent } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import Message from "./Message";
import Image from "./components/Image";
import DynamicImage from "./components/DynamicImage";
// import TextInputComponent from "./components/TextInput";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisibilty] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const imageUrl = "https://urlme.me/success/typed_a_url/made_a_meme.jpg"; // Your dynamic image URL
  const altText = "Sample Image";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Input submitted", inputValue);
    // add other stuff to be done with the input here
  };

  return (
    <div className="container">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibilty(false)}>
          The content is now being generated
        </Alert>
      )}
      <h3>Describe your marketing promotion here</h3>
      {/* <TextInputComponent /> */}
      {/* <form onSubmit={handleSubmit}>
        <InputBox
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text..."
        />
        <button type="submit">Submit</button>
      </form>
      <h4>Your input was: {inputValue}</h4> */}
      <Button
        onClick={() => setAlertVisibilty(true)}
        className="top-right-button"
      >
        Click Me
      </Button>
      <Button
        onClick={() => setAlertVisibilty(true)}
        className="top-left-button"
      >
        Also Click Me please
      </Button>
      <div className="static-image">
        <Image></Image>
      </div>
      <div className="dynamic-image">
        <DynamicImage imageUrl={imageUrl} altText={altText} />
      </div>
      <div className="preview">
        add the privew code here which shows generated content add a publish
        button which submits
      </div>
    </div>
  );
}

export default App;
