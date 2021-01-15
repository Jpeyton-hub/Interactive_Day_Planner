// setting current day in the header
$('#currentDay').text(dayjs().format('dddd, MMMM D'));

// declaring variables for time comparison
const currentHour = dayjs().format('H');
const descArr = $('.description')

for (let i = 0; i < descArr.length; i++) {
    if (descArr[i].dataset.time == currentHour) {
        descArr[i].classList.add('present')
    }
    else if (descArr[i] > currentHour) {
        descArr[i].classList.add('future')
    }
    else if (descArr[i] < currentHour) {
        descArr[i].classList.add('past')
    }
}
