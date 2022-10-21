
document.addEventListener('DOMContentLoaded', (e) => {
    let select = document.querySelector('#id');
    let mainForm = document.querySelector('#mainForm');
    let addStudentForm = document.querySelector('#addStudent');
    let cancelStudent = document.querySelector('#cancelStudent');
    let submitMainFormButton = document.querySelector('#submitMainForm');
    let staffNames;
    let registeredStudents;

    //Display staff schedules
    let getStaffNames = new XMLHttpRequest();
    getStaffNames.open('GET', 'http://localhost:3000/api/staff_members');

    getStaffNames.addEventListener('load', (e) => {
        staffNames = JSON.parse(getStaffNames.response);

        let retrieveSchedulesRequest = new XMLHttpRequest();
        retrieveSchedulesRequest.open('GET', 'http://localhost:3000/api/schedules');
        
        retrieveSchedulesRequest.addEventListener('load', (e) => {
            let schedules = JSON.parse(retrieveSchedulesRequest.response);
            console.log(schedules);
            let openTimes = schedules.filter(schedule => schedule.student_email === null);
            console.log(openTimes);
            openTimes.forEach(schedule => { 
                let staffMember = staffNames.find(staff => staff.id === schedule.staff_id);
                let timeOption = new Option(`${staffMember.name}| ${schedule.date} | ${schedule.time}`, schedule.id);
                select.appendChild(timeOption);
            });
        });
        retrieveSchedulesRequest.send();
    });

    getStaffNames.send();

    
    // Check if student email exists
    let retrieveRegisteredStudents = new XMLHttpRequest();
    retrieveRegisteredStudents.open('GET', 'http://localhost:3000/api/students');
    retrieveRegisteredStudents.send();

    retrieveRegisteredStudents.addEventListener('load', (e) => {
        registeredStudents = JSON.parse(retrieveRegisteredStudents.response);
    
        let registeredEmails = registeredStudents.map(student => student.email);
        console.log(registeredEmails);
    });


    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let submitBooking = new XMLHttpRequest();
        submitBooking.open('POST', 'http://localhost:3000/api/bookings');
        submitBooking.setRequestHeader('Content-Type', 'application/json');
                
        submitBooking.addEventListener('load', (e) => {
            if (submitBooking.status === 204) {
                alert('Booking was successful!');
                location.reload();
            } else if (submitBooking.responseText.includes('booking_sequence')) {
                alert(submitBooking.responseText);
                let bookingSequenceInput = document.querySelector('#bookingSequence');
                let mainFormEmail = document.querySelector('#student_email');
                let newStudentEmail = document.querySelector('#studentEmail');
                bookingSequenceInput.value = submitBooking.responseText.split(' ')[5];
                newStudentEmail.value = mainFormEmail.value;
                addStudentForm.style.display = 'block';
            } else {
                alert(submitBooking.responseText);
            }
  
        });
        submitBooking.send(formDataToJson(mainForm));
    });

    addStudentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let submitNewStudent = new XMLHttpRequest();
        submitNewStudent.open('POST', 'http://localhost:3000/api/students');
        submitNewStudent.setRequestHeader('Content-Type', 'application/json');

        submitNewStudent.addEventListener('load', (e) => {
            if (submitNewStudent.status === 201) {
                alert(submitNewStudent.response);
                hideStudentForm();
                mainForm.requestSubmit(submitMainFormButton);
            } else {
                alert(submitNewStudent.response);
            }
        });
        submitNewStudent.send(formDataToJson(addStudentForm));
    });

    cancelStudent.addEventListener('click', event => {
        hideStudentForm();
      });

    function hideStudentForm () {
        addStudentForm.style.display = 'none';
    }
});



function formDataToJson(form) {
    let formData = new FormData(form);
    let obj = {};
  
    for (let [key, value] of formData) {
      obj[key] = value;
    }
  
    return JSON.stringify(obj);
  }





