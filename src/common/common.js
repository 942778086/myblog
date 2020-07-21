/**
 * 文字跑马灯
 * html code:
 *<div class="box">
 *    <div class="content">
 *        <p class="text">文字如果超出了宽度自动向左滚动文字如果超出了宽度自动向左滚动。</p>
 *    </div>
 *</div>
 * @param boxDom {HTMLElement}
 * @param content {HTMLElement}
 * @param labelDom {HTMLElement}
 */
export const Marquee = (boxDom, content, labelDom) => {
	let boxWidth = boxDom.offsetWidth;
	let textWidth = labelDom.offsetWidth;
	if(boxWidth > textWidth){ return false }
	content.innerHTML += content.innerHTML;
	labelDom.style.paddingLeft = "300px";
	// 更新
	textWidth = labelDom.offsetWidth;
	const toScrollLeft = () => {
		//  如果文字长度大于滚动条距离，则递归拖动
		if (textWidth > boxDom.scrollLeft) {
			boxDom.scrollLeft++;
			setTimeout('toScrollLeft()', 18);
		}
	}
	toScrollLeft();
}
