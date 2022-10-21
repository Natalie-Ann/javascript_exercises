document.addEventListener('DOMContentLoaded', function(event) {
    let scheduleSelect = document.querySelector('#id');
    let mainForm = document.querySelector('#mainForm');
    let submitMainFormButton = document.querySelector('#submitMainForm');
    let openBookings;
    let scheduleList;

    let requestSchedules = new XMLHttpRequest();
    requestSchedules.open('GET', '/api/schedules');
    requestSchedules.addEventListener('load', (e) => {
        scheduleList = JSON.parse(requestSchedules.response);
        openBookings = scheduleList.filter(schedule => schedule.student_email === null);

        let requestStaff = new XMLHttpRequest();
        requestStaff.open('GET', '/api/staff_members');
    
        requestStaff.addEventListener('load', (e) => {
            staffList = JSON.parse(requestStaff.response);
            console.log(staffList);
        
            openBookings.forEach(schedule => {
                    let staff = staffList.find(staff => schedule.staff_id === staff.id);

                    let displayText = `${staff.name} | ${schedule.date} | ${schedule.time}`;
                    let newOption = new Option(displayText, schedule.id);
                    scheduleSelect.appendChild(newOption);
                    });
            });
        requestStaff.send();   
    });
    
    requestSchedules.send();

});

        




