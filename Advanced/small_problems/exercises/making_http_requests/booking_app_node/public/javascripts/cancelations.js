// Implement two functions: one for cancelling schedules and the other for cancelling of bookings. The functions take a scheduleId and a bookingId as arguments respectively.

function cancelSchedule(scheduleId) {
    let deleteScheduleRequest = new XMLHttpRequest();
    deleteScheduleRequest.open('DELETE', `/api/schedules/${String(scheduleId)}`);
    
    deleteScheduleRequest.addEventListener('load', (e) => {
        if (deleteScheduleRequest.status === 204) {
            alert('Schedule was successfully deleted!');
        } else {
            alert(deleteScheduleRequest.responseText);
        }
    })
    deleteScheduleRequest.send();
}

function cancelBooking(bookingId) {
    let cancelBookingRequest = new XMLHttpRequest();
    cancelBookingRequest.open('PUT', `/api/schedules/${String(bookingId)}`);

    cancelBookingRequest.addEventListener('load', (e) => {
        if (cancelBookingRequest.status === 204) {
            alert('Booking successfully canceled!');
        } else {
            alert(cancelBookingRequest.responseText);
        }
    });
    cancelBookingRequest.send();
}