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


/*
 *	Main class for warmup
 */
game.createClass('Warmup', {

	//chip: null,
	PlayerGoals: 0,
	AIGoals: 0,

	NoHomeCards: 60,
	NoAwayCards: 60,
	NoRefereeCards: 10,

	goal: false,	// this is used to end a gameturn loop once goaled

	init: function() {
		var field = new game.Sprite('field');
		game.scene.stage.addChild(field);
		//this.chip = new game.Sprite('chip-home')
		var HA = new game.HomeAway();
		var kickoff = new game.KickOff();
		var loadcards = new game.LoadCards();

		// init 2 players
		//var player 	= new game.Player();
		//var AI 		= new game.Player();

		//this.gameturn(kickoff, player, AI);
	},

	gameturn: function(KickOff, player, AI){	// a gameturn only keeps till one goal

		KickOff.kick(true);
		while(!goal){
			// struggled with this part
			// how should we deal with this part?

		}


	}，

	kickoff: function(){

	}


});


/*
 *	A player class will hold all the current infomation for this player
 */
game.createClass('Player', {

	currentScore: 0,

	cards: [],	// are we gonna create card classes to hold the values for use later?

	init: function(){
		// need to draw 2 Dffence card and 4 offence card randomly
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