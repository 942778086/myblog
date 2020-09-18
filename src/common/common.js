/**
 * rem适配脚本
 * 来源：https://github.com/amfe/lib-flexible
 */
(function flexible (window, document) {
	let docEl = document.documentElement;
	let dpr = window.devicePixelRatio || 1;

	// adjust body font size
	function setBodyFontSize () {
		if (document.body) {
			document.body.style.fontSize = (12 * dpr) + 'px'
		}
		else {
			document.addEventListener('DOMContentLoaded', setBodyFontSize)
		}
	}
	setBodyFontSize();
	// set 1rem = viewWidth / 10
	function setRemUnit () {
		let rem = docEl.clientWidth / 10;
		docEl.style.fontSize = rem + 'px'
	}
	setRemUnit()
	// reset rem unit on page resize
	window.addEventListener('resize', setRemUnit)
	window.addEventListener('pageshow', function (e) {
		if (e.persisted) {
			setRemUnit()
		}
	})
	// detect 0.5px supports
	if (dpr >= 2) {
		let fakeBody = document.createElement('body');
		let testElement = document.createElement('div');
		testElement.style.border = '.5px solid transparent'
		fakeBody.appendChild(testElement)
		docEl.appendChild(fakeBody)
		if (testElement.offsetHeight === 1) {
			docEl.classList.add('hairlines')
		}
		docEl.removeChild(fakeBody)
	}
}(window, document))

/**
 * canvas小球
 */
class CanvasBall {

	canvas; ctx; x; y; radius; speed; img; imgInitPromise; time;

	constructor(canvas, ctx, x, y, radius, speed, img) {
		this.time = 0;
		this.canvas = canvas;
		this.ctx = ctx;
		this.radius = radius;
		this.speed = speed;
		this.img = new Image(radius, radius);
		this.img.src = img;
		this.imgInitPromise = new Promise(resolve => {
			this.img.onload = () => {
				resolve();
			}
		})
		this.initBall();
	}

	initBall() {
		this.drawCircleImg();
		this.move();
	}

	/**
	 * 绘制圆形图片
	 */
	drawCircleImg() {
		let ctx = this.ctx;
		let r = this.radius;
		let x = this.x;
		let y = this.y;
		let img = this.img;
		ctx.save();
		let d =2 * r;
		let cx = x + r;
		let cy = y + r;
		ctx.arc(cx, cy, r, 0, 2 * Math.PI);
		ctx.clip();
		this.imgInitPromise.then(() => {
			ctx.drawImage(img, x, y, d, d);
			ctx.restore();
		})
	}

	/**
	 * 绘制移动
	 */
	move() {
		let canvas = this.canvas;
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.calcHeight();
		this.drawCircleImg();
		setTimeout(() => {
			if (this.y !== canvas.height) {
				this.move();
			}
			this.time++;
		}, 1);
	}

	/**
	 * 计算高度
	 */
	calcHeight() {

	}
}

/**
 *
 * @param arg
 * @param {HTMLElement} arg.domParent
 */
export const buildCanvas = (arg) => {
	let canvas = document.createElement("canvas");
	new CanvasBall(canvas.getContext('2d'), 0, 0, 100, 0, "https://i.loli.net/2020/07/20/th5qlCvnkO2HspE.jpg")
}
