document.addEventListener('DOMContentLoaded', (e) => {
    let submitButton = document.querySelector('#submit');
    let addButton = document.querySelector('#add');
    let selectName = document.querySelector('#staff_id');
    let form = document.querySelector('form');

    loadStaffNames();

    function loadStaffNames() {
        let nameRequest = new XMLHttpRequest();
        nameRequest.open('GET', '/api/staff_members');
        
        nameRequest.addEventListener('load', (e) => {
            let response = JSON.parse(nameRequest.response);
            response.forEach(staffMember => {
                let newOption = new Option(staffMember.name, staffMember.id);
                selectName.appendChild(newOption);
            });
        });
        nameRequest.send();
    }

    submitButton.addEventListener('click', (e) => {
        let submitRequest = new XMLHttpRequest();
        submitRequest.open('POST', '/api/schedules');
        submitRequest.setRequestHeader('Content-Type', 'application/json');
        let data = new FormData(form);
        console.log(Object.fromEntries(data));
        let dataToSend = JSON.stringify({schedules: [Object.fromEntries(data)]})
        console.log(dataToSend);

        submitRequest.addEventListener('load', (e) => {
            console.log(submitRequest.getAllResponseHeaders());
            form.reset();
            alert(submitRequest.responseText);
        });

        submitRequest.send(dataToSend);
    });

    addButton.addEventListener('click', (e) => {
        let newForm = form.cloneNode(true);
        newForm.insertBefore()
    })
});
