    function getRandomInt( min, max ) {
         return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
    
//  keyinit( key length );

	function keyinit(len) {
		var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
			chars = 5,
			segments = len,
			keyString = "";
			
		for( var i = 0; i < segments; i++ ) {
			var segment = "";
			
			for( var j = 0; j < chars; j++ ) {
			    var k = getRandomInt( 0, 35 );
				segment += tokens[ k ];
			}
			
			keyString += segment;
			
			if( i < ( segments - 1 ) ) {
				keyString += "-";
			}
		}
		
		return keyString;

	}
