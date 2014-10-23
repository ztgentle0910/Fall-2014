 game.module(
	'game.warmup'
)
.require(
	'engine.scene',
	'engine.core',

	'game.assets',
	'game.dice'
)
.body(function(){

game.createClass('Warmup', {

	//chip: null,
	PlayerGoals: 0,
	AIGoals: 0,

	NoHomeCards: 60,
	NoAwayCards: 60,
	NoRefereeCards: 10,

	

	init: function() {
		var field = new game.Sprite('field');
		game.scene.stage.addChild(field);
		//this.chip = new game.Sprite('chip-home')
		var HA = new game.HomeAway();
		var kickoff = new game.KickOff();
		var loadcards = new game.LoadCards();

		this.gameturn(kickoff);
	},

	gameturn: function(KickOff){	// a gameturn only keeps till one goal
		KickOff.kick(true);


	}


});


/* this class is to decide home or away at the beginning of the game */
game.createClass('HomeAway',{

	diceValue: 1,
	chip: null,
	rolling: false,
	timing: false, 

	playerHome: true,	// need a function to compare the simgle dice rolling 
						// and determing home or away

	init: function() {
		console.log('test HomeAway');
		var dice = new game.Sprite('dice1');
		dice.position.set(100,800);
		
		dice.anchor.set(0.5, 0.5);
		game.scene.stage.addChild(dice);
	},

	update: function(){
		if(this.rolling && !this.timing ){
			var self = this;
			this.timing = true;
			this.diceValue = ~~Math.randomBetween(1,6);
			this.dice.setTexture('dice' + this.diceValue);
			game.scene.addTimer(100, function() {
				self.timeing = false;
			});
		}
	},
	

	roll: function(){
		this.rolling = true;
	},

	stoproll: function(){
		this.rolling = false;
	}

	

	

});


/* 
 *	this class is for kick off 
 *	begnning of the game or each time goaled will call this class
 */
game.createClass('KickOff', {

	init: function() {	

		// load chip image to mid of the scene
		// then use other function roll dice to move the ball
	},

	kick: function(playerOffence){ // input which side is home to kick off
		console.log(playerOffence);
	}

	

});


/*
 *	class to load card pick view frame and buttons
 */
game.createClass('LoadCards', {

	init: function() {
		console.log('test loadCards');

		var usebutton 	= new game.Sprite('useButton', 100, 600).addTo(game.scene.stage);
		var tradebutton = new game.Sprite('tradeButton', 350, 600).addTo(game.scene.stage);
		var skipbutton 	= new game.Sprite('skipButton', 100, 700).addTo(game.scene.stage);
		var mainviewbutton = new game.Sprite('mainviewButton', 350, 700).addTo(game.scene.stage);

		// will add scale tween when mouseon later
		// and sprite.onclick
	}


});




});