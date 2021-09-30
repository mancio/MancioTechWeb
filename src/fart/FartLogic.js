import $ from 'jquery';

let farts = {
	toot : 'fart1',
	ripper : 'fart2',
	plop : 'fart3',
	squit : 'fart4',
	raspberry : 'fart5',
	squat : 'fart6',
	tuppence : 'fart7',
	liftoff : 'fart8',
	trumpet : 'fart9',
	fizzler : 'fart10',
	windy : 'fart11',
	eine : 'fart12',
	fartception: 'fart13',
	fartpoint1: 'fart14'
};




/**
* This is the Fart constructor.
*
* @class FartLogic
* @constructor
* 
* @param {Object} options Default Sound, Loop and Volume 
*/
export function FartLogic(options) {
	this.default_sound = undefined;
	this.sound = this.default_sound;
	this.fart_player = null;
	this.old_player = false;
	this.options = this.fartxtend({
		default_sound : farts.raspberry,
		loop : false,
		volume : 50	// 0 - 100
	}, options);
	this.init();
}
FartLogic.preloaded = false;

/**
 * 
 * Mimic jQuery Extend. 			✓ 
 * Change name for Fart-based LOL. 	✓   
 * 
 */
FartLogic.prototype.fartxtend = function(options, defaults) {
    for(let key in defaults){
        if(defaults.hasOwnProperty(key)){
        	options[key] = defaults[key];
        }    	
    }   
    return options;
};

/**
* Init the player. Figure out if the old player should be loaded by checking if the audio element has the canPlayType() method 
*
* @method init
*/
FartLogic.prototype.init = function() {
	this.fart_player = document.createElement("audio");
	if ( typeof (this.fart_player.canPlayType) == 'undefined') {
		this.load_old_player();
	}
	this.preload();
};

/**
* If the browser is too old to load an AUDIO element, its probably ie7/8 
*
* @method load_old_player
*/
FartLogic.prototype.load_old_player = function() {
	document.body.innerHTML += '<div style="display:none;"><object id="contentPlayer" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" width="100" height="100"><param name="volume" value="100%" /><param name="windowlessVideo" value="true"><param name="AnimationatStart" value="0" /><param name="autostart" value="1" /></object></div>';
	this.fart_player = document.getElementById('contentPlayer');
	this.fart_old_player = true;
};

/**
* Play the sound via the browser. 
* If a valid $sound is passed, it will play, otherwise it will default to the defaut sound
*
* @method play
* @param {String} foo The name of the sound to play
* @param {String} foo A callback for once the sound has ended
*/
FartLogic.prototype.play = function(sound, callback) {
	var fart = (sound) ? (farts[sound]) ? farts[sound] : sound: this.options.default_sound;
	callback = callback || null;
	if (!this.fart_old_player) {
		var ext = (this.fart_player.canPlayType('audio/mp3')) ? '.mp3' : '.wav';
		this.fart_player.setAttribute('src', "/farts/" + fart + ext);
		this.fart_player.loop = this.options.loop;
		this.fart_player.volume = (this.options.volume / 100);
		this.fart_player.play();
		$(this.fart_player).on("ended", function() {
			if (callback) {
				callback();
				$(this.fart_player).off("ended");
			}
		});
	} else {
		this.fart_player.URL = "/farts/" + fart + '.mp3';
	}
};

/**
* Stop the sound from playing 
*
* @method stop
*/
FartLogic.prototype.stop = function() {
	this.fart_player.pause();
};

/**
* Remove the element from the DOM 
*
* @method remove
*/
FartLogic.prototype.remove = function() {
	this.fart_player.remove();
};

/**
* Play a random fart from the list 
*
* @method random
*/
FartLogic.prototype.random = function() {
	var keys = Object.keys(farts);
	var fart = keys[keys.length * Math.random() << 0];
	this.play(fart);
};

/**
* Try and preload the sounds. This was useful when the sound files where on a remote server
*
* @method preload
*/
FartLogic.prototype.preload = function() {
	var fart_player = this.fart_player;
	if (!this.fart_old_player && !FartLogic.preloaded) {
		for(let f in farts){
			var ext = (fart_player.canPlayType('audio/mp3')) ? '.mp3' : '.wav';
			fart_player.setAttribute('src', "/farts/" + farts[f] + ext);
			console.log('preload:',farts[f]);
		}
		FartLogic.preloaded = true;
	}
};
