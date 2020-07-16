
class Play extends Phaser.Scene {

	constructor() {
		super("Play");
	}

	preload() {

		this.load.image('title', 'assets/images/title.png');
		this.load.image('home', 'assets/images/home.png');
    	this.load.image('i1', 'assets/images/DragImages/1.png');
    	this.load.image('i2', 'assets/images/TrueImages/1.png');
		this.load.image('i3', 'assets/images/DragImages/2.png');
    	this.load.image('i4', 'assets/images/TrueImages/2.png');
		this.load.image('i5', 'assets/images/DragImages/3.png');
    	this.load.image('i6', 'assets/images/TrueImages/3.png');
		this.load.image('i7', 'assets/images/DragImages/4.png');
    	this.load.image('i8', 'assets/images/TrueImages/4.png');
		this.load.image('i9', 'assets/images/DragImages/5.png');
    	this.load.image('i10', 'assets/images/TrueImages/5.png');
		this.load.image('i11', 'assets/images/DragImages/6.png');
    	this.load.image('i12', 'assets/images/TrueImages/6.png');
		this.load.image('i13', 'assets/images/DragImages/7.png');
    	this.load.image('i14', 'assets/images/TrueImages/7.png');
		this.load.image('i15', 'assets/images/DragImages/8.png');
    	this.load.image('i16', 'assets/images/TrueImages/8.png');
		this.load.image('i17', 'assets/images/DragImages/9.png');
    	this.load.image('i18', 'assets/images/TrueImages/9.png');
		this.load.image('i19', 'assets/images/DragImages/10.png');
    	this.load.image('i20', 'assets/images/TrueImages/10.png');
		this.load.image('i21', 'assets/images/DragImages/11.png');
    	this.load.image('i22', 'assets/images/TrueImages/11.png');
		this.load.image('i23', 'assets/images/DragImages/12.png');
    	this.load.image('i24', 'assets/images/TrueImages/12.png');
		this.load.audio('placed', ['assets/audio/placed.mp3', 'assets/audio/placed.mp3']);
		this.load.audio('succes', ['assets/audio/win.mp3', 'assets/audio/win.mp3']);
		this.load.audio('music', ['assets/audio/music.mp3', 'assets/audio/music.mp3']);

        //Aswat

        this.load.audio('c1', ['assets/audio/3osfor.mp3', 'assets/audio/3osfor.mp3']);
        this.load.audio('c2', ['assets/audio/9ird.mp3', 'assets/audio/9ird.mp3']);
        this.load.audio('c3', ['assets/audio/assad.mp3', 'assets/audio/assad.mp3']);
        this.load.audio('c4', ['assets/audio/fil.mp3', 'assets/audio/fil.mp3']);
        this.load.audio('c5', ['assets/audio/hissan.mp3', 'assets/audio/hissan.mp3']);
        this.load.audio('c6', ['assets/audio/ma3iz.mp3', 'assets/audio/ma3iz.mp3']);
        this.load.audio('c7', ['assets/audio/namir.mp3', 'assets/audio/namir.mp3']);
        this.load.audio('c8', ['assets/audio/solohfat.mp3', 'assets/audio/solohfat.mp3']);
	}

	create() {

		// sky
		this.add.image(121, 272, "back_1");

		// mountains
		this.add.image(338, 97, "rocks_1");

		// waterFall
		this.add.image(289, 264, "waterFall");

		// jungle
		this.add.image(400, 272, "backgound");

		//add title
		var title = this.add.sprite(420, 70, 'title');

		//add sound for correct answer
		var fx = this.sound.add('placed');
		fx.volume = 0.2;

        //Aswat
        var c1 = this.sound.add('c1');
        var c2 = this.sound.add('c2');
        var c3 = this.sound.add('c3');
        var c4 = this.sound.add('c4');
        var c5 = this.sound.add('c5');
        var c6 = this.sound.add('c6');
        var c7 = this.sound.add('c7');
        var c8 = this.sound.add('c8');

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
		var i1 = this.add.sprite(700, 260, 'i1');
		var i2 = this.add.sprite(700, 90, 'i2').setInteractive();
		i2.visible = false;

		var i9 = this.add.sprite(740, 350, 'i9');
		var i10 = this.add.sprite(700, 90, 'i10').setInteractive();
		i10.visible = false;

		var i17 = this.add.sprite(220, 120, 'i17');
		var i18 = this.add.sprite(700, 90, 'i18').setInteractive();
		i18.visible = false;

		var i15 = this.add.sprite(300, 340, 'i15');
		var i16 = this.add.sprite(700, 90, 'i16').setInteractive();
		i16.visible = false;

		var i13 = this.add.sprite(540, 390, 'i13');
		var i14 = this.add.sprite(700, 90, 'i14').setInteractive();
		i14.visible = false;

		var i19 = this.add.sprite(200, 350, 'i19');
		var i20 = this.add.sprite(700, 90, 'i20').setInteractive();
		i20.visible = false;

		var i3 = this.add.sprite(100, 200, 'i3');
		var i4 = this.add.sprite(700, 90, 'i4').setInteractive();
		i4.visible = false;

		var i11 = this.add.sprite(70, 370, 'i11');
		var i12 = this.add.sprite(700, 90, 'i12').setInteractive();
		i12.visible = false;

		var i21 = this.add.sprite(400, 320, 'i21');
		var i22 = this.add.sprite(700, 90, 'i22').setInteractive();
		i22.visible = false;

		var i23 = this.add.sprite(470, 230, 'i23');
		var i24 = this.add.sprite(700, 90, 'i24').setInteractive();
		i24.visible = false;

		var i7 = this.add.sprite(600, 300, 'i7');
		var i8 = this.add.sprite(700, 90, 'i8').setInteractive();
		i8.visible = false;


		//add 3 image
		var i5 = this.add.sprite(100, 70, 'i5');
		var i6 = this.add.sprite(700, 90, 'i6').setInteractive();
		this.input.setDraggable(i6);
		i6.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i6.on('dragend', function (pointer) {
			if(this.x<170 && this.x>10 && this.y<170 && this.y>10){
				this.x = 100;
				this.y = 70;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i2.visible = true;
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 1 image
		this.input.setDraggable(i2);
		i2.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i2.on('dragend', function (pointer) {
			if(this.x<770 && this.x>650 && this.y<310 && this.y>200){
				this.x = 700;
				this.y = 260;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i10.visible = true;
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 5 image
		this.input.setDraggable(i10);
		i10.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i10.on('dragend', function (pointer) {
			if(this.x<800 && this.x>690 && this.y<400 && this.y>300){
				this.x = 740;
				this.y = 350;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i18.visible = true;
                c8.play();
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });


		//add 9 image
		this.input.setDraggable(i18);
		i18.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i18.on('dragend', function (pointer) {
			if(this.x<300 && this.x>150 && this.y<200 && this.y>70){
				this.x = 220;
				this.y = 120;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i16.visible = true;
                c1.play();
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 8 image
		this.input.setDraggable(i16);
		i16.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i16.on('dragend', function (pointer) {
			if(this.x<360 && this.x>250 && this.y<400 && this.y>280){
				this.x = 300;
				this.y = 340;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i14.visible = true;
                c3.play();
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 7 image
		this.input.setDraggable(i14);
		i14.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i14.on('dragend', function (pointer) {
			if(this.x<620 && this.x>500 && this.y<440 && this.y>320){
				this.x = 540;
				this.y = 390;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i20.visible = true;
                c4.play();
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 10 image
		this.input.setDraggable(i20);
		i20.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i20.on('dragend', function (pointer) {
			if(this.x<270 && this.x>130 && this.y<410 && this.y>300){
				this.x = 200;
				this.y = 350;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i4.visible = true;
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 2 image
		this.input.setDraggable(i4);
		i4.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i4.on('dragend', function (pointer) {
			if(this.x<160 && this.x>40 && this.y<260 && this.y>140){
				this.x = 100;
				this.y = 200;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i12.visible = true;
                c2.play();
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 6 image
		this.input.setDraggable(i12);
		i12.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i12.on('dragend', function (pointer) {
			if(this.x<150 && this.x>0 && this.y<420 && this.y>290){
				this.x = 70;
				this.y = 370;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i22.visible = true;
                c7.play();
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 11 image
		this.input.setDraggable(i22);
		i22.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i22.on('dragend', function (pointer) {
			if(this.x<450 && this.x>350 && this.y<400 && this.y>270){
				this.x = 400;
				this.y = 320;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
				i24.visible = true;
                c5.play();
			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

		//add 12 image
		this.input.setDraggable(i24);
		i24.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
		i24.on('dragend', function (pointer) {
			if(this.x<520 && this.x>400 && this.y<300 && this.y>180){
				this.x = 470;
				this.y = 230;
				fx.play();
				this.setInteractive(false);
				this.input.draggable = false;
        c6.play();
				i8.visible = true;

			}
			else{
				this.x = 700;
				this.y = 90;
			}
        });

				//add 4 image
				this.input.setDraggable(i8);
				i8.on('drag', function (pointer, dragX, dragY) {
								this.x = dragX;
								this.y = dragY;
						});
				i8.on('dragend', function (pointer) {
					if(this.x<670 && this.x>550 && this.y<370 && this.y>250){
						this.x = 600;
						this.y = 300;
						this.setInteractive(false);
						this.input.draggable = false;
						fx.play();
						bg.destroy();
						succes.play();
		        succes.volume = 1;
					}
					else{
						this.x = 700;
						this.y = 90;
					}
						});
	}
}
