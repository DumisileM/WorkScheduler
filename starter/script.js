var currentHour = $('.hour')
var currentTextArea = $('.time-block')
var saveBtn = $('.saveBtn')
// var storedActivites = JSON.parse(localStorage.getItem("activities"))


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
          
          i++
          $(this).text(hour)
         
        });
      
               
          };

}

function setPastPresentFuture(){
    currentHour.each(function(){
        var formattedHour = moment().format("YYYY-MM-DD " + `${$(this).text().slice(0,3)}:mm:ss`.replace(/\s+/g, ''))
      
        var today = moment(moment().format("YYYY-MM-DD HH:mm:ss"))
        
        // var test = moment("2023-01-22 09:00:00","YYYY-MM-DD HH:mm:ss")
        
        if(today.isSame(formattedHour,"hour")){
            
            $(this).next().addClass("present");
        }else if(today.isBefore(formattedHour,"hour")){
            
            $(this).next().addClass("future");
        }else if(today.isAfter(formattedHour,"hour")){
           
            $(this).next().addClass("past");
        }
    })
    };
 

function makeEntryAndSave(){
    var activites= []
    
    saveBtn.each(function(index,btn){
        var item = JSON.parse(localStorage.getItem(`activity${index}`.replace(/\s+/g, '')))

        $(this).prev().text(item)
        $(this).click(function(){

            if($(this).prev().val()){
                console.log($(this).prev().val())
                console.log(index)
                localStorage.setItem(`activity${index}`.replace(/\s+/g, ''),JSON.stringify($(this).prev().val()))

                
            // activites.push($(this).prev().val())
        
            
            // localStorage.setItem("activities",JSON.stringify(activites))
         
            
            
          
        }
    
    })




    })

   

  
    
}

// function getEntry(){

//       // $(this).prev().text(storedActivites[index])
//       currentTextArea.each(function(index){
    
//         if (storedActivites){
//             $(this).text(storedActivites[index])
           


//         }
        
//       })
      

// }

getCurrentDay()
setHours()
setPastPresentFuture()
makeEntryAndSave()
// getEntry()




    






