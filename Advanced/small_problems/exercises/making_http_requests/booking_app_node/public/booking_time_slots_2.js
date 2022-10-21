document.addEventListener('DOMContentLoaded', function(event) {
    let scheduleSelect = document.querySelector('#id');
    let mainForm = document.querySelector('#mainForm');
    let submitMainFormButton = document.querySelector('#submitMainForm');
    let openBookings;
    let staffList;

    let requestStaff = new XMLHttpRequest();
    requestStaff.open('GET', '/api/staff_members');
    requestStaff.timeout = 5000;

    requestStaff.addEventListener('load', (e) => {
        staffList = JSON.parse(requestStaff.response);
        console.log(staffList);
    
        let requestSchedules = new XMLHttpRequest();
        requestSchedules.open('GET', '/api/schedules');
        requestSchedules.addEventListener('load', (e) => {
            let schedules = JSON.parse(requestSchedules.response);

            openBookings = schedules.filter(schedule => schedule.student_email === null);
            openBookings.forEach(schedule => {
                let staff = staffList.find(staff => schedule.staff_id === staff.id);
                let displayText = `${staff.name} | ${schedule.date} | ${schedule.time}`;
                let newOption = new Option(displayText, schedule.id);
                scheduleSelect.appendChild(newOption);
                });
        });
    
        requestSchedules.send();
    });

    requestStaff.addEventListener('timeout', (e) => {
        alert('Took too long.');
    });

    requestStaff.addEventListener('error', (e) => {
        alert('There was some error with XMLHttpRequest.');
    })

    requestStaff.send();

});