import React, { useState } from "react";
import "./Password.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactSlider from "react-slider";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Password = () => {
  // all states
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(0);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [errors, setErrors] = useState({});

  const generatePassword = () => {
    //errorhandling
    setErrors({});
    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("At least one character type must be selected");
    } else if (passwordLength === "0") {
      return setErrors("Password length cannot be 0");
    } else if (passwordLength === "") {
      return setErrors("Invalid password length");
    } else if (passwordLength > 7) {
      return setErrors("Password length cannot exceed 7 characters");
    }

    //password generation
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3);
      if (lowercase && choice === 0) {
        password += randomLower();
      } else if (uppercase && choice === 1) {
        password += randomUpper();
      } else if (symbols && choice === 2) {
        password += randomSymbol();
      } else if (numbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
  };

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  //functions
  function upper(e) {
    setUppercase(!uppercase);
  }

  function lower(e) {
    setLowercase(!lowercase);
  }

  function num(e) {
    setNumbers(!numbers);
  }

  function sym(e) {
    setSymbols(!symbols);
  }

  //toast message after successfull password generation
  const notify = () =>
    toast.success("Password Copied !!", {
      position: toast.POSITION.TOP_RIGHT,
    });

  return (
    <div class="main">
      {/* clipboard and toast message */}
      <div class="card card-1" style={{ height: "5rem", width: "28rem" }}>
        <div class="card-body">
          {password}
          <div>
            <CopyToClipboard class="clipboard" text={password}>
              <div onClick={notify}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="25"
                  fill="currentColor"
                  class="bi bi-clipboard"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
                <ToastContainer />
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>

      {/* character length and react slider */}
      <div class="card text-center mb-3 card-2">
        <div class="card-body">
          <div>
            <label id="slider-label">Characters Length</label>
            <div class="card card-4">
              <div class="card-body card-body-4">
                <ReactSlider
                  class="horizontal-slider"
                  className="horizontal-slider"
                  marks
                  markClassName="example-mark"
                  min={0}
                  max={7}
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={passwordLength}
                  onChange={(value) => setPasswordLength(value)}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                />
              </div>
            </div>
          </div>
          {/* radio buttons */}
          <div class="radio">
            <input
              type="radio"
              name="uppercase"
              onClick={upper}
              style={
                uppercase
                  ? { backgroundColor: " #A4FFAF" }
                  : { backgroundColor: "#24252B" }
              }
            />{" "}
            <h5> Include UpperCase Letters</h5>
            <br />
            <input
              type="radio"
              name="lowercase"
              onClick={lower}
              style={
                lowercase
                  ? { backgroundColor: " #A4FFAF" }
                  : { backgroundColor: "#24252B" }
              }
            />
            <h5> Include LowerCase Letters</h5>
            <br />
            <input
              type="radio"
              name="numbers"
              onClick={num}
              style={
                numbers
                  ? { backgroundColor: " #A4FFAF" }
                  : { backgroundColor: "#24252B" }
              }
            />
            <h5> Include Numbers</h5>
            <br />
            <input
              type="radio"
              name="symbols"
              onClick={sym}
              style={
                symbols
                  ? { backgroundColor: " #A4FFAF" }
                  : { backgroundColor: "#24252B" }
              }
            />
            <h5> Include Symbols</h5>
            <br />
          </div>
          {/* strength bar */}
          <div class="card card-3">
            <div class="card-body card-body-3">
              <div class="mains">
                <div class="strength">STRENGTH</div>

                <div
                  class="rectangle"
                  style={
                    passwordLength > 4 &&
                      uppercase &&
                      lowercase &&
                      numbers &&
                      symbols
                      ? { backgroundColor: " #A4FFAF" }
                      : { backgroundColor: "#24252B" }
                  }
                ></div>
                <div
                  class="rectangle"
                  style={
                    passwordLength > 3 && uppercase && lowercase && numbers 
                      ? { backgroundColor: " #A4FFAF" }
                      : { backgroundColor: "#24252B" }
                  }
                ></div>
                <div
                  class="rectangle"
                  style={
                    passwordLength > 2 && uppercase && lowercase
                      ? { backgroundColor: " #A4FFAF" }
                      : { backgroundColor: "#24252B" }
                  }
                ></div>
                <div
                  class="rectangle"
                  style={
                    passwordLength > 0 && uppercase
                      ? { backgroundColor: " #A4FFAF" }
                      : { backgroundColor: "#24252B" }
                  }
                ></div>
              </div>
            </div>
          </div>
          {/* error handling */}
          {errors.length && <li className="error">{errors}</li>}
          {/* generate buttons */}
          <button class="btn btn-secondary" onClick={generatePassword}>
            GENERATE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
