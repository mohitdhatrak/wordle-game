import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

/* App structure
        <App>
            <HeaderBar />
            <MainBody>
                <GuessGrid />
                // <feedbackText />
                // <NewRoundOrResetGameBtns />  
                <Keyboard />
            </MainBody>
        </App> 
*/
