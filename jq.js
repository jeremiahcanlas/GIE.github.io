$(document).ready(function () {



// cool intro fade to catch customer attention
    $('.greeting').hide().fadeIn(1500)
    $('.book-now h2').hide().fadeIn(3000)
    $('.book-now a').hide().fadeIn(6000)


    
// when the link are clicked it injects html into the page
    $('#manibtn').click(function(e){

       
        $('.output').hide().fadeIn().html(`
        <div class="thisoutput container-fluid">


        <table>
        <thead>
            <tr>
                <th><h4>Manicure</h4></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <h5>Express Manicure</h5>
                    <p class='mb-0'>Cut, File, Cuticle Care, Regular Polish</p>
                    <p>(20 min)</p>
                <td>
                    <h4>20</h4>
                    <br>
                </td>            
            </tr>          
            <tr>
                <td>
                    <h5>Regular Manicure</h5>
                    <p class='mb-0'>Cut, File, Cuticle Care, Massage, Regular Polish</p>
                    <p>(40 min)</p>
                <td>
                    <h4>28</h4>
                    <br>
                </td>            
            </tr>          
            <tr>
                <td>
                    <h5>Spa Manicure</h5>
                    <p class='mb-0'>Soak, Cut, File, Cuticle Care, Exfoliating Scrub, Massage, Paraffin Wax, Regular Polish</p>
                    <p>(60 min)</p>
                <td>
                    <h4>40</h4>
                    <br>
                </td>            
            </tr>          
            <tr>
                <td>
                    <h5>Gel Polish Manicure</h5>
                    <p class='mb-0'>Cut, File, Cuticle Care, Polish, Massage</p>
                    <p>(40 min)</p>
                    <h3 class='mb-0'>With Removal</h3>
                    <p>(50 min)</p>
                <td>
                    <h4>32</h4>
                    <br>
                    <h4>39</h4>
                    <br>
                </td>
            </tr> 
            <tr>
                <td>
                    <h5>Structure Gel Manicure</h5>
                    <p class='mb-0'>Cut, File, Cuticle Care, Polish, Massage</p>
                    <p>(45 min)</p>
                    <h3 class='mb-0'>With Removal</h3>
                    <p>(55 min)</p>
                <td>
                    <h4>35</h4>
                    <br>
                    <h4>42</h4>
                    <br>
                </td>
            </tr>
            <tr>
            <td>
                <h5>Dip Powder Manicure</h5>
                <p class='mb-0'>Cut, File, Cuticle Care, Polish, Massage</p>
                <p>(45 min)</p>
                <h3 class='mb-0'>With Removal</h3>
                <p>(60 min)</p>
            <td>
                <h4>38</h4>
                <br>
                <h4>45</h4>
            </td>
            </tr>            
        </tbody>
  </table>

        </div>
        <div class="book3 mt-4 pb-4">
        <a class="btn btn-light" href="https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true" target="_blank" >Book Now</a>  
        </div>
        `)
        $('.optional').hide()
        $('.backto').fadeIn(2000)

        
    
        
        e.preventDefault()
    })

    $('.pedibtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput container-fluid">
        <table>
            <thead>
                <tr>
                    <th><h4>Pedicure</h4></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h5>Express Pedicure</h5>
                        <p class='mb-0'>Soak, Cut, File, Cuticle Care, Polish</p>
                        <p>(20 min)</p>

                    </td>
                    <td>
                        <h4>30</h4>
                        <br>
                    </td>            
                </tr>          
                <tr>
                    <td>
                        <h5>Regular Pedicure</h5>
                        <p class='mb-0'>Soak, Cut, File, Cuticle care, Callous Care, Massage, Polish</p>
                        <p>(45 min)</p>
                    </td>
                    <td>
                        <h4>40</h4>
                        <br>
                    </td>            
                </tr>          
                <tr>
                    <td>
                        <h5>Spa Pedicure</h5>
                        <p class='mb-0'>Soak, Cut, File, Cuticle Care, Callous Care, Exfoliating Scrub, Massage, Paraffin wax, Polish</p>
                        <p>(75 min)</p>

                    </td>
                    <td>
                        <h4>50</h4>
                        <br>
                    </td>            
                </tr>          
                <tr>
                    <td>
                        <h5>Gel Polish Pedicure</h5>
                        <p class='mb-0'>Soak, Cut, File, Cuticle care, Callous care, Polish, Massage</p>
                        <p>(45 min)</p>
                    </td>
                    <td>
                        <h4>45</h4>
                        <br>
                    </td>
                </tr>          
            </tbody>
      </table>
        </div>
        <div class="book3 mt-4 pb-4">
        <a class="btn btn-light" href="https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true" target="_blank" >Book Now</a>  
        </div>
        `)
        $('.optional').hide()
        $('.backto').fadeIn(2000)

        
        e.preventDefault()
    })

    $('.waxbtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput row container-fluid">
            <div class='col-sm-4'>
            <table>
            <thead>
                <tr>
                    <th><h4>Waxing</h4></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h3>Brows</h3>
                    </td>
                    <td>
                        <h4>14</h4>
                    </td>            
                </tr>          
                <tr>
                    <td>
                        <h3>Lip</h3>
                    </td>
                    <td>
                        <h4>10</h4>
                    </td>            
                </tr>          
                <tr>
                    <td>
                        <h3>Chin</h3>
                    </td>
                    <td>
                        <h4>14</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Full Face</h3>
                    </td>
                    <td>
                        <h4>30</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Underarms</h3>
                    </td>
                    <td>
                        <h4>25</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Half Arm</h3>
                    </td>
                    <td>
                        <h4>35</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Full Arm</h3>
                    </td>
                    <td>
                        <h4>45</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Half Leg</h3>
                    </td>
                    <td>
                        <h4>40</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Full Leg</h3>
                    </td>
                    <td>
                        <h4>60</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Lower Back</h3>
                    </td>
                    <td>
                        <h4>20</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Bikini</h3>
                    </td>
                    <td>
                        <h4>25</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Extended Bikini</h3>
                    </td>
                    <td>
                        <h4>35</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>First time Brazilian</h3>
                    </td>
                    <td>
                        <h4>50</h4>
                    </td>                 
                </tr>
                <tr>
                    <td>
                        <h3>Regular Brazilian</h3>
                    </td>
                    <td>
                        <h4>42</h4>
                    </td>                 
                </tr>
            </tbody>
      </table>
            </div>
            <div class='col-sm-4'>
                    <table>
                    <thead>
                        <tr>
                            <th><h4>Men's Waxing</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h3>Back</h3>
                            </td>
                            <td>
                                <h4>40-70</h4>
                            </td>            
                        </tr>          
                        <tr>
                            <td>
                                <h3>Chest</h3>
                            </td>
                            <td>
                                <h4>40-70</h4>
                            </td>            
                        </tr>          
                        <tr>
                            <td>
                                <h3>First time Bro-zilian</h3>
                            </td>
                            <td>
                                <h4>65</h4>
                            </td>                 
                        </tr>
                        <tr>
                            <td>
                                <h3>Regular Bro-zilian</h3>
                            </td>
                            <td>
                                <h4>50</h4>
                            </td>                 
                        </tr>
                    </tbody>
            </table>
            </div>
            <div class='col-sm-4'>
                <table>
                <thead>
                    <tr>
                        <th>
                        <h4 class='pb-0'>Junior Waxing Services</h4>
                        <h4>(16 & under)</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>Brow</h3>
                        </td>
                        <td>
                            <h4>10</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Upper Lip</h3>
                        </td>
                        <td>
                            <h4>5</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Underarm</h3>
                        </td>
                        <td>
                            <h4>18</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Half Leg</h3>
                        </td>
                        <td>
                            <h4>25</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Full Leg</h3>
                        </td>
                        <td>
                            <h4>45</h4>
                        </td>                 
                    </tr>
                </tbody>
        </table>
            </div>
        </div>
        <div class="book3 mt-4 pb-4">
        <a class="btn btn-light" href="https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true" target="_blank" >Book Now</a>  
        </div>
        `)
        $('.optional').hide()
        $('.backto').fadeIn(2000)

        
        e.preventDefault()
    })

    $('.lashbtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput row container-fluid">
            <div class='col-sm-6'>
                <table>
                <thead>
                    <tr>
                        <th>
                        <h4>Lashes</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>Lash Lift</h3>
                        </td>
                        <td>
                            <h4>60</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Lash Lift & Tint</h3>
                        </td>
                        <td>
                            <h4>70</h4>
                        </td>            
                    </tr>          
                </tbody>
            </table>
            <p class='lash-p'>Lash Lifts give your natural lashes a beautiful curl!

            It is low maintenance, with results lasting up to 8 weeks.</p>
        </div>
            <div class='col-sm-6'>
                <table>
                <thead>
                    <tr>
                        <th>
                        <h4>Tinting</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>Brow Tint</h3>
                        </td>
                        <td>
                            <h4>18</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Lash Tint</h3>
                        </td>
                        <td>
                            <h4>23</h4>
                        </td>            
                    </tr>          
                </tbody>
                </table>
        </div>
        </div>
        <div class="book3 mt-4 pb-4">
        <a class="btn btn-light" href="https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true" target="_blank" >Book Now</a>  
        </div>

        `)
        $('.optional').hide()
        $('.backto').fadeIn(2000)
        
        e.preventDefault()
    })

    $('.massbtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput container-fluid">
                <table>
                <thead>
                    <tr>
                        <th>
                        <h4>Relaxation Massage</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3 class='mb-0'>Back & Neck Massage</h3>
                            <p>(30 min)</p>
                        </td>
                        <td>
                            <h4>40</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3 class='mb-0'>Full Body Massage</h3>
                            <p>(60 min)</p>
                        </td>
                        <td>
                            <h4>65</h4>
                        </td>            
                    </tr>          
                </tbody>
            </table>
        </div>
        <div class="book3 mt-4 pb-4">
        <a class="btn btn-light" href="https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true" target="_blank" >Book Now</a>  
        </div>
        `)
        $('.optional').hide()
        $('.backto').fadeIn(2000)

        
        e.preventDefault()
    })

    $('.alabtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput container-fluid">
                <table>
                <thead>
                    <tr>
                        <th><h4>A La Carte</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>Paraffin wax</h3>
                        </td>
                        <td>
                            <h4>10</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>French application</h3>
                        </td>
                        <td>
                            <h4>10</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Add gel polish to service</h3>
                        </td>
                        <td>
                            <h4>5</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Gel polish removal only</h3>
                        </td>
                        <td>
                            <h4>12</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Gel polish removal with a service</h3>
                        </td>
                        <td>
                            <h4>7</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Dip powder removal only</h3>
                        </td>
                        <td>
                            <h4>15</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Polish change</h3>
                        </td>
                        <td>
                            <h4>12</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Nail art accent nails</h3>
                        </td>
                        <td>
                            <h4>2</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Nail art all ten nails</h3>
                        </td>
                        <td>
                            <h4>15 & up</h4>
                        </td>                 
                    </tr>
                </tbody>
          </table>
        </div>
        <div class="book3 mt-4 pb-4">
        <a class="btn btn-light" href="https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true" target="_blank" >Book Now</a>  
        </div>
        `)
        $('.optional').hide()
        $('.backto').fadeIn(2000)

        
        e.preventDefault()
    })

    $('.jrbtn').click(function(e){

        $('.output').hide().fadeIn(200).html(`
        <div class="thisoutput row container-fluid jrout">

                <div class='col-sm-6'>
                <table>
                <thead>
                    <tr>
                        <th>
                        <h4 class='pb-0'>Junior Services</h4>
                        <h4>(14 & under)</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>Manicure</h3>
                        </td>
                        <td>
                            <h4>14</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Pedicure</h3>
                        </td>
                        <td>
                            <h4>20</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Manicure/Pedicure</h3>
                        </td>
                        <td>
                            <h4>30</h4>
                        </td>                 
                    </tr>
                </tbody>
        </table>
            </div>

                <div class='col-sm-6'>
                <table>
                <thead>
                    <tr>
                        <th>
                        <h4 class='pb-0'>Junior Waxing Services</h4>
                        <h4>(16 & under)</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>Brow</h3>
                        </td>
                        <td>
                            <h4>10</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Upper Lip</h3>
                        </td>
                        <td>
                            <h4>5</h4>
                        </td>            
                    </tr>          
                    <tr>
                        <td>
                            <h3>Underarm</h3>
                        </td>
                        <td>
                            <h4>18</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Half Leg</h3>
                        </td>
                        <td>
                            <h4>25</h4>
                        </td>                 
                    </tr>
                    <tr>
                        <td>
                            <h3>Full Leg</h3>
                        </td>
                        <td>
                            <h4>45</h4>
                        </td>                 
                    </tr>
                </tbody>
        </table>
            </div>
        </div>
        <div class="book3 mt-4 pb-4">
        <a class="btn btn-light" href="https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true" target="_blank" >Book Now</a>  
        </div>
        `)
        $('.optional').hide()
        $('.backto').fadeIn(2000)

        
        e.preventDefault()
    })

    $('.backto').click(function(){

        $('.optional').fadeIn()
        $('.thisoutput').hide()
        $('.backto').hide()
        $('.book3').hide()

    })


  });

  $('.navbar a').click(function(e){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    e.preventDefault();
  });


  

//   image scroller
  
$(function(){
    var scroller = $('#scroller div.innerScrollArea');
    var scrollerContent = scroller.children('ul');
    scrollerContent.children().clone().appendTo(scrollerContent);
    var curX = 0;
    scrollerContent.children().each(function(){
        var $this = $(this);
        $this.css('left', curX);
        curX += $this.outerWidth(true);
    });
    var fullW = curX / 2;
    var viewportW = scroller.width();

    // Scrolling speed management
    var controller = {curSpeed:0, fullSpeed:2};
    var $controller = $(controller);
    var tweenToNewSpeed = function(newSpeed, duration)
    {
        if (duration === undefined)
            duration = 600;
        $controller.stop(true).animate({curSpeed:newSpeed}, duration);
    };

    // Pause on hover
    scroller.hover(function(){
        tweenToNewSpeed(0);
    }, function(){
        tweenToNewSpeed(controller.fullSpeed);
    });

    // Scrolling management; start the automatical scrolling
    var doScroll = function()
    {
        var curX = scroller.scrollLeft();
        var newX = curX + controller.curSpeed;
        if (newX > fullW*2 - viewportW)
            newX -= fullW;
        scroller.scrollLeft(newX);
    };
    setInterval(doScroll, 20);
    tweenToNewSpeed(controller.fullSpeed);
});