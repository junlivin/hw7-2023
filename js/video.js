var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

// function updateVolume() {
// 	let displayVolume = document.querySelector("#volume");
// 	displayVolume.textContent = video.volume * 100 + '%';
// }

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// if(video.volume === 0){
	// 	document.querySelector("#volume").textContent = '0%';
	// }else{
	document.querySelector("#volume").textContent = video.volume * 100 + '%';
	// }
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	if (video.playbackRate >= 0.2){
		video.playbackRate = video.playbackRate - 0.1;
	}
	console.log("video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	if (video.playbackRate >= 2){
		video.playbackRate = 2;
	} else{
		video.playbackRate = video.playbackRate + 0.1;
	}
	console.log("video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration){
		video.currentTime += 10;
	} else if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	// if (this.textContent === "Mute"){
	// 	video.volume = 0;
	// 	this.textContent = "Unmute";
	// 	document.querySelector("#volume").textContent = '0%';
	// 	console.log(video.volume);
	// } else{
	// 	video.volume = document.querySelector("#slider").value/100;
	// 	this.textContent = "Mute";
	// 	document.querySelector("#volume").textContent = document.querySelector("#slider").value + '%';
	// 	console.log(video.volume);
	// }

	if (video.muted) {
        video.muted = false;
        this.textContent = 'Mute';
    } else {
        video.muted = true;
        this.textContent = 'Unmute';
    }
});

document.querySelector("#slider").addEventListener("change", function() {
	// if (video.volume === 0){
	// 	video.volume = 0;
	// 	document.querySelector("#volume").textContent = '0%';
	// } else {
	// 	video.volume = this.value/100;
	// 	document.querySelector("#volume").textContent = this.value + '%';
	// }
	// console.log(video.volume);
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + '%';
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.setAttribute('class', 'oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.setAttribute('class', 'video');
});