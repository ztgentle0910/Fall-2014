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

	init: function() {
		var field = new game.Sprite('field');
		game.scene.stage.addChild(field);
		//this.chip = new game.Sprite('chip-home')
		var HA = new game.HomeAway();
	}
});

game.createClass('HomeAway',{

	diceValue: 1,
	chip: null,
	rolling: false,
	timing: false, 

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
	

	show: function(){
		//game.scene.addTween(this.dice, {x: 100}, 500, { easing: game.Tween.Easing.Back.Out }).start();
	},

	roll: function(){
		this.rolling = true;
	},

	stoproll: function(){
		this.rolling = false;
	}

	

});



});