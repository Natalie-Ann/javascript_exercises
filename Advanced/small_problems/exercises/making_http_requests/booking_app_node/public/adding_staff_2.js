let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let staffRequest = new XMLHttpRequest();
    staffRequest.open('POST', '/api/staff_members');

    let data = new FormData(form);
    
    staffRequest.addEventListener('load', (e) => {
        console.log(staffRequest.getAllResponseHeaders());
        if (staffRequest.status === 201) {
            let responseID = JSON.parse(staffRequest.response).id; //turns the JSON response into a regular JS object and then gets the id from that object

            alert(`Staff successfully added with id of ${responseID}.`);
        } else {
            alert(staffRequest.responseText);
        }
        form.reset();
    });
    
    staffRequest.send(data);
});


/*
Notes: For this API, 200 responses are in JSON format and other responses are in text/html format, so that's why setting the responseType does not work. Can see this with getAllResponseHeaders().

When you set responseType, you are saying that when the response is in JSON, then the browser will parse the JSON response into a JS object by itself (skips the JSON.parse step). Setting the responseType to JSON is actually like setting the response as a JS object ONLY for responses that are returned as JSON. Doesn't take into account other response types (like text) and instead will return NULL as the response for those other cases.

*/
