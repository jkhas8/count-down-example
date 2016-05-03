// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery.countdown/dist/jquery.countdown

$(document).ready(function() {
  var endDate = "2016/5/7 18:00:00";
  $('.countdown.styled').countdown(endDate).on('update.countdown', function(event) {
    var format = '%H:%M:%S';
    if(event.offset.days > 0) {
      format = '%-d day%!d ' + format;
    }
    if(event.offset.weeks > 0) {
      format = '%-w week%!w ' + format;
    }
    $(this).html(event.strftime(format));
  }).on('finish.countdown', function(event) {
    $(this).html('').parent().addClass('disabled');
  })
});
