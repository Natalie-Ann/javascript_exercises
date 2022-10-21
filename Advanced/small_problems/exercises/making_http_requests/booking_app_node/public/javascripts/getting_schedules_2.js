
let scheduleRequest = new XMLHttpRequest();
scheduleRequest.open('GET', 'api/schedules');
scheduleRequest.timeout = 5000;
scheduleRequest.responseType = 'json';

scheduleRequest.addEventListener('load', (e) => {
    let schedules = scheduleRequest.response;
    let counts = {}
    schedules.forEach(schedule => {
        let staff_id = schedule.staff_id;
        counts[staff_id] = counts[staff_id] + 1 || 1;
    });

    Object.entries(counts).forEach(pair => {
        let schedule = document.createElement('div');
        schedule.textContent = `Staff ${pair[0]}: ${pair[1]}`;
        document.body.appendChild(schedule);
    });
});

scheduleRequest.addEventListener('timeout', (e) => {
    alert('Please try again. Server timed out.');
});

scheduleRequest.addEventListener('loadend', (e) => {
    alert('Request has completed.');
})

scheduleRequest.send();
