function changeImage() {
	var Image_Id = document.getElementById('imagen1');
	if (Image_Id.src.match("cubics/portada1.png")) {
		Image_Id.src = "cubics/portada2.png";
	}
	else {
		Image_Id.src = "cubics/portada1.png";
	}
	}



