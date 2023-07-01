let logged;

function sendAnalytics(data: string) {
    console.log(data);
    logged = true;
    logged = data;
}

sendAnalytics('The Data');