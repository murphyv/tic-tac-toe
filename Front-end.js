$(function(){
	var player = "X";
	var move = 0;
	var solved = "false";
	
	$('#reset').click( function reset() {
		for(var i=0 ; i<9 ; i++)
			$('.square').eq(i).html("");
		player = "X";
		move = 0;
		solved = false;
		$('#end').addClass('hide');
	});
	
	$('.square').click( function() {
		if (($(this).html() != "X") && ($(this).html() != "O")){
			$(this).html(player);
			nextMove();
		}
	});
	
	function nextMove(){
		if(!checkStatus()){
			move++;
			player = move%2 == 0 ? "X" : "O";
			return player;
		}else{
			
		}
	}

	function checkStatus() {
		if(move == 8){
			solved = true;
			$('#end').removeClass('hide');
		}else{
			solved = false;
		}
		return solved;
	}
});


