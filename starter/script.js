//Display cuttrnt date at the top of page.
var day = moment().format("MMM Mo, YYYY")
$('#currentDay').text(day)

function assignHour(element,hour){
        element.text(hour)
}

for(let i=9; i < 18;){
 
  $( ".hour" ).each(function( index ) {
    var hour = moment().hours(i).format("k a");
    i++
    $(this).text(hour)
    console.log( index + ": " + $( this ).text() );
  });

         
    }
    


  





    






