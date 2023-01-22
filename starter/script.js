var currentHour = $('.hour')
var currentTextArea = ($('.time-block'))



//Display current date at the top of page.
function getCurrentDay(){
    var day = moment().format("MMM Mo, YYYY");
    $('#currentDay').text(day);
}


function setHours(){
    /*Present timeblocks for standard business hours when the 
    user scrolls down. This fucntions sets typical business hours(9-5)
    and displays them on timeblocks*/
    for(let i=9; i < 18;){
 
        $( ".hour" ).each(function( index ) {
          var hour = moment().hours(i).format("HH a");
          
          i++
          $(this).text(hour)
         
        });
      
               
          };

}

function setPastPresentFuture(){
    currentHour.each(function(){
        var formattedHour = moment().format("YYYY-MM-DD " + `${$(this).text().slice(0,3)}:mm:ss`.replace(/\s+/g, ''))
        console.log(moment(formattedHour).isValid())
        var today = moment(moment().format("YYYY-MM-DD HH:mm:ss"))
        
        // var test = moment("2023-01-22 09:00:00","YYYY-MM-DD HH:mm:ss")
        
        if(today.isSame(formattedHour,"hour")){
            
            $(this).next().addClass("present");
        }else if(today.isBefore(formattedHour,"hour")){
            
            $(this).next().addClass("future");
        }else if(today.isAfter(formattedHour,"hour")){
            console.log("past")
          
            $(this).next().addClass("past");
        }
    })
    };

    
    
function makeEntryAndSave(){
    currentTextArea.each(function(){
        $(this).on("keydown",function(){
            console.log($(this).val())
            localStorage.setItem("activity",$(this).val());
            var activity = localStorage.getItem("activity")
            $(this).text(activity)
            return activity

        })
        
        
       


    })

}
function getEntry(){
    
}
  
getCurrentDay()
setHours()
setPastPresentFuture()
makeEntryAndSave()




    






