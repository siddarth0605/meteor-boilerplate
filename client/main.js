//Standard Meteor Library Imports
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

//Standard React Component Library Imports
import React from 'react';
import ReactDOM from 'react-dom';

//Import the Routes File and the simple-schema-configuration files
import Routes from '../imports/routes/Routes.js';
import '../imports/startup/simple-schema-configuration.js';

//Load the app
Meteor.startup(() => {
  Tracker.autorun(() => {
    //This variable checks to see if the user is logged in which will determine which webpage will be loaded on startup and which
    //parts of th site they will have access to.
    const isAuthenticated= !!Meteor.userId();
    //Renders the JSX to the screen
    ReactDOM.render(<Routes isAuthenticated={isAuthenticated}/>,document.getElementById("app"))
  })
})