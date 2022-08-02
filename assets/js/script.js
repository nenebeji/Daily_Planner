var saveBtn = $('.saveBtn');
var timeblock = $('.time-block');
var notifications = $('.notifications')
//get current hour and save in new variable
var currentHOUR = moment().hours();

console.log(currentHOUR);

//show current day on page
$('#currentDay').text(moment().format('LLLL'));

// function to change the colour when currenthour doesn't match with time on planner
function HourlyUpdate(){
timeblock.each(function(){
  // selected the dataset: data-time and gave it var hourblock
  hourblock = $(this).data('time')
  if (hourblock < currentHOUR){
    // found the specific section to add the css class
    $(this).find('.description').addClass('past');
  } else if (hourblock == currentHOUR) {
    $(this).find('.description').removeClass('past');
    $(this).find('.description').addClass('present');
  } else {
    $(this).find('.description').removeClass('past');
    $(this).find('.description').removeClass('present');
    $(this).find('.description').addClass('future');
  }
}
)}



// function to execute once DOM is fully loaded
$('document').ready(function(){
    // save button click event
    saveBtn.on('click', function(){
        storeItem();
        // add class to show notification after saved to local storage
        notifications.addClass('show');
        // set timeout to remove notification after 3 seconds
        setTimeout(function () {
            notifications.removeClass('show');
          }, 3000);
          
    });

    HourlyUpdate();

    getItem();
    
    // store in local storage
    function storeItem(){
        localStorage.setItem('hour-9', $('#hour-9 .description').val());
        localStorage.setItem('hour-10', $('#hour-10 .description').val());
        localStorage.setItem('hour-11', $('#hour-11 .description').val());
        localStorage.setItem('hour-12', $('#hour-12 .description').val());
        localStorage.setItem('hour-13', $('#hour-13 .description').val());
        localStorage.setItem('hour-14', $('#hour-14 .description').val());
        localStorage.setItem('hour-15', $('#hour-15 .description').val());
        localStorage.setItem('hour-16', $('#hour-16 .description').val());
        localStorage.setItem('hour-17', $('#hour-17 .description').val());
    }

    //load saved data from local storage
    function getItem(){
        $('#hour-9 .description').val(localStorage.getItem('hour-9'));
        $('#hour-10 .description').val(localStorage.getItem('hour-10'));
        $('#hour-11 .description').val(localStorage.getItem('hour-11'));
        $('#hour-12 .description').val(localStorage.getItem('hour-12'));
        $('#hour-13 .description').val(localStorage.getItem('hour-13'));
        $('#hour-14 .description').val(localStorage.getItem('hour-14'));
        $('#hour-15 .description').val(localStorage.getItem('hour-15'));
        $('#hour-16 .description').val(localStorage.getItem('hour-16'));
        $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    }
  })