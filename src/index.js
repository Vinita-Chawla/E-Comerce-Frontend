import React from "react"
import ReactDOM from "react-dom"
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App"
import {Provider} from "react-redux";
import { store,persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51NqbIGBttcRVBy3MwV4MMspboHMdvvrkmzx460Y78zWbDYmdxYnHq1b3AH3u24cQbPMQeapqKGNvJlOaZD91O0Ji00YeearX1u');


ReactDOM.render(
<Provider store={store}>
<PersistGate persistor={persistor}>
<Elements stripe={stripePromise}>
<App/>
</Elements>
</PersistGate>
</Provider>
,document.getElementById("root"));


