$(document).ready(function() {
	var obj = $("#image").get(0);
	var $soundButton = $('.sound-button');
	var $fullscreenButton = $('.fullscreen-button');
	var i = 0;
	$("#image").click(nextImage);
	function nextImage() {
		if (i<7 && i!=0) {
			obj.style.backgroundImage = "url('background"+i+".gif')";
			i=i+1;
		} else {
			obj.style.backgroundImage = "url('background.gif')";
			i=1;
		}
	}
	$soundButton.click(playMute);
	function playMute() {
		var audio = $('audio')[0],
			$audio = $('audio');
		if($soundButton.hasClass('muted')) {
			audio.play();
			$audio.animate({volume: 1}, 3000);
		} else {
			$audio.animate({volume: 0}, 3000);
			setTimeout(function () {audio.pause()}, 3000);
		}
		$soundButton.toggleClass('muted');
		$soundButton.toggleClass('sound');
	}
	$fullscreenButton.click(toggleFullscreen);
	function toggleFullscreen() {
		if (screenfull.enabled) {
	        screenfull.toggle();
	        $fullscreenButton.toggleClass('fullscreen');
			$fullscreenButton.toggleClass('not-fullscreen');
	    }
	}
	particlesJS('particles-js', {
	  particles: {
	    color: '#666',
	    color_random: false,
	    shape: 'circle', // "circle", "edge" or "triangle"
	    opacity: {
	      opacity: 1,
	      anim: {
	        enable: true,
	        speed: 0.1,
	        opacity_min: 0,
	        sync: false
	      }
	    },
	    size: 2.5,
	    size_random: true,
	    nb: 100,
	    line_linked: {
	      enable_auto: true,
	      distance: 240,
	      color: '#f2f2f2',
	      opacity: 1,
	      width: 1,
	      condensed_mode: {
	        enable: true,
	        rotateX: 500,
	        rotateY: 600
	      }
	    },
	    anim: {
	      enable: true,
	      speed: 0.65
	    }
	  },
	  interactivity: {
	    enable: true,
	    mouse: {
	      distance: 250
	    },
	    detect_on: 'canvas', // "canvas" or "window"
	    mode: 'grab', // "grab" of false
	    line_linked: {
	      opacity: 1
	    },
	    events: {
	      onclick: {
	        enable: true,
	        mode: 'push', // "push" or "remove"
	        nb: 3
	      },
	      onresize: {
	        enable: true,
	        mode: 'out', // "out" or "bounce"
	        density_auto: true,
	        density_area: 1000 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
	      }
	    }
	  },
	  /* Retina Display Support */
	  retina_detect: true
	});

	var cursorHidden = false;
    var j;
    $(document).mousemove(function() {
        if (!cursorHidden) {
            cursorHidden = false;
            clearTimeout(j);
            $('html').css({cursor: 'default'});
            j = setTimeout(hideCursor, 1000);
        }
    });
	function hideCursor() {
	    $('html').css({cursor: 'none'});
	    cursorHidden = true;
	    setTimeout(function() {
	        cursorHidden = false;
	    }, 500);
	}
});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-36931614-2', 'auto');
ga('send', 'pageview');