// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require masonry/jquery.masonry

$(document).ready(function(){

	function randomSymbol(){
		var symbols = ['✖', '☂', '', '✔', '✌', '✏', '☀', '☼', '◵', '❖', '◆', '⎔', '⊕', '⧫', '⧄', '✜'];
		var randomNum = Math.floor(Math.random() * symbols.length);
		return symbols[randomNum]
	}
	randomSymbol();
	
	// 
	$('.home').empty().append(randomSymbol());

	$('.container').masonry({
		itemSelector: '.link',
		columnWidth: 300,
		gutterWidth: 50,
		isAnimated: true
	});


});
