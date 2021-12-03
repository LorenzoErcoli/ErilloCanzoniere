console.log("miao")

var body = document.body,
	    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
	                       html.clientHeight, html.scrollHeight, html.offsetHeight );


var scroll = true
var h = window.innerHeight;

function song_scroll(){

	start_scroll_down()


}

function start_scroll_down() { 
		  $('body,html').animate({scrollTop: (3000)}, 1000*250);
		  console.log()
		}

function scrollTop() { 
  var tempScrollTop = $(window).scrollTop();
  $('body,html').animate({scrollTop: (tempScrollTop)}, 0);
  console.log("miao")
}

var x = document.getElementById("simple_audio");

function playaudio(){
	x.play()
}