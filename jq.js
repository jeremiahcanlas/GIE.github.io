$(document).ready(function () {



// cool intro fade to catch customer attention
    $('.greeting').hide().fadeIn(1500)
    $('.book-now h2').hide().fadeIn(2500)
    $('.book-now a').hide().fadeIn(5500)

    
// when the link are clicked it injects html into the page
    $('#manibtn').click(function(e){

       
        $('.output').hide().fadeIn().html(`
        <div class="thisoutput">
        <h4>Manicures</h4>
        <h5>Express Manicure  $20</h5>
        <p>Cut, File, Cuticle Care, Regular Polish (20 min)</p>
        <br>
        <h5>Regular Manicure  $28</h5>
        <p>Cut, File, Cuticle Care, Massage, Regular Polish (40 min)</p>
        <br>
        <h5>Spa Manicure  $40</h5>
        <p>Soak, Cut, File, Cuticle Care, Exfoliating Scrub, Massage, Paraffin Wax, Regular Polish (60 min)</p>
        <br>
        <h5>Gel Polish Manicure  $32</h5>
        <p>Cut, File, Cuticle Care, Polish, Massage (40 min)</p>
        <h5>With Removal $39<p>(50 min)</p></h5>
        <br>
        <h5>Structure Gel Manicure  $35</h5>
        <p>Cut, File, Cuticle Care, Polish, Massage (45 min)</p>
        <h5>With Removal $42<p>(55 min)</p>
        </h5>
        <br>
        <h5>Dip Powder Manicure  $38</h5>
        <p>Dip powder is an innovative manicure that uses a combination of liquids and Powder.
        The dip powder nail system is <b>odor-free, non-toxic,</b> and <b>enriched with vitamins</b>.
        Lasts 2-4 weeks, is removed completely and re-applied each manicure to keep nails healthy and
        looking fresh.</p>
        <p>(45 min - overlay)</p>
        <p>(60 min - Remove & Reapply)</p>
        </div>
        `)
        $('.optional').hide()
        
    
        
        e.preventDefault()
    })

    $('.pedibtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput">
        <h4>Pedicures</h4>
        <h5>Express Pedicure  $30</h5>
        <p>Soak, Cut, File, Cuticle Care, Polish</p>
        <br>
        <h5>Regular Pedicure  $40</h5>
        <p>Soak, Cut, File, Cuticle care, Callous Care, Massage, Polish</p>
        <br>
        <h5>Spa Pedicure  $50</h5>
        <p>Soak, Cut, File, Cuticle Care, Callous Care, Exfoliating Scrub, Massage, Paraffin wax, Polish</p>
        <br>
        <h5>Gel Polish Pedicure  $45</h5>
        <p>Soak, Cut, File, Cuticle care, Callous care, Polish, Massage</p>
        </div>
        `)
        $('.optional').hide()
        
        e.preventDefault()
    })

    $('.waxbtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput row">
            <div class='col-sm-4'>
                <h4>Waxing</h4>
                <p>Brows $14</p>
                <p>Lip $10</p>
                <p>Chin $12</p>
                <p>Full Face $30</p>
                <p>Underarms $25</p>
                <p>Half Arm $35</p>
                <p>Full Arm $45</p>
                <p>Half leg $40</p>
                <p>Full leg $60</p>
                <p>Lower back $20</p>
                <p>Bikini $25</p>
                <p>Extended Bikini $35</p>
                <p>First time Brazilian $50</p>
                <p>Regular Brazilian $42</p>
            </div>
            <div class='col-sm-4'>
                <h4>Men's Waxing</h5>
                <p>Back $40 - $70</p>
                <p>Chest $40 - $70</p>
                <p>First time Bro-zilian $65</p>
                <p>Regular Bro-zilian $50</p>
            </div>
            <div class='col-sm-4'>
                <h4>Junior Waxing Services (16 & under)</h5>
                <p>Brow $10</p>
                <p>Upper Lip $5</p>
                <p>Underarm $18</p>
                <p>Half Leg $25</p>
                <p>Full Leg $45</p>

            </div>
        </div>
        `)
        $('.optional').hide()
        
        e.preventDefault()
    })

    $('.lashbtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput row">
            <div class='col-sm-6'>
                <h4>Lashes</h4>
                <p>Lash Lift $60</p>
                <p><b>Lash Lifts give your natural lashes a beautiful curl!</b></p>
                <p><b>It is low maintenance, with results lasting up to 8 weeks.</b></p>
                <p>Lash Lift & Tint $70</p>
            </div>
            <div class='col-sm-6'>
                <h4>Tinting</h5>
                <p>Brow Tint $18</p>
                <p>Lash Tint $23</p>
            </div>
        </div>
        `)
        $('.optional').hide()
        
        e.preventDefault()
    })

    $('.massbtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput">
                <h4>Relaxation Massage</h4>
                <p>Back & Neck Massage $40</p>
                <p>Full Body Massage $65</p>
        </div>
        `)
        $('.optional').hide()
        
        e.preventDefault()
    })

    $('.alabtn').click(function(e){

        $('.output').hide().fadeIn().html(`
        <div class="thisoutput">
                <h4>A La Carte</h4>
                <p>Paraffin wax $10</p>
                <p>French application $10</p>
                <p>Add Gel Polish to Service $5</p>
                <p>Gel Polish Removal Only $12</p>
                <p>Gel Polish Removal with a Service $7</p>
                <p>Dip Powder Removal Only $15</p>
                <p>Polish Change $12</p>
                <p>Nail Art Accent Nails $2</p>
                <p>Nail art all ten nails  $15 & up</p>
        </div>
        `)
        $('.optional').hide()
        
        e.preventDefault()
    })

    $('.jrbtn').click(function(e){

        $('.output').hide().fadeIn(200).html(`
        <div class="thisoutput">
                <h4>Junior Services (14 & under)</h4>
                <p>Manicure $14</p>
                <p>Pedicure $20</p>
                <p>Manicure/Pedicure $30</p>
        </div>
        `)
        $('.optional').hide()
        
        e.preventDefault()
    })


  });

  $('.navbar a').click(function(e){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    e.preventDefault();
  });
  