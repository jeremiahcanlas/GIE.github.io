"use strict";

$(document).ready(function () {
  // cool intro fade to catch customer attention
  $('.greeting').hide().fadeIn(1500);
  $('.book-now h2').hide().fadeIn(3000);
  $('.book-now a').hide().fadeIn(6000); // when the link are clicked it injects html into the page

  $('#manibtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput container-fluid\">\n        <h4>Manicures</h4>\n        <h5>Express Manicure  $20</h5>\n        <p>Cut, File, Cuticle Care, Regular Polish (20 min)</p>\n        <br>\n        <h5>Regular Manicure  $28</h5>\n        <p>Cut, File, Cuticle Care, Massage, Regular Polish (40 min)</p>\n        <br>\n        <h5>Spa Manicure  $40</h5>\n        <p>Soak, Cut, File, Cuticle Care, Exfoliating Scrub, Massage, Paraffin Wax, Regular Polish (60 min)</p>\n        <br>\n        <h5>Gel Polish Manicure  $32</h5>\n        <p>Cut, File, Cuticle Care, Polish, Massage (40 min)</p>\n        <h5>With Removal $39<p>(50 min)</p></h5>\n        <br>\n        <h5>Structure Gel Manicure  $35</h5>\n        <p>Cut, File, Cuticle Care, Polish, Massage (45 min)</p>\n        <h5>With Removal $42<p>(55 min)</p>\n        </h5>\n        <br>\n        <h5>Dip Powder Manicure  $38</h5>\n        <p>(45 min - overlay)</p>\n        <p>(60 min - Remove & Reapply)</p>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.pedibtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput container-fluid\">\n        <h4>Pedicures</h4>\n        <h5>Express Pedicure  $30</h5>\n        <p>Soak, Cut, File, Cuticle Care, Polish</p>\n        <br>\n        <h5>Regular Pedicure  $40</h5>\n        <p>Soak, Cut, File, Cuticle care, Callous Care, Massage, Polish</p>\n        <br>\n        <h5>Spa Pedicure  $50</h5>\n        <p>Soak, Cut, File, Cuticle Care, Callous Care, Exfoliating Scrub, Massage, Paraffin wax, Polish</p>\n        <br>\n        <h5>Gel Polish Pedicure  $45</h5>\n        <p>Soak, Cut, File, Cuticle care, Callous care, Polish, Massage</p>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.waxbtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput row container-fluid\">\n            <div class='col-sm-4'>\n                <h4>Waxing</h4>\n                <p>Brows $14</p>\n                <p>Lip $10</p>\n                <p>Chin $12</p>\n                <p>Full Face $30</p>\n                <p>Underarms $25</p>\n                <p>Half Arm $35</p>\n                <p>Full Arm $45</p>\n                <p>Half leg $40</p>\n                <p>Full leg $60</p>\n                <p>Lower back $20</p>\n                <p>Bikini $25</p>\n                <p>Extended Bikini $35</p>\n                <p>First time Brazilian $50</p>\n                <p>Regular Brazilian $42</p>\n            </div>\n            <div class='col-sm-4'>\n                <h4>Men's Waxing</h5>\n                <p>Back $40 - $70</p>\n                <p>Chest $40 - $70</p>\n                <p>First time Bro-zilian $65</p>\n                <p>Regular Bro-zilian $50</p>\n            </div>\n            <div class='col-sm-4'>\n                <h4>Junior Waxing Services (16 & under)</h5>\n                <p>Brow $10</p>\n                <p>Upper Lip $5</p>\n                <p>Underarm $18</p>\n                <p>Half Leg $25</p>\n                <p>Full Leg $45</p>\n\n            </div>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.lashbtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput row container-fluid\">\n            <div class='col-sm-6'>\n                <h4>Lashes</h4>\n                <p>Lash Lift $60</p>\n                <p class='mb-0'><b>Lash Lifts give your natural lashes a beautiful curl!</b></p>\n                <p><b>It is low maintenance, with results lasting up to 8 weeks.</b></p>\n                <p>Lash Lift & Tint $70</p>\n            </div>\n            <div class='col-sm-6'>\n                <h4>Tinting</h5>\n                <p>Brow Tint $18</p>\n                <p>Lash Tint $23</p>\n            </div>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.massbtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput container-fluid\">\n                <h4>Relaxation Massage</h4>\n                <p>Back & Neck Massage $40</p>\n                <p>Full Body Massage $65</p>\n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.alabtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput container-fluid\">\n                <h4>A La Carte</h4>\n                <p>Paraffin wax $10</p>\n                <p>French application $10</p>\n                <p>Add Gel Polish to Service $5</p>\n                <p>Gel Polish Removal Only $12</p>\n                <p>Gel Polish Removal with a Service $7</p>\n                <p>Dip Powder Removal Only $15</p>\n                <p>Polish Change $12</p>\n                <p>Nail Art Accent Nails $2</p>\n                <p>Nail art all ten nails  $15 & up</p>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.jrbtn').click(function (e) {
    $('.output').hide().fadeIn(200).html("\n        <div class=\"thisoutput container-fluid jrout\">\n                <h4>Junior Services (14 & under)</h4>\n                <p>Manicure $14</p>\n                <p>Pedicure $20</p>\n                <p>Manicure/Pedicure $30</p>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
});
$('.navbar a').click(function (e) {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  e.preventDefault();
});