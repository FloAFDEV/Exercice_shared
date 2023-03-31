console.log(gsap)
const card = document.querySelectorAll(".card")

card.forEach( el => {
	el.addEventListener("mousemove", e => {

		let elRect = el.getBoundingClientRect()

		let x = e.clientX - elRect.x
		let y = e.clientY - elRect.y

		let midCardWidth = elRect.width / 2
		let midCardHeight = elRect.height / 2

		let angleY = -(x - midCardWidth) / 8
		let angleX = (y - midCardHeight) / 8

		el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
		el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
	})
	
	el.addEventListener("mouseleave", () => {

		gsap.to(el.children[0], {rotateX: 0, rotateY: 0, duration: 1})
		gsap.to(el.children[1], {rotateX: 0, rotateY: 0, duration: 1})
		// el.children[0].style.transform = "rotateX(0) rotateY(0)"
		// el.children[1].style.transform = "rotateX(0) rotateY(0)"
	})
})