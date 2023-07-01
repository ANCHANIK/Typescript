"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    logged = data;
}
sendAnalytics('The Data');
