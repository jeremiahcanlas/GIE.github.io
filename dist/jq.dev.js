"use strict";

$(document).ready(function () {
  // cool intro fade to catch customer attention
  $('.greeting').hide().fadeIn(1500);
  $('.book-now h2').hide().fadeIn(3000);
  $('.book-now a').hide().fadeIn(6000); // when the link are clicked it injects html into the page

  $('#manibtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput container-fluid\">\n\n\n        <table>\n        <thead>\n            <tr>\n                <th><h4>Manicure</h4></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>\n                    <h5>Express Manicure</h5>\n                    <p class='mb-0'>Cut, File, Cuticle Care, Regular Polish</p>\n                    <p>(20 min)</p>\n                <td>\n                    <h4>20</h4>\n                    <br>\n                </td>            \n            </tr>          \n            <tr>\n                <td>\n                    <h5>Regular Manicure</h5>\n                    <p class='mb-0'>Cut, File, Cuticle Care, Massage, Regular Polish</p>\n                    <p>(40 min)</p>\n                <td>\n                    <h4>28</h4>\n                    <br>\n                </td>            \n            </tr>          \n            <tr>\n                <td>\n                    <h5>Spa Manicure</h5>\n                    <p class='mb-0'>Soak, Cut, File, Cuticle Care, Exfoliating Scrub, Massage, Paraffin Wax, Regular Polish</p>\n                    <p>(60 min)</p>\n                <td>\n                    <h4>40</h4>\n                    <br>\n                </td>            \n            </tr>          \n            <tr>\n                <td>\n                    <h5>Gel Polish Manicure</h5>\n                    <p class='mb-0'>Cut, File, Cuticle Care, Polish, Massage</p>\n                    <p>(40 min)</p>\n                    <h3 class='mb-0'>With Removal</h3>\n                    <p>(50 min)</p>\n                <td>\n                    <h4>32</h4>\n                    <br>\n                    <h4>39</h4>\n                    <br>\n                </td>\n            </tr> \n            <tr>\n                <td>\n                    <h5>Structure Gel Manicure</h5>\n                    <p class='mb-0'>Cut, File, Cuticle Care, Polish, Massage</p>\n                    <p>(45 min)</p>\n                    <h3 class='mb-0'>With Removal</h3>\n                    <p>(55 min)</p>\n                <td>\n                    <h4>35</h4>\n                    <br>\n                    <h4>42</h4>\n                    <br>\n                </td>\n            </tr>\n            <tr>\n            <td>\n                <h5>Dip Powder Manicure</h5>\n                <p class='mb-0'>Cut, File, Cuticle Care, Polish, Massage</p>\n                <p>(45 min - overlay)</p>\n                <h3 class='mb-0'>With Removal</h3>\n                <p>(60 min)</p>\n            <td>\n                <h4>38</h4>\n                <br>\n                <h4>45</h4>\n            </td>\n            </tr>            \n        </tbody>\n  </table>\n\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.pedibtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput container-fluid\">\n        <table>\n            <thead>\n                <tr>\n                    <th><h4>Pedicure</h4></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <h5>Express Pedicure</h5>\n                        <p>Soak, Cut, File, Cuticle Care, Polish</p>\n                    </td>\n                    <td>\n                        <h4>30</h4>\n                        <br>\n                    </td>            \n                </tr>          \n                <tr>\n                    <td>\n                        <h5>Regular Pedicure</h5>\n                        <p>Soak, Cut, File, Cuticle care, Callous Care, Massage, Polish</p>\n                    </td>\n                    <td>\n                        <h4>40</h4>\n                        <br>\n                    </td>            \n                </tr>          \n                <tr>\n                    <td>\n                        <h5>Spa Pedicure</h5>\n                        <p>Soak, Cut, File, Cuticle Care, Callous Care, Exfoliating Scrub, Massage, Paraffin wax, Polish</p>\n                    </td>\n                    <td>\n                        <h4>50</h4>\n                        <br>\n                    </td>            \n                </tr>          \n                <tr>\n                    <td>\n                        <h5>Gel Polish Pedicure</h5>\n                        <p>Soak, Cut, File, Cuticle care, Callous care, Polish, Massage</p>\n                    </td>\n                    <td>\n                        <h4>45</h4>\n                        <br>\n                    </td>\n                </tr>          \n            </tbody>\n      </table>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.waxbtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput row container-fluid\">\n            <div class='col-sm-4'>\n            <table>\n            <thead>\n                <tr>\n                    <th><h4>Waxing</h4></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <h3>Brows</h3>\n                    </td>\n                    <td>\n                        <h4>14</h4>\n                    </td>            \n                </tr>          \n                <tr>\n                    <td>\n                        <h3>Lip</h3>\n                    </td>\n                    <td>\n                        <h4>10</h4>\n                    </td>            \n                </tr>          \n                <tr>\n                    <td>\n                        <h3>Chin</h3>\n                    </td>\n                    <td>\n                        <h4>14</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Full Face</h3>\n                    </td>\n                    <td>\n                        <h4>30</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Underarms</h3>\n                    </td>\n                    <td>\n                        <h4>25</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Half Arm</h3>\n                    </td>\n                    <td>\n                        <h4>35</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Full Arm</h3>\n                    </td>\n                    <td>\n                        <h4>45</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Half Leg</h3>\n                    </td>\n                    <td>\n                        <h4>40</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Full Leg</h3>\n                    </td>\n                    <td>\n                        <h4>60</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Lower Back</h3>\n                    </td>\n                    <td>\n                        <h4>20</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Bikini</h3>\n                    </td>\n                    <td>\n                        <h4>25</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Extended Bikini</h3>\n                    </td>\n                    <td>\n                        <h4>35</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>First time Brazilian</h3>\n                    </td>\n                    <td>\n                        <h4>50</h4>\n                    </td>                 \n                </tr>\n                <tr>\n                    <td>\n                        <h3>Regular Brazilian</h3>\n                    </td>\n                    <td>\n                        <h4>42</h4>\n                    </td>                 \n                </tr>\n            </tbody>\n      </table>\n            </div>\n            <div class='col-sm-4'>\n                    <table>\n                    <thead>\n                        <tr>\n                            <th><h4>Men's Waxing</h4></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <h3>Back</h3>\n                            </td>\n                            <td>\n                                <h4>40-70</h4>\n                            </td>            \n                        </tr>          \n                        <tr>\n                            <td>\n                                <h3>Chest</h3>\n                            </td>\n                            <td>\n                                <h4>40-70</h4>\n                            </td>            \n                        </tr>          \n                        <tr>\n                            <td>\n                                <h3>First time Bro-zilian</h3>\n                            </td>\n                            <td>\n                                <h4>65</h4>\n                            </td>                 \n                        </tr>\n                        <tr>\n                            <td>\n                                <h3>Regular Bro-zilian</h3>\n                            </td>\n                            <td>\n                                <h4>50</h4>\n                            </td>                 \n                        </tr>\n                    </tbody>\n            </table>\n            </div>\n            <div class='col-sm-4'>\n                <table>\n                <thead>\n                    <tr>\n                        <th>\n                        <h4>Junior Waxing Services</h4>\n                        <h4>(16 & under)</h4>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h3>Brow</h3>\n                        </td>\n                        <td>\n                            <h4>10</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Upper Lip</h3>\n                        </td>\n                        <td>\n                            <h4>5</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Underarm</h3>\n                        </td>\n                        <td>\n                            <h4>18</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Half Leg</h3>\n                        </td>\n                        <td>\n                            <h4>25</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Full Leg</h3>\n                        </td>\n                        <td>\n                            <h4>45</h4>\n                        </td>                 \n                    </tr>\n                </tbody>\n        </table>\n            </div>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.lashbtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput row container-fluid\">\n            <div class='col-sm-6'>\n                <table>\n                <thead>\n                    <tr>\n                        <th>\n                        <h4>Lashes</h4>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h3>Lash Lift</h3>\n                        </td>\n                        <td>\n                            <h4>60</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Lash Lift & Tint</h3>\n                        </td>\n                        <td>\n                            <h4>70</h4>\n                        </td>            \n                    </tr>          \n                </tbody>\n            </table>\n            <p class='lash-p'>Lash Lifts give your natural lashes a beautiful curl!\n\n            It is low maintenance, with results lasting up to 8 weeks.</p>\n        </div>\n            <div class='col-sm-6'>\n                <table>\n                <thead>\n                    <tr>\n                        <th>\n                        <h4>Tinting</h4>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h3>Brow Tint</h3>\n                        </td>\n                        <td>\n                            <h4>18</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Lash Tint</h3>\n                        </td>\n                        <td>\n                            <h4>23</h4>\n                        </td>            \n                    </tr>          \n                </tbody>\n                </table>\n        </div>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.massbtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput container-fluid\">\n                <table>\n                <thead>\n                    <tr>\n                        <th>\n                        <h4>Relaxation Massage</h4>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h3 class='mb-0'>Back & Neck Massage</h3>\n                            <p>(30 min)</p>\n                        </td>\n                        <td>\n                            <h4>40</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3 class='mb-0'>Full Body Massage</h3>\n                            <p>(60 min)</p>\n                        </td>\n                        <td>\n                            <h4>65</h4>\n                        </td>            \n                    </tr>          \n                </tbody>\n            </table>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.alabtn').click(function (e) {
    $('.output').hide().fadeIn().html("\n        <div class=\"thisoutput container-fluid\">\n                <table>\n                <thead>\n                    <tr>\n                        <th><h4>A La Carte</h4></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h3>Paraffin wax</h3>\n                        </td>\n                        <td>\n                            <h4>10</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>French Application</h3>\n                        </td>\n                        <td>\n                            <h4>10</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Add Gel Polish to Service</h3>\n                        </td>\n                        <td>\n                            <h4>5</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Gel Polish Removal Only</h3>\n                        </td>\n                        <td>\n                            <h4>12</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Gel Polish Removal with a Service</h3>\n                        </td>\n                        <td>\n                            <h4>7</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Dip Powder Removal Only</h3>\n                        </td>\n                        <td>\n                            <h4>15</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Polish Change</h3>\n                        </td>\n                        <td>\n                            <h4>12</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Nail Art Accent Nails</h3>\n                        </td>\n                        <td>\n                            <h4>2</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Nail art all ten nails</h3>\n                        </td>\n                        <td>\n                            <h4>15 & up</h4>\n                        </td>                 \n                    </tr>\n                </tbody>\n          </table>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
    $('.optional').hide();
    e.preventDefault();
  });
  $('.jrbtn').click(function (e) {
    $('.output').hide().fadeIn(200).html("\n        <div class=\"thisoutput row container-fluid jrout\">\n\n                <div class='col-sm-6'>\n                <table>\n                <thead>\n                    <tr>\n                        <th>\n                        <h4 class='pb-0'>Junior Services</h4>\n                        <h4>(14 & under)</h4>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h3>Manicure</h3>\n                        </td>\n                        <td>\n                            <h4>14</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Pedicure</h3>\n                        </td>\n                        <td>\n                            <h4>20</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Manicure/Pedicure</h3>\n                        </td>\n                        <td>\n                            <h4>30</h4>\n                        </td>                 \n                    </tr>\n                </tbody>\n        </table>\n            </div>\n\n                <div class='col-sm-6'>\n                <table>\n                <thead>\n                    <tr>\n                        <th>\n                        <h4 class='pb-0'>Junior Waxing Services</h4>\n                        <h4>(16 & under)</h4>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h3>Brow</h3>\n                        </td>\n                        <td>\n                            <h4>10</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Upper Lip</h3>\n                        </td>\n                        <td>\n                            <h4>5</h4>\n                        </td>            \n                    </tr>          \n                    <tr>\n                        <td>\n                            <h3>Underarm</h3>\n                        </td>\n                        <td>\n                            <h4>18</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Half Leg</h3>\n                        </td>\n                        <td>\n                            <h4>25</h4>\n                        </td>                 \n                    </tr>\n                    <tr>\n                        <td>\n                            <h3>Full Leg</h3>\n                        </td>\n                        <td>\n                            <h4>45</h4>\n                        </td>                 \n                    </tr>\n                </tbody>\n        </table>\n            </div>\n        </div>\n        <div class=\"book2 mt-4 pb-4\">\n        <a class=\"btn btn-light\" href=\"https://www.fresha.com/golden-image-esthetics-s61lxhoz/booking?menu=true\" target=\"_blank\" >Book Now</a>  \n        </div>\n        ");
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