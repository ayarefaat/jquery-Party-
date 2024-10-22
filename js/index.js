//^ Hiding side bar
let sidebarWidth =$('.sidebar').outerWidth();
console.log(sidebarWidth);

$('.sidebar').css('left',`-${sidebarWidth}px`);

$('span.open').on('click',function(){
    $('.sidebar').animate({'left':`0px`},1000);
    $('.content .info').animate({'margin-left':`${sidebarWidth}px`},1000)
    $(this).animate({'left':`${sidebarWidth}px`},1000);
});

//! Close sidebar
$('ul li.close').on('click',()=>{
    $('.sidebar').animate({'left':`-${sidebarWidth}px`},1000);
    $('span.open').animate({'left':'0px'},1000);
    $('.content .info').animate({'margin-left':`-5%`},1000)
})

//* Accordion
$('.details-box .inner').hide();
$('.details-box .inner:first-of-type').show();

$('.singer h3').on('click',function(){
    let accordionBox=$(this).next();
    accordionBox.slideToggle(1000);
    $('.inner').not(accordionBox).slideUp(1000)
    
})

//& Event CountDown


const second=1000;
const minute = second* 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

function getRemainingTime(){
    let eventDate=new Date("30 october 2024 22:30:20");
    let todayDate =new Date();
    let remainingTime = eventDate - todayDate;
    let days = Math.floor(remainingTime / day);
    let hours=Math.floor(remainingTime / hour);
    let minutes=Math.floor(remainingTime / minute);
    let seconds=Math.floor(remainingTime / second);
    if(remainingTime<0){
        let daysCounter=$('.row .days').html(`<h4 class="text-center">0 D</h4>`)
        let hoursCounter=$('.row .hours').html(`<h4 class="text-center">0</h4>`)
        let minutescounter=$('.row .minutes').html(`<h4 class="text-center">0 M</h4>`)
        let secondcounter=$('.row .seconds').html(`<h4 class="text-center">0 S</h4>`);
        clearInterval(eventTimer)
    }else{
        daysCounter=$('.row .days').html(`<h4 class="text-center">${days} D</h4>`)
        hoursCounter=$('.row .hours').html(`<h4 class="text-center">${hours} H</h4>`)
        minutescounter=$('.row .minutes').html(`<h4 class="text-center">${minutes} M</h4>`)
        secondcounter=$('.row .seconds').html(`<h4 class="text-center">${seconds} S</h4>`)
    }

}
eventTimer = setInterval(getRemainingTime,1000);


//^ textarea
let counter=100;
$('textarea').on('keypress',function(e){
    let textLength=$(this).val().length
    let textContainer=$('span.letter-counter').parent();
    let textCounter=$('span.letter-counter');
    if(textLength===100){
        e.preventDefault();
        textContainer.html('You have reached your character limit');
        textContainer.css('color','#D62E33')
        textContainer.css('font-weight','bold');
    }else{
        counter --
        textCounter.html(counter)
    }

})









