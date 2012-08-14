



 var	canvas=document.getElementById("mycanvas");
 var	ctx=canvas.getContext("2d");
 

	//rAf

window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function( callback ){
                window.setTimeout(callback, 1000/60 );
              };
    })();

	
	//main function
	document.addEventListener('keydown',checkKeyDown,false);
	document.addEventListener('keyup',checkKeyUp,false);
	
	

	function main(){
	
		

		loop();

	}

	function loop(){
		
		text1.drawText();
		requestAnimFrame(loop);
	}

	
	function clearctx(){
		ctx.clearRect(0,0,500,800);
	}


	$("#x-coor").val(50);
	$("#y-coor").val(30);


	function Text(){
		this.drawX=Number($("#x-coor").val());
		this.drawY=Number($("#y-coor").val());
		this.textValue=$("#textField").val();
		this.isUpkey=false;
		this.isDownkey=false;
		this.isRightkey=false;
		this.isLeftkey=false;
		this.isEnterKey=false;
	
	}








	Text.prototype.drawText=function(){
		clearctx();
		if(this.isUpkey){
			this.drawY-=2;
			$("#y-coor").val(this.drawY);
		
	}
		if(this.isDownkey){
			this.drawY+=2;
			$("#y-coor").val(this.drawY);
		}
		if(this.isRightkey){
			this.drawX+=2;
			$("#x-coor").val(this.drawX);
		}
		if(this.isLeftkey){
			this.drawX-=2;
			$("#x-coor").val(this.drawX);
		}

		

		if (this.isEnterKey){
			
			
			ctx.fillText($("#textField").val(),$("#x-coor").val(),$("#y-coor").val());

		}
		

	}






	$(document).ready(function(){
		$("#textField").hide();
		$("#myButton").click(function(){
		$("#myButton").hide();
		$("#textField").fadeIn('slow');
		});
		//x and y coordination

		
		});

	
	

		function checkKeyDown(e){
			var keyID=e.keyCode || e.keywich;
			if(keyID == 38){// 38 up
				
				text1.isUpkey=true;
				
				e.preventDefault();
			}
			
			if(keyID===13){
				clearctx();
				text1.isEnterKey=true;
				e.preventDefault();
			
			}
			
			if(keyID == 39){// 39 right,
				text1.isRightkey=true;
				e.preventDefault();
			}
			if(keyID == 40){// down , s
				text1.isDownkey=true;
				e.preventDefault();
			}
			if(keyID == 37 ){// left ,A
				text1.isLeftkey=true;
				e.preventDefault();
			}

		}


		function checkKeyUp(e){
			var keyID=e.keyCode || e.keywich;

			if(keyID == 38 ){// 38 up ,87 w
				text1.isUpkey=false;
				e.preventDefault();
				
			}
			if(keyID == 39){// 39 right,68 D

				text1.isRightkey=false;
				e.preventDefault();
			}
			if(keyID == 40 ){// down , s
				text1.isDownkey=false;
				e.preventDefault();
			}
			if(keyID == 37 ){// left ,A
				text1.isLeftkey=false;
				e.preventDefault();
			}
			
		}

		

		var text1;
		text1 =new Text();
	 var isChanged=false; 
	 var isEnterKey=false;
 	// text style
	ctx.font = "16px impact";
	ctx.fillStyle = '#996600';
	ctx.textAlign = 'center';
	
	 $("document").ready(function(){
	  	main();
	})


	


