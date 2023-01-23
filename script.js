var currentHour = $('.hour');
var currentTextArea = $('.time-block');
var saveBtn = $('.saveBtn');



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
        
        $( ".hour" ).each(function() {
          var hour = moment().hours(i).format("HH a");
          
          i++;
          $(this).text(hour);
         
        });
      
               
          };

};

function setPastPresentFuture(){
    //loop through each element of .hour class
    currentHour.each(function(){
        /*for each one, grab the value and use it along with moment() object to create a format that is 
        consistent with IOS format to allow comparison later */
        var formattedHour = moment().format("YYYY-MM-DD " + `${$(this).text().slice(0,3)}:mm:ss`.replace(/\s+/g, ''));
        // capture current day and time dwon to seconds
        var today = moment(moment().format("YYYY-MM-DD HH:mm:ss"));
        
       
        //check if that the .hour text value, is the same, before or after today's i.e. current hour
        //and add class value to .hour element based on the outcome.
        if(today.isSame(formattedHour,"hour")){
            
            $(this).next().addClass("present");
        }else if(today.isBefore(formattedHour,"hour")){
            
            $(this).next().addClass("future");
        }else if(today.isAfter(formattedHour,"hour")){
           
            $(this).next().addClass("past");
        };
    });
    };
 

function makeEntryAndSave(){
 
    /*
    on click of the save button get, check if there is text on text area and save text value to localstorage
    the code creates a unique name for each task which is made unique by appending index value of 
    the button element to name of vriable e.g. activity0, activity1, activity2 etc.
    retrieve that item in local storage and set it as text content of  text area that is sibling of 
    current button.
    
    */
    saveBtn.each(function(index){
        var item = JSON.parse(localStorage.getItem(`activity${index}`.replace(/\s+/g, '')));

        $(this).prev().text(item);
        $(this).click(function(){

            if($(this).prev().val()){
                localStorage.setItem(`activity${index}`.replace(/\s+/g, ''),JSON.stringify($(this).prev().val()));            
          
        };
    
    });




    }) ;   
};



getCurrentDay()
setHours()
setPastPresentFuture()
makeEntryAndSave()





    






