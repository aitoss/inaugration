//document.getElementById("starter").focus();
document.body.addEventListener('onload', focus());
document.addEventListener('keydown', detectSpaceKey);

function detectSpaceKey(event)
{
    if(event.keyCode == 13) {
		showTime();
	}
}

function showTime()
{
	var curtain = document.getElementById("curtain");
	curtain.className = "open";
	
	var scene = document.getElementById("scene");
	scene.className = "expand";
	
	var starter = document.getElementById("starter");
	starter.className = "fade-out";
	
	setTimeout(function() {
        starter.style.display = 'none';
	}, 2000);
	
	setTimeout(function() {
		window.open('https://aitoss.club', '_blank');
	window.open('https://anubhav.aitoss.club', '_blank');
   
 }, 8000);
}