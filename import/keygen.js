	function keygen() {
		var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
			chars = 5,
			segments = 5,
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
		
		return '$-'+keyString;

	}
