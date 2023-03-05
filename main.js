const buttonNext = document.querySelector('button')


function addCSS(e) {
	const textareaElement = document.querySelector('textarea')
	const css = textareaElement.value;
	const foreFront = document.getElementById('forefront')
	foreFront.style.cssText = css;
}


buttonNext.addEventListener('click', addCSS)