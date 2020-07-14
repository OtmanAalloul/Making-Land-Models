
class Home extends Phaser.Scene {
	
	constructor() {
		super("Home");
	}
	
	preload(){

		//backgound music
		this.load.audio('music', ['assets/audio/music.mp3', 'assets/audio/music.mp3']);
		
		//island
		this.load.image('island', 'assets/images/island.png');

		//jungle
		this.load.image('jungle', 'assets/images/jungle.png');

		//more
		this.load.image('more', 'assets/images/more.png');

	}
	create() {
		
		// back
		this.add.image(354, 148, "back_1");
		
		// rocks
		this.add.image(398, 212, "rocks_1");
		
		// backgound
		this.add.image(399, 270, "bgHome");

		//backgound music
		var bg = this.sound.add('music');
		bg.play();
		bg.volume = 0.3;
		
		//add island button
		var island = this.add.sprite(540, 170, 'island').setInteractive();
		island.on('pointerdown', function (event) {
  		this.scene.start('Play_1');
		bg.destroy();
		}, this);

		//add jungle button
		var jungle = this.add.sprite(270, 170, 'jungle').setInteractive();
		jungle.on('pointerdown', function (event) {
  		this.scene.start('Play');
		bg.destroy();
		}, this);

		//add more button
		var more = this.add.sprite(710, 380, 'more').setInteractive();
		more.on('pointerdown', function (event) {
  		this.scene.start('About');
		bg.destroy();
		}, this);
	}
	
}

