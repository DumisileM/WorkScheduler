var currentHour = $('.hour');
//Display current date at the top of page.
function getCurrentDay(){
    var day = moment().format("MMM Mo, YYYY");
    $('#currentDay').text(day);
}


function setHours(){
    /*Present timeblocks for standard business hours when the 
    user scrolls down. This fucntions sets typical business hours(9-5)
    and displays them on timeblocks*/
    for(let i=20; i < 24;){
 
        $( ".hour" ).each(function( index ) {
          var hour = moment().hours(i).format("HH a");
          i++
          $(this).text(hour)
         
        });
      
               
          };

}

function setPastPresentFuture(){
    currentHour.each(function(){
       

        if(Number($(this).text().slice(0,2)) == moment().hour()){
            
            $(this).next().addClass("present");
        }else if(Number($(this).text().slice(0,2)) > moment().hour()){
            
            $(this).next().addClass("future");
        }else if(Number($(this).text().slice(0,2)) < moment().hour()){
          
            $(this).next().addClass("past");
        }
    })
    };

    
    


  
getCurrentDay()
setHours()
setPastPresentFuture()



    






