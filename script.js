const card = document.querySelectorAll(".card")
const contentCard = document.querySelectorAll(".content-card")
const glow = document.querySelectorAll(".glow")

window.addEventListener('load', () => {
gsap.to(card, {opacity: 1, top: 0, left: 0, rotation:360, ease:Linear.easeNone,duration: 1})
gsap.to(contentCard,{opacity: 1, top: 0, left: 0,rotation: 1080, ease:Linear.easeNone,duration: 1})
gsap.to(glow, {opacity: 1, top: 0, left: 0,rotation: 720, ease:Linear.easeNone,duration: 1})
})


let angleX
let angleY

card.forEach( el => {
	console.log(el.children[0]);
	console.log(el[1]);
	el.addEventListener("mousemove", e => {

		let elRect = el.getBoundingClientRect()

		let x = e.clientX - elRect.x
		let y = e.clientY - elRect.y

		let midCardWidth = elRect.width / 2
		let midCardHeight = elRect.height / 2

		angleY = -(x - midCardWidth) / 8
		angleX = (y - midCardHeight) / 8

		el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
		el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
	})
	
	el.addEventListener("mouseleave", () => {

		gsap.to(contentCard, {rotateX: 0 , rotateY: 0, duration: 1})
		gsap.to(glow, {rotateX: 0, rotateY: 0, duration: 1})
		// el.children[0].style.transform = "rotateX(0) rotateY(0)"
		// el.children[1].style.transform = "rotateX(0) rotateY(0)"
	})
})