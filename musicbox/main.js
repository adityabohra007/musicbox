$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	  margin:10,
	  autoWidth:false,
	  items:3,
	  autoWidth:true,
	  nav:true,
	  navText: ["<img src='dotted_prev_last.png'>","<img src='dotted_next_last.png'>"],
	  mouseDrag:false,
	  touchDrag:false,
  });
});


var audio;
var play=$("#play");
var pause=$("#pause");
var count=0;
//Hide The Pause Button At Page Load
pause.hide();
//When Hover List Content Add
$("#playlist li").hover(function(){
		$(this).css("border-left","red 2px solid");//Border-Left:red
		$(this).css("background-color","#73605B");//"hsl(200,90%,90%)");//Change To 
		$(this).css("font-size","1.05em");//Increase Font Size
	
},
//Hoverout
function(){	//Revert Them All Back
		$(this).css("border-left","red 1px solid");
		$(this).css("background-color","#D09683");
		$(this).css("font-size","1em");
});
var art=$("#playlist").attr("cover");
/*$("#audio-player").css("background-image","url("+art+") ");
$("#audio-player").css("background-repeat","no-repeat");
$("#audio-player").css("background-size","100% 100px");
$("#audio-player").css("opacity","1")
*/

console.log($("#playlist").attr("cover"));
initAudio($("#playlist li:first-child"));
var count_nexts=0;

//Manage Audio Player
function initAudio(elem){
	count=count+1;
	console.log(count+" :times");
	//Initialization 
	var albumart=elem.attr("cover");//AlbumArt to player
	var song=elem.attr('song');//Filename with extension
	var title=elem.text();//TitleName without Extension

	console.log(title+" initAudio-TitleName");//Checking--DEBUGGING
	console.log("Song "+String(song));//Checking--DEBUGGING

	//Add Title to Player
	$("span.title").text(title);
	
	//audio API
	audio=new Audio(song);//Initialization
	audio.controls=true;//Show controls;
	audio.volume=0.5;//Volume at Initialization
	
	audio.onended=function(){	
		console.log("Ended");	
		$("#next").trigger("click");
	};

	audio.ontimeupdate=function(){
		//console.log(audio.currentTime);
		var currentsec=parseInt(audio.currentTime%60);
		var currentmin=parseInt((audio.currentTime)/60)%60;
		console.log(currentmin+":"+currentsec);
	};
	
	//AudioPlayer Active Class
	$("#playlist li").removeClass('active');
	elem.addClass('active');
	//elem.css("background","pink");
	};

	

	//Trigger:CLICK play the song
	play.click(function(){
		$(this).hide();
		audio.play();
		pause.show();
		console.log(audio.duration);
		
	});
	//Trigger:CLICK pause the song
	pause.click(function(){
		$(this).hide();
		audio.pause();
		play.show();	

	});
	//Trigger:CLICK next track

	$("#next").click(function(elem){
		count_nexts=count_nexts+1;
		console.log("--next:"+count_nexts+" times--");		
		audio.pause();
		console.log("elem-next:"+String(elem));
		try{
			var next=$('li.active').next();
			if(next.length===0){
				console.log("ENd");
				initAudio($("#playlist li:first-child"));
						}
			else{
				console.log(next);
				initAudio(next);
				$("#play").trigger("click");		
			}
		}
		catch{
			console.log("prob",);
		}
			

	});
	//Trigger:CLICK prev track
	$("#prev").click(function(elem){		
		audio.pause();
		try{
		var prev=$('li.active').prev();
		console.log("Prev:"+prev);
		initAudio(prev);
		$("#play").trigger("click");}
		catch{
		console.log("prob",);
		}
			

	});
	//Trigger:CHANGE volume set
	$("input[type=range]").change(function(){
		var value=$("input[type=range]").val();
		audio.volume=value/10;
		console.log(value+"vol"+value/10);
	});
	$("#playlist li").click(function(){
		var song=$(this).attr("song");
		console.log(song);
		initAudio($(this))
		

	});
//	var changeOntrack=function(){}

