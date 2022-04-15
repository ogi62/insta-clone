import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import "./styles/app.css";

ReactDOM.render(
<FirebaseContext.Provider value={{ firebase, FieldValue }}>
<App />
</FirebaseContext.Provider>
,
 document.getElementById("root"));

// client side rendered app: react (cra)
    // database which is Firebase
    // react-loading-skeleton
    // tailwind

// folder structure
    // src
        // components,
        // constants,
        // context,
        // helpers,
        // hooks,
        // lib (firebase is going to line in here), 
        // services ( firebase functions in here)
        // styles (talwind's folder (app/tailwind))


