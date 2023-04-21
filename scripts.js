// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const bookStatus = document.querySelectorAll('.status')//fixed syntax and camelcased
const reserve = document.querySelectorAll('.reserve')
const checkOut = document.querySelectorAll('.checkout')
const checkIn = document.querySelectorAll('.checkin')



checkIn[0].style.color = ''
bookStatus[0].style.color = STATUS_MAP.overdue.color
reserve[0] = STATUS_MAP.overdue.canReserve  ? reserve[0] .enabled =true : reserve[0] .disabled = true //fixed ternary 
checkOut[0] = STATUS_MAP.overdue.canCheckout ? checkOut[0].enabled=true : checkOut[0].disabled=true
checkIn[0] = STATUS_MAP.overdue.canCheckIn ? checkIn[0].enabled=true : checkIn[0].disabled=true

checkIn[1].style.color = ''
bookStatus[1].style.color = STATUS_MAP.reserved.color
reserve[1] = STATUS_MAP.reserved.canReserve  ? reserve[1] .enabled =true : reserve[1] .disabled = true
checkOut[1] = STATUS_MAP.reserved.canCheckout ? checkOut[1].enabled=true : checkOut[1].disabled=true
checkIn[1] = STATUS_MAP.reserved.canCheckIn ? checkIn[1].enabled=true : checkIn[1].disabled=true

checkIn[2].style.color = ''
bookStatus[2].style.color = STATUS_MAP.shelf.color
reserve[2] = STATUS_MAP.shelf.canReserve  ? reserve[2] .enabled =true : reserve[2] .disabled = true
checkOut[2] = STATUS_MAP.shelf.canCheckout ? checkOut[2].enabled=true : checkOut[2].disabled=true
checkIn[2] = STATUS_MAP.shelf.canCheckIn ? checkIn[2].enabled=true : checkIn[2].disabled=true