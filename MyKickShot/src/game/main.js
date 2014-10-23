game.module(
    'game.main'
)
.require(
	'game.assets',
	'game.warmup',

	'engine.core',
	'engine.scene'
)
.body(function() {

game.createScene('Main', {
	init: function(){
		

		var warmup = new game.Warmup();

		//warmup.start();
// Add new asset to load queue
        
 
        // Init new loader
        this.addObject(warmup);
	}

});



//game.start();

});
