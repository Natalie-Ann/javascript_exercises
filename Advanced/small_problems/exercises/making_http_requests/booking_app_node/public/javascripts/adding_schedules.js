document.addEventListener('DOMContentLoaded', (e) => {
    let addButton = document.querySelector('#add');
    let form = document.querySelector('form');
    let staffSelectDropDown = document.querySelector('#staff_id');
    let submitButton = document.querySelector('#submit');

    let requestStaffMembers = new XMLHttpRequest();
    requestStaffMembers.open('GET', 'http://localhost:3000/api/staff_members');
    requestStaffMembers.setRequestHeader('Content-Type', 'application/json');
    requestStaffMembers.send();

    requestStaffMembers.addEventListener('load', (e) => {
        let staffList = JSON.parse(requestStaffMembers.response);
        staffList.forEach(staffMember => {
            let name = staffMember.name;
            let id = staffMember.id;

            let newOption = new Option(name, id);
    
            staffSelectDropDown.appendChild(newOption);
        });
    });

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let newForm = form.cloneNode(true);
        form.insertAdjacentElement('afterend', newForm);
    })

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        let forms = document.querySelectorAll('form');
        let data = {
            schedules: [],
        };

        [...forms].forEach(form => {
            let formData = new FormData(form);
            let json = {};

            for (let prop of formData) {
                console.log(prop);
                json[prop[0]] = prop[1];
            }
            data.schedules.push(json); 
        });

        let submitScheduleRequest = new XMLHttpRequest();
        submitScheduleRequest.open('POST', 'http://localhost:3000/api/schedules');
        submitScheduleRequest.setRequestHeader('Content-Type', 'application/json');
        console.log(JSON.stringify(data));
        submitScheduleRequest.send(JSON.stringify(data));

        submitScheduleRequest.addEventListener('load', (e) => {
            if (submitScheduleRequest.status === 201) {
                [...forms].forEach(form => form.reset());
            }
            alert(submitScheduleRequest.responseText);
        })
    });

})






// document.addEventListener('DOMContentLoaded', (e) => {
//     let staffDropDown = document.querySelector('#staff-name');

//     let requestStaffMembers = new XMLHttpRequest();
//     requestStaffMembers.open('GET', 'http://localhost:3000/api/staff_members');
//     requestStaffMembers.send();

//     requestStaffMembers.addEventListener('load', (e) => {
//         let staffList = JSON.parse(requestStaffMembers.response);
//         staffList.forEach(staff => {
//             let newOption = document.createElement('option');
//             newOption.textContent = staff.name;
//             staffDropDown.appendChild(newOption);
//         });
//     });
// });

// let form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let data = new FormData(form);

//     let requestStaffMembers = new XMLHttpRequest();

// })