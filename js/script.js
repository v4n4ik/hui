let popup = document.getElementById('reg'),
	popupToogle = document.getElementById('button'),
	popupClose = document.querySelector('.close');

	popupToogle.onclick = function() {
		popup.style.display = "block"
	}

	popupClose.onclick = function() {
		popup.style.display = "none"
	}

	

let select = document.getElementById('select')
	list = document.getElementById('list')
	order = document.getElementById("order")
	
	select.onclick = function() {
		if(list.style.display == "block") {
			list.style.display = "none"
		}
		else {
			list.style.display = "block"
			order.style.display = "none"
		}
	}

let a = document.getElementById('a')
	b = document.getElementById('b')
	c = document.getElementById('c')
	d = document.getElementById('d')

	a.onclick = function() {
		console.log(select.textContent)
		select.textContent = a.textContent
		list.style.display = "none"
		order.style.display = "block"
	}

	b.onclick = function() {
		console.log(select.textContent)
		select.textContent = b.textContent
		list.style.display = "none"
		order.style.display = "block"
	}

	c.onclick = function() {
		console.log(select.textContent)
		select.textContent = c.textContent
		list.style.display = "none"
		order.style.display = "block"
	}

	d.onclick = function() {
		console.log(select.textContent)
		select.textContent = d.textContent
		list.style.display = "none"
		order.style.display = "block"
	}


let card = document.getElementById("card")
	dark = document.getElementById("dark")
	cardClose = document.getElementById("close2")
	
	order.onclick = function() {
		card.style.display = "block"
		dark.style.display = "block"
	}

	cardClose.onclick = function() {
		card.style.display = "none"
		dark.style.display = "none"
	}

let oplata = document.getElementById("oplata")
	conf = document.getElementById("conf")
	ok = document.getElementById("OK")

	oplata.onclick = function() {
		card.style.display = "none"
		conf.style.display = "block"
	}

	ok.onclick = function() {
		dark.style.display = "none"
		conf.style.display = "none"
		popup.style.display = "none"
	}

