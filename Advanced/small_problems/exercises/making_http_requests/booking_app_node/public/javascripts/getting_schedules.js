let answer = document.getElementById('answer');
let loadStatus = document.getElementById('load-status');

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/schedules');
request.timeout = 5000;
request.responseType = 'json';

loadStatus.textContent = 'Loading...';
    
request.addEventListener('load', (e) => {
    let staffScheduleTally = {};
    request.response.forEach(schedule => {
        let id = schedule.staff_id;
        if (!staffScheduleTally[`staff ${id}`]) {
            staffScheduleTally[`staff ${id}`] = 1;
        } else {
            staffScheduleTally[`staff ${id}`] += 1;
        }
    });
    console.log(staffScheduleTally);

    if (Object.keys(staffScheduleTally).length === 0) {
        answer.textContent = 'There are no schedules to display.';
    }
    
    for (let staff in staffScheduleTally) {
        let p = document.createElement('p');
        p.textContent = `${staff}: ${staffScheduleTally[staff]}`;
        answer.appendChild(p);
    };
});

request.addEventListener('timeout', (e) => {
    loadStatus.textContent = 'The request has timed out. Try again later.';
});
    
request.addEventListener('loadend', (e) => {
    loadStatus.textContent = 'The request has completed';
});

request.send();


