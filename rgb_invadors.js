//코드 참고 : http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/
/**
 * Copyright (C) 2012 Steven Lambert
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */




/**
 * 게임을 초기화하고 실행하는 부분
 */
var game = new Game();
var initComplete = false;

function init() {
	if(game.init()){
		initComplete = true;
		document.getElementById('ready_start').innerHTML = "Play Start!";
	} else {
		document.getElementById('ready_start').innerHTML = "Please Wait...";
	}
}


/**
 * 게임에서 사용할 이미지들을 정의하고 생성함. 
 * 본 작업은 처음 시작시 딱 한번만
 */
var imageRepository = new function() {
	// Define images
	this.background = new Image();
	this.spaceship01 = new Image();
	this.spaceship02 = new Image();
	this.bullet_R = new Image();
	this.bullet_G = new Image();
	this.bullet_B = new Image();
	this.bullet_RGB = new Image();
	this.item01_01 = new Image();
	this.item01_02 = new Image();
	this.item02 = new Image();
	this.enemy01_R_01 = new Image();
	this.enemy01_R_02 = new Image();
	this.enemy01_G_01 = new Image();
	this.enemy01_G_02 = new Image();
	this.enemy01_B_01 = new Image();
	this.enemy01_B_02 = new Image();
	this.enemy01_RG_01 = new Image();
	this.enemy01_RG_02 = new Image();
	this.enemy01_RB_01 = new Image();
	this.enemy01_RB_02 = new Image();
	this.enemy01_GB_01 = new Image();
	this.enemy01_GB_02 = new Image();
	this.enemy01_RGB_01 = new Image();
	this.enemy01_RGB_02 = new Image();
	this.enemy02_R_01 = new Image();
	this.enemy02_R_02 = new Image();
	this.enemy02_G_01 = new Image();
	this.enemy02_G_02 = new Image();
	this.enemy02_B_01 = new Image();
	this.enemy02_B_02 = new Image();
	this.enemy02_RG_01 = new Image();
	this.enemy02_RG_02 = new Image();
	this.enemy02_RB_01 = new Image();
	this.enemy02_RB_02 = new Image();
	this.enemy02_GB_01 = new Image();
	this.enemy02_GB_02 = new Image();
	this.enemy02_RGB_01 = new Image();
	this.enemy02_RGB_02 = new Image();
	this.enemy03_R_01 = new Image();
	this.enemy03_R_02 = new Image();
	this.enemy03_G_01 = new Image();
	this.enemy03_G_02 = new Image();
	this.enemy03_B_01 = new Image();
	this.enemy03_B_02 = new Image();
	this.enemy03_RG_01 = new Image();
	this.enemy03_RG_02 = new Image();
	this.enemy03_RB_01 = new Image();
	this.enemy03_RB_02 = new Image();
	this.enemy03_GB_01 = new Image();
	this.enemy03_GB_02 = new Image();
	this.enemy03_RGB_01 = new Image();
	this.enemy03_RGB_02 = new Image();
	this.enemy04_R_01 = new Image();
	this.enemy04_R_02 = new Image();
	this.enemy04_G_01 = new Image();
	this.enemy04_G_02 = new Image();
	this.enemy04_B_01 = new Image();
	this.enemy04_B_02 = new Image();
	this.enemy04_RG_01 = new Image();
	this.enemy04_RG_02 = new Image();
	this.enemy04_RB_01 = new Image();
	this.enemy04_RB_02 = new Image();
	this.enemy04_GB_01 = new Image();
	this.enemy04_GB_02 = new Image();
	this.enemy04_RGB_01 = new Image();
	this.enemy04_RGB_02 = new Image();
	this.enemyBullet = new Image();

	// 게임 시작전 모든 이미지를 로딩해야함
	var numImages = 67; //로딩할 이미지 src 수
	var numLoaded = 0;
	function imageLoaded() {
		numLoaded++;
		if (numLoaded === numImages) {
			window.init();
		}
	}
	this.background.onload = function() { imageLoaded(); }
	this.spaceship01.onload = function() { imageLoaded(); }
	this.spaceship02.onload = function() { imageLoaded(); }
	this.bullet_R.onload = function() { imageLoaded(); }
	this.bullet_G.onload = function() { imageLoaded(); }
	this.bullet_B.onload = function() { imageLoaded(); }
	this.bullet_RGB.onload = function() { imageLoaded(); }
	this.item01_01.onload = function() { imageLoaded(); }
	this.item01_02.onload = function() { imageLoaded(); }
	this.item02.onload = function() { imageLoaded(); }
	this.enemy01_R_01.onload = function() { imageLoaded(); }
	this.enemy01_R_02.onload = function() { imageLoaded(); }
	this.enemy01_G_01.onload = function() { imageLoaded(); }
	this.enemy01_G_02.onload = function() { imageLoaded(); }
	this.enemy01_B_01.onload = function() { imageLoaded(); }
	this.enemy01_B_02.onload = function() { imageLoaded(); }
	this.enemy01_RG_01.onload = function() { imageLoaded(); }
	this.enemy01_RG_02.onload = function() { imageLoaded(); }
	this.enemy01_RB_01.onload = function() { imageLoaded(); }
	this.enemy01_RB_02.onload = function() { imageLoaded(); }
	this.enemy01_GB_01.onload = function() { imageLoaded(); }
	this.enemy01_GB_02.onload = function() { imageLoaded(); }
	this.enemy01_RGB_01.onload = function() { imageLoaded(); }
	this.enemy01_RGB_02.onload = function() { imageLoaded(); }
	this.enemy02_R_01.onload = function() { imageLoaded(); }
	this.enemy02_R_02.onload = function() { imageLoaded(); }
	this.enemy02_G_01.onload = function() { imageLoaded(); }
	this.enemy02_G_02.onload = function() { imageLoaded(); }
	this.enemy02_B_01.onload = function() { imageLoaded(); }
	this.enemy02_B_02.onload = function() { imageLoaded(); }
	this.enemy02_RG_01.onload = function() { imageLoaded(); }
	this.enemy02_RG_02.onload = function() { imageLoaded(); }
	this.enemy02_RB_01.onload = function() { imageLoaded(); }
	this.enemy02_RB_02.onload = function() { imageLoaded(); }
	this.enemy02_GB_01.onload = function() { imageLoaded(); }
	this.enemy02_GB_02.onload = function() { imageLoaded(); }
	this.enemy02_RGB_01.onload = function() { imageLoaded(); }
	this.enemy02_RGB_02.onload = function() { imageLoaded(); }
	this.enemy03_R_01.onload = function() { imageLoaded(); }
	this.enemy03_R_02.onload = function() { imageLoaded(); }
	this.enemy03_G_01.onload = function() { imageLoaded(); }
	this.enemy03_G_02.onload = function() { imageLoaded(); }
	this.enemy03_B_01.onload = function() { imageLoaded(); }
	this.enemy03_B_02.onload = function() { imageLoaded(); }
	this.enemy03_RG_01.onload = function() { imageLoaded(); }
	this.enemy03_RG_02.onload = function() { imageLoaded(); }
	this.enemy03_RB_01.onload = function() { imageLoaded(); }
	this.enemy03_RB_02.onload = function() { imageLoaded(); }
	this.enemy03_GB_01.onload = function() { imageLoaded(); }
	this.enemy03_GB_02.onload = function() { imageLoaded(); }
	this.enemy03_RGB_01.onload = function() { imageLoaded(); }
	this.enemy03_RGB_02.onload = function() { imageLoaded(); }
	this.enemy04_R_01.onload = function() { imageLoaded(); }
	this.enemy04_R_02.onload = function() { imageLoaded(); }
	this.enemy04_G_01.onload = function() { imageLoaded(); }
	this.enemy04_G_02.onload = function() { imageLoaded(); }
	this.enemy04_B_01.onload = function() { imageLoaded(); }
	this.enemy04_B_02.onload = function() { imageLoaded(); }
	this.enemy04_RG_01.onload = function() { imageLoaded(); }
	this.enemy04_RG_02.onload = function() { imageLoaded(); }
	this.enemy04_RB_01.onload = function() { imageLoaded(); }
	this.enemy04_RB_02.onload = function() { imageLoaded(); }
	this.enemy04_GB_01.onload = function() { imageLoaded(); }
	this.enemy04_GB_02.onload = function() { imageLoaded(); }
	this.enemy04_RGB_01.onload = function() { imageLoaded(); }
	this.enemy04_RGB_02.onload = function() { imageLoaded(); }
	this.enemyBullet.onload = function() { imageLoaded(); }
	
	// Set images src
	this.background.src = "imgs/bg/bg_01.png";
	// 플레이어 이미지 src
	this.spaceship01.src = "imgs/player/player_01.png";
	this.spaceship02.src = "imgs/player/player_02.png"
	// 플레이어 bullet 이미지 src
	this.bullet_R.src = "imgs/bullet/bullet_R.png";
	this.bullet_G.src = "imgs/bullet/bullet_G.png";
	this.bullet_B.src = "imgs/bullet/bullet_B.png";
	this.bullet_RGB.src = "imgs/bullet/bullet_RGB.png";
	// item 이미지 src
	this.item01_01.src = "imgs/item/item01_01.png";
	this.item01_02.src = "imgs/item/item01_02.png";
	this.item02.src = "imgs/item/item02.png";
	// enemy01 이미지 src 
	this.enemy01_R_01.src = "imgs/enemy/enemy01_R_01.png";
	this.enemy01_R_02.src = "imgs/enemy/enemy01_R_02.png";
	this.enemy01_G_01.src = "imgs/enemy/enemy01_G_01.png";
	this.enemy01_G_02.src = "imgs/enemy/enemy01_G_02.png";
	this.enemy01_B_01.src = "imgs/enemy/enemy01_B_01.png";
	this.enemy01_B_02.src = "imgs/enemy/enemy01_B_02.png";
	this.enemy01_RG_01.src = "imgs/enemy/enemy01_RG_01.png";
	this.enemy01_RG_02.src = "imgs/enemy/enemy01_RG_02.png";
	this.enemy01_RB_01.src = "imgs/enemy/enemy01_RB_01.png";
	this.enemy01_RB_02.src = "imgs/enemy/enemy01_RB_02.png";
	this.enemy01_GB_01.src = "imgs/enemy/enemy01_GB_01.png";
	this.enemy01_GB_02.src = "imgs/enemy/enemy01_GB_02.png";
	this.enemy01_RGB_01.src = "imgs/enemy/enemy01_RGB_01.png";
	this.enemy01_RGB_02.src = "imgs/enemy/enemy01_RGB_02.png";
	// enemy02 이미지 src 
	this.enemy02_R_01.src = "imgs/enemy/enemy02_R_01.png";
	this.enemy02_R_02.src = "imgs/enemy/enemy02_R_02.png";
	this.enemy02_G_01.src = "imgs/enemy/enemy02_G_01.png";
	this.enemy02_G_02.src = "imgs/enemy/enemy02_G_02.png";
	this.enemy02_B_01.src = "imgs/enemy/enemy02_B_01.png";
	this.enemy02_B_02.src = "imgs/enemy/enemy02_B_02.png";
	this.enemy02_RG_01.src = "imgs/enemy/enemy02_RG_01.png";
	this.enemy02_RG_02.src = "imgs/enemy/enemy02_RG_02.png";
	this.enemy02_RB_01.src = "imgs/enemy/enemy02_RB_01.png";
	this.enemy02_RB_02.src = "imgs/enemy/enemy02_RB_02.png";
	this.enemy02_GB_01.src = "imgs/enemy/enemy02_GB_01.png";
	this.enemy02_GB_02.src = "imgs/enemy/enemy02_GB_02.png";
	this.enemy02_RGB_01.src = "imgs/enemy/enemy02_RGB_01.png";
	this.enemy02_RGB_02.src = "imgs/enemy/enemy02_RGB_02.png";
	// enemy03 이미지 src 
	this.enemy03_R_01.src = "imgs/enemy/enemy03_R_01.png";
	this.enemy03_R_02.src = "imgs/enemy/enemy03_R_02.png";
	this.enemy03_G_01.src = "imgs/enemy/enemy03_G_01.png";
	this.enemy03_G_02.src = "imgs/enemy/enemy03_G_02.png";
	this.enemy03_B_01.src = "imgs/enemy/enemy03_B_01.png";
	this.enemy03_B_02.src = "imgs/enemy/enemy03_B_02.png";
	this.enemy03_RG_01.src = "imgs/enemy/enemy03_RG_01.png";
	this.enemy03_RG_02.src = "imgs/enemy/enemy03_RG_02.png";
	this.enemy03_RB_01.src = "imgs/enemy/enemy03_RB_01.png";
	this.enemy03_RB_02.src = "imgs/enemy/enemy03_RB_02.png";
	this.enemy03_GB_01.src = "imgs/enemy/enemy03_GB_01.png";
	this.enemy03_GB_02.src = "imgs/enemy/enemy03_GB_02.png";
	this.enemy03_RGB_01.src = "imgs/enemy/enemy03_RGB_01.png";
	this.enemy03_RGB_02.src = "imgs/enemy/enemy03_RGB_02.png";
	// enemy04 이미지 src 
	this.enemy04_R_01.src = "imgs/enemy/enemy04_R_01.png";
	this.enemy04_R_02.src = "imgs/enemy/enemy04_R_02.png";
	this.enemy04_G_01.src = "imgs/enemy/enemy04_G_01.png";
	this.enemy04_G_02.src = "imgs/enemy/enemy04_G_02.png";
	this.enemy04_B_01.src = "imgs/enemy/enemy04_B_01.png";
	this.enemy04_B_02.src = "imgs/enemy/enemy04_B_02.png";
	this.enemy04_RG_01.src = "imgs/enemy/enemy04_RG_01.png";
	this.enemy04_RG_02.src = "imgs/enemy/enemy04_RG_02.png";
	this.enemy04_RB_01.src = "imgs/enemy/enemy04_RB_01.png";
	this.enemy04_RB_02.src = "imgs/enemy/enemy04_RB_02.png";
	this.enemy04_GB_01.src = "imgs/enemy/enemy04_GB_01.png";
	this.enemy04_GB_02.src = "imgs/enemy/enemy04_GB_02.png";
	this.enemy04_RGB_01.src = "imgs/enemy/enemy04_RGB_01.png";
	this.enemy04_RGB_02.src = "imgs/enemy/enemy04_RGB_02.png";
	// enemyBullet 이미지 src 
	this.enemyBullet.src = "imgs/bullet/bullet_enemy.png";
}


/**
 * Creates the Drawable object which will be the base class for
 * all drawable objects in the game. Sets up defualt variables
 * that all child objects will inherit, as well as the defualt
 * functions. 
 */
 var imgState = 0;	//애니메이션 재생 용 이미지 상태 변수
 var timer;			//setInterval 저장 변수
 var imgTimer = 0;	//imgState 제어용 타이머 변수
 
function Drawable() {
	this.init = function(x, y, width, height) {
		// 기본 속성
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	this.speed = 0;
	this.canvasWidth = 0;
	this.canvasHeight = 0;
	this.collidableWith = "";	//충돌체 계산을 위한 속성 정의. 해당 변수는 충돌 처리 될 목표 객체 속성(탄환의 경우 적 객체)
	this.isColliding = false;
	this.type = "";	//객체의 속성. 충돌한 객체에 따른 이벤트 처리를 위한 값
	
	// child object에서 사용 할 abstract function을 정의
	this.draw = function() {
	};
	this.move = function() {
	};
	this.isCollidableWith = function(object) {
		return (this.collidableWith === object.type);
	};
}


/**
 * 배경 객체를 Drawable의 child object로 생성함
 * 생성한 배경 객체는 background canvas에 그려지고 아래로 조금씩 이동하며 그려진다.
 * 배경 객체의 y축 위치가 background canvas를 벗어나게 되면 다시 처음 위치로 이미지를 이동시켜
 * 반복 출력한다.
 */
function Background() {
	this.speed = 2; //배경 이미지의 속도를 재정의
	
	// abstract function 구현
	this.draw = function() {
		// 배경 이미지를 아래로 이동시킴
		this.y += this.speed;
		this.context.drawImage(imageRepository.background, this.x, this.y);
		
		// 또 다른 배경 이미지를 바로 위에서 이동한 배경 이미지의 경계 부분에 그려줌
		this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);

		// 이동하던 이미지가 canvas를 벗어날 경우 위치를 다시 리셋 시킴
		if (this.y >= this.canvasHeight)
			this.y = 0;

	};
}
// Background는 Drawable을 상속
Background.prototype = new Drawable();


/**
 * 플레이어와 적 객체가 사용하는 탄환 객체
 * 탄환 객체는 main cavas에 그려진다.
 * zIndex가 main이 더 위에 위치하므로 탄환은 background 위에 그려진다.
 */
function Bullet(object) {	
	this.alive = false; // 사용 중인 bullet 객체는 true로 셋팅 된다.
	this.color;			// 탄환의 color 값. 이 값에 따라 플레이어의 탄환 색이 바뀐다.
	var self = object;	// 플레이어와 적, 어떤 object의 탄환인지 구분하기 위한 변수.
	/*
	 * bullet의 value를 설정 
	 */
	this.spawn = function(x, y, speed, color) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.color = color;
		this.alive = true;
	};

	/*
	 * 함수 실행시 기존에 있던 이미지를 지우고, 입력받은 값 만큼 이동한
	 * 좌표에서 새로운 이미지를 다시 그려준다.
	 * 이와 같은 방법으로 객체가 이동하는 듯한 연출을 보여줌
	 * 본 함수가 true를 리턴하면, 표시 가능한 화면 범위를 벗어났다는 의미로
	 * 판단하여 pool 배열 에서 clear 된다. 
	 * false라면 영역을 벗어날때까지 계속해서 이동시키며 그려나간다.
	 */
	this.draw = function() {
		this.context.clearRect(this.x, this.y, this.width, this.height);	//이동하기 전의 이미지를 지움
		this.y -= this.speed;	//y축의 이동거리 갱신
		
		if (this.isColliding) {	//충돌 여부 검사
			return true;
		}
		else if (self === "playerBullet" && this.y <= 0 - this.height) {	//플레이어가 쏜 탄환이 캔버스의 범위를 벗어났을 경우
			return true;
		}
		else if (self === "enemyBullet" && this.y >= this.canvasHeight) {	//적이 쏜 탄환이 캔버스의 범위를 벗어났을 경우
			return true;
		}
		else {
			if (self === "playerBullet") {	//플레이어의 탄환 이미지 출력 처리
				if(this.color == 'R')		//color를 비교하여 해당 color에 맞는 탄환의 이미지로 다시 그려준다
					this.context.drawImage(imageRepository.bullet_R, this.x, this.y);
				else if(this.color == 'G')
					this.context.drawImage(imageRepository.bullet_G, this.x, this.y);
				else if(this.color == 'B')
					this.context.drawImage(imageRepository.bullet_B, this.x, this.y);
				else if(this.color == 'RGB')
					this.context.drawImage(imageRepository.bullet_RGB, this.x, this.y);
			}
			else if (self === "enemyBullet") {	//적의 탄환 이미지 출력 처리
				this.context.drawImage(imageRepository.enemyBullet, this.x, this.y);
			}
			
			return false;
		}
	};
	
	/*
	 * bullet의 value를 리셋
	 */
	this.clear = function() {
		this.x = 0;
		this.y = 0;
		this.speed = 0;
		this.alive = false;
		this.isColliding = false;
	};
}
Bullet.prototype = new Drawable();

/**
 * 쿼드 트리
 * 영역을 아래와 같이 4영역으로 나누어 가며 탐색을 하는 트리
 * 충돌 판정을 위해서 객체가 위치한 곳을 탐색하는데에 쓰인다.
 *     |
 *  1  |  0
 * ----+----
 *  2  |  3
 *     |
 */
function QuadTree(boundBox, lvl) {
	var maxObjects = 10;	// 화면을 쪼갤 수 최대 횟수를 제한
	this.bounds = boundBox || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};	// 쿼드 트리가 갖는 화면의 영역. 입력 객체가 없다면 위와 같이 초기화
	var objects = [];	// 쿼드 트리를 의미. 반환해야할 객체들이 담긴다.
	this.nodes = [];	// 객체들을 저장할 객체 노드
	var level = lvl || 0;	//lvl을 입력 받았으면 lvl을 level로, 아니라면 0로 초기화
	var maxLevels = 5;	//level의 최대 제한

	/*
	 * 쿼드 트리와 객체 노드를 모두 초기화
	 */
	this.clear = function() {
		objects = [];

		for (var i = 0; i < this.nodes.length; i++) {
			this.nodes[i].clear();
		}

		this.nodes = [];
	};

	/*
	 * 쿼드 트리의 모든 object를 가져와서 반환
	 */
	this.getAllObjects = function(returnedObjects) {
		for (var i = 0; i < this.nodes.length; i++) {
			this.nodes[i].getAllObjects(returnedObjects);
		}

		for (var i = 0, len = objects.length; i < len; i++) {
			returnedObjects.push(objects[i]);
		}

		return returnedObjects;
	};

	/*
	 * 매개변수로 받은 obj와 충돌 가능성이 있는 모든 객체들을
	 * returnedObjects에 넣어 리턴함
	 */
	this.findObjects = function(returnedObjects, obj) {
		if (typeof obj === "undefined") {
			console.log("UNDEFINED OBJECT");
			return;
		}

		var index = this.getIndex(obj);
		if (index != -1 && this.nodes.length) {
			this.nodes[index].findObjects(returnedObjects, obj);
		}

		for (var i = 0, len = objects.length; i < len; i++) {
			returnedObjects.push(objects[i]);
		}

		return returnedObjects;
	};

	/*
	 * 매개변수로 받은 obj를 쿼드 트리에 넣는다.
	 * 만약 트리의 용량을 초과하면, 트리를 쪼갠 뒤
	 * 모든 객체들을 각각의 노드에 더해준다.
	 */
	this.insert = function(obj) {
		if (typeof obj === "undefined") {
			return;
		}

		if (obj instanceof Array) {
			for (var i = 0, len = obj.length; i < len; i++) {
				this.insert(obj[i]);
			}

			return;
		}

		if (this.nodes.length) {
			var index = this.getIndex(obj);
			// 서브 노드에 객체 한개만 들어갈 수 있을 때 추가 
			if (index != -1) {
				this.nodes[index].insert(obj);

				return;
			}
		}

		objects.push(obj);

		// split에 제한을 두어, 화면이 재귀적으로 무한히 split 되는 것을 방지
		if (objects.length > maxObjects && level < maxLevels) {
			if (this.nodes[0] == null) {
				this.split();
			}

			var i = 0;
			while (i < objects.length) {

				var index = this.getIndex(objects[i]);
				if (index != -1) {
					this.nodes[index].insert((objects.splice(i,1))[0]);
				}
				else {
					i++;
				}
			}
		}
	};

	/*
	 * 객체가 속한 노드를 결정.
	 * -1은 객체가 노드에 완벽하게 일치하지 않음을 의미하며,
	 * 현재 노드의 일부이다.
	 */
	this.getIndex = function(obj) {

		var index = -1;
		var verticalMidpoint = this.bounds.x + this.bounds.width / 2;
		var horizontalMidpoint = this.bounds.y + this.bounds.height / 2;

		// 객체가 위쪽 사분면에 위치
		var topQuadrant = (obj.y < horizontalMidpoint && obj.y + obj.height < horizontalMidpoint);
		// 객체가 아래쪽 사분면에 위치
		var bottomQuadrant = (obj.y > horizontalMidpoint);

		// 객체가 왼쪽 사분면에 위치(좌상, 좌하)
		if (obj.x < verticalMidpoint &&
				obj.x + obj.width < verticalMidpoint) {
			if (topQuadrant) {
				index = 1;
			}
			else if (bottomQuadrant) {
				index = 2;
			}
		}
		// 객체가 오른쪽 사분면에 위치(우상, 우하)
		else if (obj.x > verticalMidpoint) {
			if (topQuadrant) {
				index = 0;
			}
			else if (bottomQuadrant) {
				index = 3;
			}
		}

		return index;
	};

	/*
	 * 자신을 4개의 영역으로 쪼개어서 자기자신을 재귀적으로 탐색
	 */
	this.split = function() {
		var subWidth = (this.bounds.width / 2) | 0;
		var subHeight = (this.bounds.height / 2) | 0;

		this.nodes[0] = new QuadTree({
			x: this.bounds.x + subWidth,
			y: this.bounds.y,
			width: subWidth,
			height: subHeight
		}, level+1);
		this.nodes[1] = new QuadTree({
			x: this.bounds.x,
			y: this.bounds.y,
			width: subWidth,
			height: subHeight
		}, level+1);
		this.nodes[2] = new QuadTree({
			x: this.bounds.x,
			y: this.bounds.y + subHeight,
			width: subWidth,
			height: subHeight
		}, level+1);
		this.nodes[3] = new QuadTree({
			x: this.bounds.x + subWidth,
			y: this.bounds.y + subHeight,
			width: subWidth,
			height: subHeight
		}, level+1);
	};
}


/**
 * 탄환 객체나 적 객체들을 보관해 두는 함수
 * garbage collection에 의해 관리 되는 것을 예방함
 * Pool은 처음에 받은 사이즈 만큼의 객체를 보관하는 배열을 가지게 된다.
 * init에서 입력받은 object의 값에 따라서
 * 플레이어의 탄환, 적 객체들, 적 객체의 탄환들을 생성하여 pool 배열에 저장한다.
 * 이후 get 함수들로 pool 배열에서 pop을 실행하여 화면에 출력하기 위한 객체로서 사용된다.
 */
function Pool(maxSize) {
	var size = maxSize; // 배열이 보관 할 객체의 최대 수.
	var pool = [];		// 객체를 보관 할 배열
	
	this.getPool = function() {
		var obj = [];
		for (var i = 0; i < size; i++) {
			if (pool[i].alive) {
				obj.push(pool[i]);
			}
		}
		return obj;
	}	//객체 배열에 alive 상태인 pool들을 넣어서 반환. 쿼드 트리에서의 충돌체 계산에 사용
	
	/*
	 * 주어진 object에 해당하는 객체를 생성
	 */
	this.init = function(object) {
		if (object == "playerBullet") {
			for (var i = 0; i < size; i++) {
				// bullet 객체 초기화 (플레이어의 bullet)
				var bullet = new Bullet("playerBullet");
				bullet.init(0,0, imageRepository.bullet_R.width, imageRepository.bullet_R.height);
				bullet.collidableWith = "enemy";	//탄환 객체는 적 탄환과 플레이어의 탄환이 같은 객체를 공유
				bullet.type = "bullet";				//현 위치에서 재정의 필요
				pool[i] = bullet;
			}
		}
		else if (object == "enemy") {
			for (var i = 0; i < size; i++) {
				var itemOrEnemy = Math.floor(Math.random()*100);	//Item과 Enemy를 구분하여 생성할 때 사용할 변수
			
				// enemy 객체 초기화
				if(itemOrEnemy < 90){
					var color = Math.floor(Math.random()*7);	// 적 객체의 color 값(7색)
					var form = Math.floor(Math.random()*4);		// 적 객체의 종류 값(4종류)
					var enemy = new Enemy(color, form);
				}
				else {
					var form = Math.floor(Math.random()*2);		// 아이템 객체의 종류 값(2종류)
					var enemy = new Item(form);
				}
				enemy.init(0,0, imageRepository.enemy01_B_01.width, imageRepository.enemy01_B_01.height);
				pool[i] = enemy;			
			}
		}
		else if (object == "enemyBullet") {
			for (var i = 0; i < size; i++) {
				// bullet 객체 초기화 (적의 bullet)
				var bullet = new Bullet("enemyBullet");
				bullet.init(0,0, imageRepository.enemyBullet.width, imageRepository.enemyBullet.height);
				bullet.collidableWith = "ship";
				bullet.type = "enemyBullet";
				pool[i] = bullet;
			}
		}
	};
	
	/*
	 * pop으로 가장 마지막에 위치한 객체를 꺼내와
	 * unshift를 이용해 배열의 가장 앞에 넣어준다.
	 */
	this.get = function(x, y, speed, color) {
		if(!pool[size - 1].alive) {	//pool의 마지막 객체가 alive가 false인 객체면(초기화 후 spawn을 실행하지 않은 객체)
			pool[size - 1].spawn(x, y, speed, color);	//해당 객체를 spawn을 실행하여 속성을 설정해주고
			pool.unshift(pool.pop());	//해당 객체를 pop하여 꺼낸 뒤 unshift로 배열의 가장 첫번째 값으로 넣어준다.
		}
	};
	
	/*
	 * get을 두번 실행 시키는 것으로 getTwo를 구현 할 수 있다.
	 */
	this.getTwo = function(x1, y1, speed1, color, x2, y2, speed2) {
		if(!pool[size - 1].alive && 
		   !pool[size - 2].alive) {
				this.get(x1, y1, speed1, color);
				this.get(x2, y2, speed2, 'RGB');	// 두번째 탄환은 무조건 적으로 제거해 주는 탄환이므로 color는 'RGB'로 값을 줌
			 }
	};
	
	/*
	 * splice 후에 push를 하므로 배열의 i번째 객체가 배열의 마지막으로 이동
	 * 때문에 화면상에 배치 된 적과 배열상의 위치가 어긋나는 것을 막기 위해
	 * push 후에 sortPool 을 실행하여 i번째의 위치로 다시 객체를 정렬
	 */
	this.sortPool = function(index) {
		var tmp;
		for (var i = size-1; i > index; i--) {
			tmp = pool[i];
			pool[i] = pool[i-1];
			pool[i-1] = tmp;
		}
	};
	
	
	/*
	 * alive가 true인 탄환을 그린다. 만약 탄환이 canvas의 영역을 벗어나면(pool[i].draw()가 true면)
	 * clear를 실행시켜 해당 객체를 초기화 시키고
	 * splice를 통해 초기화 시킨 객체를 삭제하고,
	 * 반환 값인 삭제 된 원소배열의 [0]번째,(여기서는 삭제 된 원소 값)을
	 * push를 통해 배열의 가장 끝 값으로 넣어준다
	 */
	this.animate = function() {
		for (var i = 0; i < size; i++) {
			//alive가 false인 값이 나올 때까지 배열 전체를 반복
			if (pool[i].alive) {
				if (pool[i].draw()) {
					if(pool[i] instanceof Enemy || pool[i] instanceof Item){	//pool이 탄환일 때와 적/아이템일때를 구분
						if(pool[i] instanceof Item && pool[i].form == 0){	//pool이 item01일 때
							pool[i].clear();
							if(i-8 > 0)	// 아이템이 마지막 줄에 위치할 경우 뒷줄에는 객체가 없음
								pool[i-8].isColliding = true;
							if(i+8 < 39) // 아이템이 첫번째 줄에 위치할 경우 앞줄에는 객체가 없음
								pool[i+8].isColliding = true;
							if(i%8 != 7){	//왼쪽 모서리에 위치할 경우 왼쪽에는 객체가 없음
								pool[i+1].isColliding = true;
								if(i-7 > 0)
									pool[i-7].isColliding = true;
								if(i+9 < 40)
									pool[i+9].isColliding = true;
							}
							if(i%8 != 0){	//오른쪽 모서리에 위치할 경우 오른쪽에는 객체가 없음
								pool[i-1].isColliding = true;
								if(i-9 > 0)
									pool[i-9].isColliding = true;
								if(i+7 < 40)
									pool[i+7].isColliding = true;
							}
							pool.push((pool.splice(i,1))[0]);	//splice(삭제할 원소 위치, 삭제할 수)
							this.sortPool(i);	//삭제한 위치로 객체를 다시 정렬
						}
						else{
						pool[i].clear();
						pool.push((pool.splice(i,1))[0]);	//splice(삭제할 원소 위치, 삭제할 수)
						this.sortPool(i);
						}
					} 
					else {
						pool[i].clear();
						pool.push((pool.splice(i,1))[0]);	//splice(삭제할 원소 위치, 삭제할 수)
					}
				}
			}
			else{
				if(pool[i] instanceof Bullet)
					break;
			}
		}
	};
}


/**
 * 플레이어가 컨트롤할 Ship 객체
 * 이미지의 이동 처리는 기본적으로 Bullet과 비슷하게 처리한다.
 */
function Ship() {
	this.life = 3;
	this.speed = 5;
	this.bulletPool = new Pool(30);	//플레이어가 한번에 생성 할 수 있는 Bullet은 총 30개. 이 처리로 키 다운을 통해 연속해서 발사가 가능함
	this.bulletState = 0;	//X2 아이템 획득시 동시에 2발 사격이 가능해지는 횟수. 테스트를 위해서 15. 기본은 0
	
	var fireRate = 15;	//키 다운 시 입력 텀. 작을 수록 탄환 객체 생성 간격이 줄어든다. 너무 작으면 탄환 객체가 겹쳐지게 됨
	var counter = 0;	//키 다운 시 입력 텀 조절 용 변수. 탄환 객체 생성 간격 텀 조절에 사용. animate() 호출마다 1씩 증가. 
	var color;			//플레이어가 누른 키에 따른 탄환의 color 값 저장 변수
	
	this.collidableWith = "enemyBullet";	//적 탄환과의 충돌 시 이벤트
	this.type = "ship";		//본 객체의 타입은 ship
	
	this.init = function(x, y, width, height) {
		// Ship의 초기화 함수
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.alive = true;
		this.isColliding = false;
		this.bulletState = 0;
		this.bulletPool.init("playerBullet"); //bulletPool을 playerBullet으로 하여 미리 생성해놓음
	}
	
	
	/*
	 * 본 게임에 사용한 애니메이션의 기본 원리
	 * imgState에 따라서 두 종류의 이미지를 일정 시간 간격으로
	 * 반복해서 그려주어 애니메이션과 같은 효과를 준다.
	 */
	this.draw = function() {
		if(imgState == 0) {
			this.context.drawImage(imageRepository.spaceship01, this.x, this.y);
		}
		else {
			this.context.drawImage(imageRepository.spaceship02, this.x, this.y);
		}
	};
	this.move = function() {	
		counter++;
		//move는 움직이지 않아도 animate() 실행 마다 호출 됨으로 counter는 animate 호출 마다 ++
		if (KEY_STATUS.left || KEY_STATUS.right) {
			// Ship이 이동할 경우, 이전 위치의 이미지를 지우고
			// 새로 이동한 위치의 좌표를 읽어 그 위치에 새로 이미지를 그린다.
			this.context.clearRect(this.x, this.y, this.width, this.height);

			// 입력받은 키에 따라서 ship의 x를 수정하고 draw() 함수를 실행시킨다.
			// 좌측은 x축에 속도만큼-, 우측은 속도만큼+로 처리
			// 단 이동은 main canvas 밖으로 이동 할 수 없게 조건 처리를 해준다.
			if (KEY_STATUS.left) {
				this.x -= this.speed
				if (this.x <= 0) // 캔버스 밖으로 나가지 못하게 처리
					this.x = 0;
			} else if (KEY_STATUS.right) {
				this.x += this.speed
				if (this.x >= this.canvasWidth - this.width)
					this.x = this.canvasWidth - this.width;
			}
			
			// 이동 하였을 경우의 좌표 갱신 끝
		}

		// 충돌이 일어나지 않았으면 draw 함수로 이미지를 다시 그려줌. 충돌이 일어났다면 gameOver 함수를 실행
		if (!this.isColliding) {
			this.draw();
		}
		else {
			this.alive = false;
			game.gameOver();
		}
		
		if ((KEY_STATUS.a || KEY_STATUS.s || KEY_STATUS.d || KEY_STATUS.space) && (counter >= fireRate) && !this.isColliding) {
			//키 다운 입력 텀인 fireRate보다 counter가 큰 값일 때, 키 입력이 들어오면 fire() 함수를 시작
			//그리고 충돌이 일어나지 않았을 경우에만
			this.fire();
			counter = 0; //counter 초기화
		}	
	};
	
	/*
	 * 탄환 발사 함수
	 */
	this.fire = function() {
		//탄환 발사를 위해 입력한 키에 따라 color 변수에 정해진 값을 넣어줌
		if(KEY_STATUS.a)
			color = 'R';
		else if(KEY_STATUS.s)
			color = 'G';
		else if(KEY_STATUS.d)
			color = 'B';
		else if(KEY_STATUS.space)
			color = 'RGB';
		
		//bulletState가 0이면 1개의 탄환만 발사하고,
		//0이 아니라면 두개를 발사하도록 getTow를 호출
		if(this.bulletState == 0)
			this.bulletPool.get(this.x+imageRepository.spaceship01.width/2-imageRepository.bullet_R.width/2, this.y, 8, color);
		else {
			this.bulletPool.getTwo(this.x+imageRepository.spaceship01.width/4-imageRepository.bullet_R.width, this.y, 8, color,
									this.x+imageRepository.spaceship01.width/4*3, this.y, 8);
			this.bulletState--;	//한번 발사할 때 마다, 2발 동시 발사 가능 횟수가 감소
		}
	};
}
Ship.prototype = new Drawable();

var enemyNum = 0;
/**
 * 적 객체
 * 이미지의 이동 처리는 기본적으로 Bullet과 비슷하게 처리한다.
 * 구조 또한 player와 비슷함
 */
function Enemy(color, form) {
	var percentFire = 0;	// 탄환 발사 확률용 변수
	var chance = 0;			// 탄환 발사 확률용 변수
	this.alive = false;
	var color = color;		// 적 객체의 color 속성
	var form = form;		// 적 객체의 종류. 총 4종류
	this.collidableWith = "bullet";	// 플레이어 탄환과의 충돌 이벤트
	this.type = "enemy";	// 본 객체의 타입은 enemy
	var speedX;
	var speedY;
	
	/*
	 * Enemy의 values 설정
	 */
	this.spawn = function(x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		speedX = 0;		//x축 이동 속도
		speedY = speed;	//y축 이동 속도
		this.alive = true;
		this.leftEdge = this.x - 164;	// 적 객체들이 자신의 현재 위치에서 최대 이동 가능한 좌측 좌표
		this.rightEdge = this.x + 100;	// 적 객체들이 자신의 현재 위치에서 최대 이동 가능한 우측 좌표
		this.bottomEdge = this.y + this.height*5.5;	// 게임 시작 후 적들이 최대로 내려와야하는 위치
		this.init_end = false;	// 초기화 이후 아래로 이동하는 것을 제어하기 위한 변수
	};
	
	/*
	 * color를 this로 선언할 경우 this는 생성시 초기에 값이 정해지면 그 뒤로는 외부의 접근으로 값을 바꿔도
	 * 그 상태가 draw에서 반영 되지 않는다.
	 * 때문에 this가 아닌 지역변수인 var 형태로 선언하여 사용한다.
	 * var는 지역변수이므로 외부에서 접근 할 수 없기때문에 get과 set을 만들어 간접적으로 접근한다.
	 */
	this.getColor = function() {
		return color;
	}
	
	this.setColor = function(changeColor) {
		color = changeColor;
	}

	/*
	 * 적 객체의 이동 처리
	 * 플레이어의 move 처리와 비슷함.
	 */
	this.draw = function() {
		this.context.clearRect(this.x-1, this.y, this.width+1, this.height);
		this.x += speedX;	// 기본적으로 좌표 이동은 현재 x,y에서 speedX와 speedY를 더하여 처리
		this.y += speedY;
		if (this.x <= this.leftEdge) {
			speedX = this.speed+enemyNum*0.1;	// 좌측 끝에 위치했을 때, speedX의 값을 양수 값으로 바꾸어 방향 전환
			this.bottomEdge += 50;	//왼쪽과 오른쪽 끝까지 이동하면 적이 위치할 수 있는 최대 모서리를 더 아래로 내림
			speedY = 6;	//아래로 이동할 수 있게 Y축의 스피드 값을 준다.
		}
		else if (this.x >= this.rightEdge + this.width) {
			speedX = -this.speed-enemyNum*0.1;	// 우측 끝에 위치했을 때, speedX의 값을 음수 값으로 바꾸어 방향 전환
			this.bottomEdge += 50;
			speedY = 6;
		}
		else if (this.y >= this.bottomEdge) {	// 내려오는 애니메이션 이후 적 객체들 속성 조정
			this.speed = 1;		// 애니메이션 처리 후 속도 조절을 위해 1로 재설정
			speedY = 0;	// y축으로 이동 할 필요가 없으므로 0. 또는 아래로 이동 후 정지해야하므로 0
			if(this.init_end == false){ 
			// 초기화 후 이동한 경우는 아래와 같이, 왼쪽 끝, 오른쪽 끝으로 이동하여 내려온 경우는 아래 과정은 생략
				this.y -= 5;
				percentFire = 0.01;		// 내려오는 것이 끝남과 동시에 탄환 발사가 가능
				speedX = -this.speed;	// 우선은 좌측 방향으로 이동 시작
				this.init_end = true;	// 한번 실행하면 다시는 실행하지 않도록 true로
			}
			if (this.bottomEdge >= endLine)	// 적 객체가 일정이상 내려오면 게임오버가 되도록 처리
				game.ship.isColliding = true;
		}
		/*
		 * color와 form값으로 생성 될 적 객체의 모습을 결정
		 * 7개의 color와 4개의 form으로 총 28개의 경우가 존재하고
		 * 애니메이션을 위한 2장의 이미지로 총 56개의 경우가 있다.
		 * imgState로 1번 이미지와 2번 이미지를 구분하고
		 * switch로 총 7개의 컬러별로 분리 후, if문으로 4개의 form을 구분하여 생성
		 * 단, 객체가 충돌이 일어나지 않았을 경우만 이미지를 그린다.
		 */
		if (!this.isColliding) {
			if(imgState == 0) {
				switch(color) {
					case 0:	//R
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_R_01, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_R_01, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_R_01, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_R_01, this.x, this.y);
						break;
					case 1:	//G
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_G_01, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_G_01, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_G_01, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_G_01, this.x, this.y);
						break;
					case 2:	//B
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_B_01, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_B_01, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_B_01, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_B_01, this.x, this.y);
						break;
					case 3:	//RG
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_RG_01, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_RG_01, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_RG_01, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_RG_01, this.x, this.y);
						break;
					case 4: //RB
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_RB_01, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_RB_01, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_RB_01, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_RB_01, this.x, this.y);
						break;
					case 5:	//GB
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_GB_01, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_GB_01, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_GB_01, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_GB_01, this.x, this.y);
						break;
					case 6: //RGB
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_RGB_01, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_RGB_01, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_RGB_01, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_RGB_01, this.x, this.y);
						break;
				}
			}
			else {
				switch(color) {
					case 0:	//R
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_R_02, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_R_02, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_R_02, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_R_02, this.x, this.y);
						break;
					case 1:	//G
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_G_02, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_G_02, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_G_02, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_G_02, this.x, this.y);
						break;
					case 2:	//B
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_B_02, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_B_02, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_B_02, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_B_02, this.x, this.y);
						break;
					case 3:	//RG
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_RG_02, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_RG_02, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_RG_02, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_RG_02, this.x, this.y);
						break;
					case 4: //RB
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_RB_02, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_RB_02, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_RB_02, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_RB_02, this.x, this.y);
						break;
					case 5:	//GB
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_GB_02, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_GB_02, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_GB_02, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_GB_02, this.x, this.y);
						break;
					case 6: //RGB
						if(form == 0)
							this.context.drawImage(imageRepository.enemy01_RGB_02, this.x, this.y);
						else if(form == 1)
							this.context.drawImage(imageRepository.enemy02_RGB_02, this.x, this.y);
						else if(form == 2)
							this.context.drawImage(imageRepository.enemy03_RGB_02, this.x, this.y);
						else if(form == 3)
							this.context.drawImage(imageRepository.enemy04_RGB_02, this.x, this.y);
						break;
				}
			}
		
			// 탄환을 발사할 수 있는지 확률을 계산
			// 조건을 통과한 객체는 탄환 발사 함수를 실행
			// 플레이어와 다르게 animate() 함수가 일정 주기로 실행 될 때 마다
			// 적 객체마다 한번 실행 된다.
			chance = Math.floor(Math.random()*101);
			if (chance/100 < percentFire) {
				this.fire();
			}
			return false;
		}
		else {	// 플레이어의 탄에 맞고 제거 될 경우 스코어에 점수를 추가
			enemyNum++;
			game.playerScore += 40;
			return true;
		}
	};
	
	/*
	 * 탄환 발사 처리
	 */
	this.fire = function() {
		game.enemyBulletPool.get(this.x+this.width/2, this.y+this.height, -4, 'enemyBullet');
	}
	
	/*
	 * 적 객체의 리셋
	 */
	this.clear = function() {
		this.x = 0;
		this.y = 0;
		this.speed = 0;
		this.speedX = 0;
		this.speedY = 0;
		this.alive = false;
		this.isColliding = false;
		this.init_end = false;
	};
}
Enemy.prototype = new Drawable();


/**
 * 아이템 객체
 * 이미지의 이동 처리는 기본적으로 Bullet과 비슷하게 처리한다.
 * 구조 또한 player와 비슷함
 * 적 객체와 동일한 움직임과 이벤트 처리가 필요하므로 Enemy 객체와 구조가 같다.
 */
function Item(form) {
	this.alive = false;
	this.form = form;
	this.collidableWith = "bullet";
	this.type = "enemy";
	var speedX;
	var speedY;
	
	this.spawn = function(x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		speedX = 0;		
		speedY = speed;
		this.alive = true;
		this.leftEdge = this.x - 164;
		this.rightEdge = this.x + 100;
		this.bottomEdge = this.y + this.height*5.5;
		this.init_end = false;
	};

	/*
	 * item의 이동처리
	 */
	this.draw = function() {
		this.context.clearRect(this.x-1, this.y, this.width+1, this.height);
		this.x += speedX;	// 기본적으로 좌표 이동은 현재 x,y에서 speedX와 speedY를 더하여 처리
		this.y += speedY;
		if (this.x <= this.leftEdge) {
			speedX = this.speed+enemyNum*0.1;	// 좌측 끝에 위치했을 때, speedX의 값을 양수 값으로 바꾸어 방향 전환
			this.bottomEdge += 50;
			speedY = 6;
		}
		else if (this.x >= this.rightEdge + this.width) {
			speedX = -this.speed-enemyNum*0.1;	// 우측 끝에 위치했을 때, speedX의 값을 음수 값으로 바꾸어 방향 전환
			this.bottomEdge += 50;
			speedY = 6;
		}
		else if (this.y >= this.bottomEdge) {	// 내려오는 애니메이션 이후 적 객체들 속성 조정
			this.speed = 1;		// 애니메이션 처리 후 속도 조절을 위해 1로 재설정
			speedY = 0;	// y축으로 이동 할 필요가 없으므로 0
			if(this.init_end == false){
				this.y -= 5;
				percentFire = 0.01;		// 내려오는 것이 끝남과 동시에 탄환 발사가 가능
				speedX = -this.speed;	// 우선은 좌측 방향으로 이동 시작
				this.init_end = true;
			}
			if (this.bottomEdge >= endLine)
				game.ship.isColliding = true;
		}
		
		if (!this.isColliding) {
			if(form == 0) {
				if(imgState == 0) {
					this.context.drawImage(imageRepository.item01_01, this.x, this.y);
				}
				else {
					this.context.drawImage(imageRepository.item01_02, this.x, this.y);
				}
			}
			else if(form == 1) {
				this.context.drawImage(imageRepository.item02, this.x, this.y);
			}
			return false;
		}
		else {
			enemyNum++;
			game.playerScore += 5;
			if(form == 1) {	//item02 아이템일 경우 ship의 bulletState에 +15
				game.ship.bulletState += 15;
			}
			return true;
		}
	};
	
	/*
	 * item의 리셋 처리
	 */
	this.clear = function() {
		this.x = 0;
		this.y = 0;
		this.speed = 0;
		this.speedX = 0;
		this.speedY = 0;
		this.alive = false;
		this.isColliding = false;
		this.init_end = false;
	};
}
Item.prototype = new Drawable();

var currentHighScore = 0;	// 로컬 스토리지에 저장 된 최고 점수를 불러와 저장
var endLine;	// 게임 오버로 판단 되는 적의 내려올 수 있는 최대 거리
 /**
 * 게임에서 사용 되는 모든 객체를 생성 및 초기화
 */
function Game() {
	/*
	 * canvas의 정보와 context를 가져와 모든 게임 객체들을 배치함.
	 * canvas가 성공적으로 모든 기능을 구현하면 true를 아니면 false를 반환
	 */
	this.init = function() {
		// html에서 canvas를 받아옴
		this.bgCanvas = document.getElementById('background');
		this.shipCanvas = document.getElementById('player');
		this.mainCanvas = document.getElementById('main');
		
		// canvas 지원 테스트
		// true면 객체를 배치 시작
		if (this.bgCanvas.getContext) {
			this.bgContext = this.bgCanvas.getContext('2d');
			this.shipContext = this.shipCanvas.getContext('2d');
			this.mainContext = this.mainCanvas.getContext('2d');
		
			// 객체들의 context와 canvas 정보 초기화
			Background.prototype.context = this.bgContext;
			Background.prototype.canvasWidth = this.bgCanvas.width;
			Background.prototype.canvasHeight = this.bgCanvas.height;
			
			Ship.prototype.context = this.shipContext;
			Ship.prototype.canvasWidth = this.shipCanvas.width;
			Ship.prototype.canvasHeight = this.shipCanvas.height;
			
			Bullet.prototype.context = this.mainContext;
			Bullet.prototype.canvasWidth = this.mainCanvas.width;
			Bullet.prototype.canvasHeight = this.mainCanvas.height;
			
			Enemy.prototype.context = this.mainContext;
			Enemy.prototype.canvasWidth = this.mainCanvas.width;
			Enemy.prototype.canvasHeight = this.mainCanvas.height;
			
			Item.prototype.context = this.mainContext;
			Item.prototype.canvasWidth = this.mainCanvas.width;
			Item.prototype.canvasHeight = this.mainCanvas.height;
			
			// 배경 객체 초기화
			this.background = new Background();
			this.background.init(0,0); // 좌표 0,0에서 부터 그려줌
			
			// 플레이어 객체 초기화
			this.ship = new Ship();
			// 플레이어의 초기 위치를 설정 후 init
			this.shipStartX = this.shipCanvas.width/2 - imageRepository.spaceship01.width/2;
			this.shipStartY = this.shipCanvas.height/4*3 + imageRepository.spaceship01.height;	//좌상단이 (0,0)으로 하여 우하단으로 갈 수록 증가
			this.ship.init(this.shipStartX, this.shipStartY, imageRepository.spaceship01.width,
			               imageRepository.spaceship01.height);

			// 적 객체의 pool 초기화
			this.enemyPool = new Pool(40);	// 적 객체는 최대 40개
			this.enemyPool.init("enemy");	// enemy로 init
			this.spawnWave();	//루프를 위해서 함수로 만들어 따로 빼냄
			
			this.enemyBulletPool = new Pool(5);	//적 객체들이 최대 동시에 발사 가능한 탄환 수를 5개로 제한
			this.enemyBulletPool.init("enemyBullet"); //bullet을 enemyBullet으로 init
						   
			timer = setInterval(imgStateChange, 250);	//imgState 변수 조절 함수. 250ms 마다 실행
			
			// 쿼드 트리 시작
			this.quadTree = new QuadTree({x:0,y:0,width:this.mainCanvas.width,height:this.mainCanvas.height});
			
			if(localStorage.getItem('highScore') != null)	//로컬 스토리지에 해당 값을 키로 갖는 값이 있을 때만 실행
				currentHighScore = localStorage.getItem('highScore');	//값을 가져와 변수에 저장
			this.playerScore = 0;	//플레이어 점수 초기화
			this.life = 3; //남은 기회
			endLine = this.shipStartY - imageRepository.spaceship01.height; //게임 오버로 인정되는 적의 최대 바닥 모서리
			
			return true;
		} else {
			return false;
		}
	};
	
	this.spawnWave = function() {	//적 배치를 반복하기 위한 함수화
		enemyNum = 0; //속도를 조절하는 처지한 적의 수를 초기화
		var height = imageRepository.enemy01_B_01.height;
		var width = imageRepository.enemy01_B_01.width;
		var x = 240;		//좌측에서부터 떨어진 거리
		var y = -height;	//상단에서 위로 height만큼의 위치
		var spacer = y;		//객체들의 줄 간의 간격
		for (var i = 1; i <= 40; i++) {
			this.enemyPool.get(x,y,6,"");
			x += width;//객체들의 열 간의 간격
			if (i % 8 == 0) {	//8개 배치마다 줄을 바꿔줌
				x = 240;
				y += spacer
			}
		}
	}
	
	this.ready = function() {
		if(initComplete) {
			document.getElementById('loading').style.display = "none";
			this.start();
		}
	}
	
	// animate를 실행시켜 루프를 시작
	this.start = function() {
		this.ship.draw();
		animate();
	};
	
	// 게임을 다시 시작
	this.restart = function() {
		document.getElementById('game_over').style.display = "none";
		this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
		this.shipContext.clearRect(0, 0, this.shipCanvas.width, this.shipCanvas.height);
		this.mainContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);

		this.quadTree.clear();

		this.background.init(0,0);
		
		this.ship.init(this.shipStartX, this.shipStartY, imageRepository.spaceship01.width,
			               imageRepository.spaceship01.height);

		this.enemyPool.init("enemy");
		this.spawnWave();
		this.enemyBulletPool.init("enemyBullet");
		
		currentHighScore = localStorage.getItem('highScore');
		this.playerScore = 0;
		this.life = 3;

		this.start();
	};

	// 게임 오버
	this.gameOver = function() {
		// 기존의 최고 점수보다 플레이어가 얻은 점수가 높은 경우
		if(currentHighScore < game.playerScore){
			localStorage.setItem('highScore',game.playerScore);	//로컬 스토리지의 값을 갱신
			document.getElementById('renewalHighScore').style.visibility = "visible"; //html의 highScore 문구를 visible로
		} else {
			document.getElementById('renewalHighScore').style.visibility = "hidden"; //html의 highScore 문구를 hidden으로
		}
		document.getElementById('result_score').innerHTML = game.playerScore;
		document.getElementById('game_over').style.display = "block";
		//localStorage.removeItem('highScore');
	};
}

/** 
* 이미지 변경 후 유지 시간을 벌기 위해서 imgTimer 변수를 사용
* 본 함수가 최소 2번은 실행 되어야(500ms) 다음 이미지 소스로 변경 됨
* 단순히 본 함수를 500ms 마다 실행하는 것으로는 변경 된 이미지 소스 유지 시간이 짧다
* 모든 이미지가 일괄적으로 2번째 이미지 소스로 변경되어야하므로 imgState 변수는 한개만 선언함.
*/
function imgStateChange() {
	if(imgTimer <= 1) {	
		imgTimer++;	
		imgState = 1;
	} else if(imgTimer <= 2){
		imgTimer++;
		imgState = 0;
	} else {
		imgTimer = 0;
	}
}

/**
 * 애니메이션 루프 함수.
 * requestAnimFrame 함수를 이용하면 페이지를 조회하고 있을 때
 * 등록 된 함수가 정기적으로 실행 되는 효과를 가진다
 * 이를 이용해 animate 함수를 정기적으로 반복 실행 하는 것이 가능하고
 * 이 함수 내에는 게임 객체들의 애니메이션에 관련 된 함수를 실행 시키는 함수가 들어있다.
 * 본 함수는 반드시 전역 함수로 선언 되어야 하고, 객체 내부에서 선언 될 수 없다.
 */
function animate() {
	// html의 span 부분에 넣을 값들을 실시간 갱신
	document.getElementById('highScore').innerHTML = currentHighScore;
	document.getElementById('score').innerHTML = game.playerScore;
	document.getElementById('life').innerHTML = game.life;
	
	// 쿼드 트리에 이번 프레임에서 계산할 객체들을 삽입
	game.quadTree.clear();
	game.quadTree.insert(game.ship);
	game.quadTree.insert(game.ship.bulletPool.getPool());
	game.quadTree.insert(game.enemyPool.getPool());
	game.quadTree.insert(game.enemyBulletPool.getPool());

	detectCollision();
	
	// 적 객체가 더 이상 존재하지 않을 경우 객체를 다시 생성
	if (game.enemyPool.getPool().length === 0) {
		game.enemyPool.init("enemy"); //enemy 객체를 다시 랜덤하게 배치하기 위해서 초기화 재실행
		game.spawnWave();
	}
	
	// 플레이어가 살아 있는 경우에만 애니메이션을 재생
	if (game.ship.alive) {
		requestAnimFrame( animate );
		game.background.draw();
		game.ship.move();
		game.ship.bulletPool.animate(); 
		game.enemyPool.animate();
		game.enemyBulletPool.animate();
	}
}

function detectCollision() {
	var objects = [];
	var calculatedObj1 = null;
	var calculatedObj2 = null;
	game.quadTree.getAllObjects(objects);

	for (var x = 0, len = objects.length; x < len; x++) {
		game.quadTree.findObjects(obj = [], objects[x]);

		for (y = 0, length = obj.length; y < length; y++) {

			// DETECT COLLISION ALGORITHM
			if (objects[x].collidableWith === obj[y].type &&
				(objects[x].x < obj[y].x + obj[y].width &&
			     objects[x].x + objects[x].width > obj[y].x &&
				 objects[x].y < obj[y].y + obj[y].height &&
				 objects[x].y + objects[x].height > obj[y].y)) {
					 
				// 충돌체가 Enemy와 playerBullet인 경우
				if(objects[x] instanceof Enemy && obj[y] instanceof Bullet){
					if(calculatedObj1 != objects[x] && calculatedObj2 != obj[y]){
						// 충돌 처리시 탄환이 적과 충돌한 경우, 적이 탄환과 충돌한 경우
						// 두가지 경우를 모두 계산할 때가 있으므로 중복 계산하지 않도록 마지막에 계산했던 객체를 저장하여
						// 이전에 계산 처리한 객체인지 확인한 뒤 계산에 들어간다.
						objects[x].isColliding = colorDetect(objects[x], obj[y]);
						obj[y].isColliding = true;
						calculatedObj1 = objects[x];
						calculatedObj2 = obj[y];
					}
				} 
				else if(objects[x] instanceof Bullet && obj[y] instanceof Enemy){
					if(calculatedObj1 != obj[y] && calculatedObj2 != objects[x]){
						obj[y].isColliding = colorDetect(obj[y], objects[x]);
						objects[x].isColliding = true;
						calculatedObj1 = obj[y];
						calculatedObj2 = objects[x];
					}	
				}
				// 충돌체가 Player와 enemyBullet인 경우
				else if(objects[x] instanceof Ship && obj[y] instanceof Bullet){
					if(calculatedObj1 != objects[x] && calculatedObj2 != obj[y]){
						game.life--;
						if(game.life > 0){
							objects[x].isColliding = false;
						}
						else{
							objects[x].isColliding = true;
						}
						obj[y].isColliding = true;
						calculatedObj1 = objects[x];
						calculatedObj2 = obj[y];
					}
				} 
				else if(objects[x] instanceof Bullet && obj[y] instanceof Ship){
					if(calculatedObj1 != obj[y] && calculatedObj2 != objects[x]){
						game.life--;
						if(game.life > 0){
							obj[y].isColliding = false;
						}
						else{
							obj[y].isColliding = true;
						}
						objects[x].isColliding = true;
						calculatedObj1 = obj[y];
						calculatedObj2 = objects[x];
					}	
				}
				
				// 충돌체가 Item과 playerBullet인 경우
				
				else {
					objects[x].isColliding = true;
					obj[y].isColliding = true;
				}
			}
		}
	}
};

function colorDetect(enemy, bullet) {
	switch(enemy.getColor()){
		case 0 : //R
				if(bullet.color=='R' || bullet.color=='RGB'){
					game.playerScore += 10;
					return true;
				}
				else if(bullet.color=='G')
					enemy.setColor(3);
				else if(bullet.color=='B')
					enemy.setColor(4);
				if(game.playerScore >= 5)
					game.playerScore -= 5;
				return false;
		case 1 : //G
				if(bullet.color=='G' || bullet.color=='RGB'){
					game.playerScore += 10;
					return true;
				}
				else if(bullet.color=='R')
					enemy.setColor(3);
				else if(bullet.color=='B')
					enemy.setColor(5);
				if(game.playerScore >= 5)
					game.playerScore -= 5;
				return false;
		case 2 : //B
				if(bullet.color=='B' || bullet.color=='RGB'){
					game.playerScore += 10;
					return true;
				}
				else if(bullet.color=='R')
					enemy.setColor(4);
				else if(bullet.color=='G')
					enemy.setColor(5);
				if(game.playerScore >= 5)
					game.playerScore -= 5;
				return false;
		case 3 : //RG
				if(bullet.color=='RGB'){
					game.playerScore += 10;
					return true;
				}
				else if(bullet.color=='R'){
					game.playerScore += 10;
					enemy.setColor(1);
				}
				else if(bullet.color=='G'){
					game.playerScore += 10;
					enemy.setColor(0);
				}
				else if(bullet.color=='B'){
					if(game.playerScore >= 5)
						game.playerScore -= 5;
					enemy.setColor(6);
				}
				return false;
		case 4 : //RB
				if(bullet.color=='RGB'){
					game.playerScore += 10;
					return true;
				}
				else if(bullet.color=='R'){
					game.playerScore += 10;
					enemy.setColor(2);
				}
				else if(bullet.color=='G'){
					if(game.playerScore >= 5)
						game.playerScore -= 5;
					enemy.setColor(6);
				}
				else if(bullet.color=='B'){
					game.playerScore += 10;
					enemy.setColor(0);
				}
				return false;
		case 5 : //GB
				if(bullet.color=='RGB'){
					game.playerScore += 10;
					return true;
				}
				else if(bullet.color=='R'){
					if(game.playerScore >= 5)
						game.playerScore -= 5;
					enemy.setColor(6);
				}
				else if(bullet.color=='G'){
					game.playerScore += 10;
					enemy.setColor(2);
				}
				else if(bullet.color=='B'){
					game.playerScore += 10;
					enemy.setColor(1);
				}
				return false;
		case 6 : //RGB
				if(bullet.color=='RGB'){
					game.playerScore += 10;
					return true;
				}
				else if(bullet.color=='R'){
					game.playerScore += 10;
					enemy.setColor(5);
				}
				else if(bullet.color=='G'){
					game.playerScore += 10;
					enemy.setColor(4);
				}
				else if(bullet.color=='B'){
					game.playerScore += 10;
					enemy.setColor(3);
				}
				return false;
	}
}


// 맵핑 되어 있는 키 코드 정의
KEY_CODES = {
  32: 'space',
  37: 'left',
  39: 'right',
  65: 'a',
  68: 'd',
  83: 's',
}

// 키 코드를 인덱스로 갖는 배열을 생성하여 false로 초기화
KEY_STATUS = {};
for (code in KEY_CODES) {
  KEY_STATUS[KEY_CODES[code]] = false;
}
/**
 * 키를 눌렀을 때와, 키에서 떼었을 때 자동적으로 수행 되는 함수
 * 키를 누르면 KEY_STATUS 배열의 해당 키 인덱스 값을 true로
 * 키를 떼면 false로 설정한다.
 */
document.onkeydown = function(e) {
  var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
  if (KEY_CODES[keyCode]) {
	e.preventDefault();
	KEY_STATUS[KEY_CODES[keyCode]] = true;
  }
}

document.onkeyup = function(e) {
  var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
  if (KEY_CODES[keyCode]) {
    e.preventDefault();
    KEY_STATUS[KEY_CODES[keyCode]] = false;
  }
}


/**	
 * 애니메이션 재생에 사용하는 웹 API의 일종
 * 기존에는 애니메이션 draw시 setInterval이나 setTimeout으로
 * 구현했으나 각 방법의 단점들을 개선한 API이다.
 */
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();