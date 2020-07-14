
class Play_1 extends Phaser.Scene {
	
	constructor() {
		super("Play_1");
	}
	
	preload() {

		this.load.image('title1', 'assets/images/title1.png');
		this.load.image('home', 'assets/images/home.png');
		this.load.image('islandBg', 'assets/images/islandBg.png');
    	this.load.image('j1', 'assets/images/DragImages1/1.png');
    	this.load.image('j2', 'assets/images/TrueImages1/1.png');
		this.load.image('j3', 'assets/images/DragImages1/2.png');
    	this.load.image('j4', 'assets/images/TrueImages1/2.png');
		this.load.image('j5', 'assets/images/DragImages1/3.png');
    	this.load.image('j6', 'assets/images/TrueImages1/3.png');
		this.load.image('j7', 'assets/images/DragImages1/4.png');
    	this.load.image('j8', 'assets/images/TrueImages1/4.png');
		this.load.image('j9', 'assets/images/DragImages1/5.png');
    	this.load.image('j10', 'assets/images/TrueImages1/5.png');
		this.load.image('j11', 'assets/images/DragImages1/6.png');
    	this.load.image('j12', 'assets/images/TrueImages1/6.png');
		this.load.image('j13', 'assets/images/DragImages1/7.png');
    	this.load.image('j14', 'assets/images/TrueImages1/7.png');
		this.load.image('j15', 'assets/images/DragImages1/8.png');
    	this.load.image('j16', 'assets/images/TrueImages1/8.png');
		this.load.image('j17', 'assets/images/DragImages1/9.png');
    	this.load.image('j18', 'assets/images/TrueImages1/9.png');
		this.load.image('j19', 'assets/images/DragImages1/10.png');
    	this.load.image('j20', 'assets/images/TrueImages1/10.png');
		this.load.audio('placed', ['assets/audio/placed.mp3', 'assets/audio/placed.mp3']);
		this.load.audio('succes', ['assets/audio/music.mp3', 'assets/audio/music.mp3']);
		this.load.audio('music', ['assets/audio/music.mp3', 'assets/audio/music.mp3']);
	}

	create() {
		
		// sky
		this.add.image(121, 272, "back_1");
		
		// jungle
		this.add.image(400, 272, "islandBg");

		//add title
		var title1 = this.add.sprite(420, 40, 'title1');

		//add sound for correct answer
		var fx = this.sound.add('placed');
		fx.volume = 0.2;

		//backgound music
		var bg = this.sound.add('music');
		bg.play();
		bg.volume = 0.3;

		//succes music
		var succes = this.sound.add('succes');

		//add home button
		var playButton = this.add.sprite(30, 30, 'home').setInteractive();
		playButton.on('pointerdown', function (event) {
  		this.scene.start('Home');
		bg.destroy();
		succes.destroy();
		}, this);
		
		//add animals sounds

		//add drag images
		var j1 = this.add.sprite(700, 340, 'j1');
		var j2 = this.add.sprite(700, 90, 'j2').setInteractive();
		j2.visible = false;

		var j9 = this.add.sprite(590, 250, 'j9');
		var j10 = this.add.sprite(700, 90, 'j10').setInteractive();
		j10.visible = false;

		var j17 = this.add.sprite(720, 380, 'j17');
		var j18 = this.add.sprite(700, 90, 'j18').setInteractive();
		j18.visible = false;

		var j7 = this.add.sprite(180, 260, 'j7');
		var j8 = this.add.sprite(700, 90, 'j8').setInteractive();
		j8.visible = false;

		var j15 = this.add.sprite(580, 410, 'j15');
		var j16 = this.add.sprite(700, 90, 'j16').setInteractive();
		j16.visible = false;

		var j13 = this.add.sprite(400, 250, 'j13');
		var j14 = this.add.sprite(700, 90, 'j14').setInteractive();
		j14.visible = false;

		var j19 = this.add.sprite(100, 50, 'j19');
		var j20 = this.add.sprite(700, 90, 'j20').setInteractive();
		j20.visible = false;

		var j3 = this.add.sprite(500, 400, 'j3');
		var j4 = this.add.sprite(700, 90, 'j4').setInteractive();
		j4.visible = false;

		var j11 = this.add.sprite(670, 390, 'j11');
		var j12 = this.add.sprite(700, 90, 'j12').setInteractive();
		j12.visible = false;

		//add 3 image
		var j5 = this.add.sprite(480, 400, 'j5');
		var j6 = this.add.sprite(700, 90, 'j6').setInteractive();
		this.input.setDraggable(j6);
		j6.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j6.on('dragend', function (pointer) {
			if(this.x<540 && this.x>400 && this.y<460 && this.y>360){
				this.x = 480;
				this.y = 400;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j2.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 1 image
		this.input.setDraggable(j2);
		j2.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j2.on('dragend', function (pointer) {
			if(this.x<760 && this.x>650 && this.y<400 && this.y>290){
				this.x = 700;
				this.y = 340;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j10.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });
		
		//add 5 image
		this.input.setDraggable(j10);
		j10.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j10.on('dragend', function (pointer) {
			if(this.x<660 && this.x>520 && this.y<300 && this.y>200){
				this.x = 590;
				this.y = 250;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j18.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });


		//add 9 image
		this.input.setDraggable(j18);
		j18.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j18.on('dragend', function (pointer) {
			if(this.x<800 && this.x>680 && this.y<430 && this.y>320){
				this.x = 720;
				this.y = 380;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j8.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 4 image
		this.input.setDraggable(j8);
		j8.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j8.on('dragend', function (pointer) {
			if(this.x<240 && this.x>120 && this.y<310 && this.y>200){
				this.x = 180;
				this.y = 260;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j16.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 8 image
		this.input.setDraggable(j16);
		j16.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j16.on('dragend', function (pointer) {
			if(this.x<620 && this.x>520 && this.y<460 && this.y>360){
				this.x = 580;
				this.y = 410;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j14.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 7 image
		this.input.setDraggable(j14);
		j14.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j14.on('dragend', function (pointer) {
			if(this.x<450 && this.x>360 && this.y<300 && this.y>200){
				this.x = 400;
				this.y = 250;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j20.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 10 image
		this.input.setDraggable(j20);
		j20.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j20.on('dragend', function (pointer) {
			if(this.x<150 && this.x>10 && this.y<100 && this.y>1){
				this.x = 100;
				this.y = 50;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j4.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 2 image
		this.input.setDraggable(j4);
		j4.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j4.on('dragend', function (pointer) {
			if(this.x<550 && this.x>450 && this.y<450 && this.y>350){
				this.x = 500;
				this.y = 400;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				j12.visible = true;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 6 image
		this.input.setDraggable(j12);
		j12.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		j12.on('dragend', function (pointer) {
			if(this.x<720 && this.x> 610 && this.y<440 && this.y>330){
				this.x = 670;
				this.y = 390;	
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
			}  
			else{
				this.x = 700;
				this.y = 90;
			}
        });
	}
}

