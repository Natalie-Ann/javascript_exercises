// let form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let data = new FormData(form);
//     let request = new XMLHttpRequest();
//     request.open('POST', 'http://localhost:3000/api/staff_members');

//     request.addEventListener('load', (e) => {
//         if (request.status === 201) {
//             let response = JSON.parse(request.response);
//             alert(`A new staff member was added with an id of ${response.id}.`);
//         } else {
//             alert(`${request.responseText}`);
//         }
//     });

//     request.send(data);
// })



let form = document.querySelector('form');

form.addEventListener('submit', event => {
  // prevent the browser from submitting the form
  event.preventDefault();

  let data = new FormData(form);


  let request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:3000/api/staff_members');

  request.addEventListener('load', () => {
    if (request.status === 201) {
      const response = JSON.parse(request.response);
      alert(`The staff member was added with id: ${response.id}`);
    } else if (request.status === 400) {
      alert(`${request.responseText}`);
    }
  });

  request.send(data);
});



