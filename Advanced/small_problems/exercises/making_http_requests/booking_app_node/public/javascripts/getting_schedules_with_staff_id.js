let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/schedules/:staff_id');
request.responseType = 'json';
request.timeout = 5000;