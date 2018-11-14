'use strict';

window.onload = (e) => {
    const bookingForm = document.forms['booking-form'];
    const roomPrices = prices;
    const bookings = [];

     configUI();
     function configUI(){
        let checkInDate = new Date();
        checkInDate = `${checkInDate.getFullYear()}-${checkInDate.getMonth()+1}-${checkInDate.getDate()}` 
        document.forms['booking-form'].querySelector('#check-in').value = checkInDate
     }

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const reservation = validate(getReservationObject(e.target));
    })


    function validate(booking) {
      console.clear();
        let errorCount = 0;
       
        if(booking.guests <= 1 || booking.guests >= 6){
          errorCount ++;
        }
        if(booking.checkIn.getMonth() > booking.checkOut.getMonth() ){
            console.log("your arriving after your depart one month ahead")
     }
        if(booking.checkIn.getDate() > booking.checkOut.getDate() && booking.checkIn.getMonth() >= booking.checkOut.getMonth()){
            errorCount ++;
            console.log("your leaving in advance of your arrival date in the same month")
           }
        if(booking.checkIn.getFullYear() > booking.checkOut.getFullYear() ){
         errorCount ++;
         console.log("your booking in a month ahead")
        }
    }

    function getReservationObject(form) {
        const guests = Number(form.querySelector('#guests').value);
        const roomType = String(form.querySelector('#room-type').value);
        const selectIndex = String(form.querySelector('#room-type').selectedIndex);
        const checkIn = new Date((form.querySelector('#check-in').value).split('-'));
        const checkOut = new Date((form.querySelector('#check-out').value).split('-'));

        const reservation = {
            guests,
            roomType,
            selectIndex,
            checkIn,
            checkOut,
        }

        return reservation
    }

    function newReservation() {

    }

} //close of the window on load function