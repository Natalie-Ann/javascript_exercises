
document.addEventListener('DOMContentLoaded', (e) => {
    let datesList = document.querySelector('ul');
    let listItems;

    let getDates = new XMLHttpRequest();
    getDates.open('GET', 'api/bookings');

    getDates.addEventListener('load', (e) => {
        let dates = JSON.parse(getDates.response);
        createList(dates);
        listItems = Array.from(datesList.children);
        generateBookings();
    });
    getDates.send();

    function createList(dates) {
        dates.forEach(date => {
            let newBulletPoint = document.createElement('li');
            newBulletPoint.textContent = date;
            newBulletPoint.id = `D${date}`;
            datesList.appendChild(newBulletPoint);
        });
    };

    
    function generateBookings() {
        listItems.forEach(date => {
            let getBookings = new XMLHttpRequest();
            getBookings.open('GET', `/api/bookings/${date.textContent}`);
            
            getBookings.addEventListener('load', (e) => {
                let bookings = JSON.parse(getBookings.response);
                console.log(bookings);
                let node = document.querySelector(`#D${date.textContent}`);
                console.log(node);
                node.addEventListener('click', (e) => {
                    e.preventDefault();
                    let booking = document.createElement('li');
                    booking.textContent = `${bookings[0][0]} | ${bookings[0][1]} | ${bookings[0][2]}`;
                    node.appendChild(booking);
                });
            });
            getBookings.send();
        });
    };
  
});


