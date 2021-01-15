// setting current day in the header
$('#currentDay').text(dayjs().format('dddd, MMMM D'));

// declaring variables for time comparison
const currentHour = dayjs().format('H');
const descArr = $('.description')

for (let i = 0; i < descArr.length; i++) {
    if (descArr[i].dataset.time == currentHour) {
        descArr[i].classList.add('present')
    }
    else if (parseInt(descArr[i].dataset.time) > currentHour) {
        descArr[i].classList.add('future')
    }
    else if (parseInt(descArr[i].dataset.time) < currentHour) {
        descArr[i].classList.remove('future')
        descArr[i].classList.remove('present')
        descArr[i].classList.add('past')
    }
}

$('.saveBtn').on('click', function() {
    $(this).toggleClass('activeBtn');
    $(this).children()[0].setAttribute('class', 'fa fa-unlock');
    $(this).toggleClass('saveBtn');
    $('.activeBtn').one('click', function() {
        $(this).children()[0].setAttribute('class', 'fa fa-lock');
        $(this).toggleClass('activeBtn');
        $(this).toggleClass('saveBtn');
    });
});


