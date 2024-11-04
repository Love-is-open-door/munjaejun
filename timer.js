let count=1;
let timerID=null; // 타이머 ID

onmessage = function (e) {
	if(e.data == "start") {
		if(timerID != null) return; 
		timerID = setInterval(myCallback, 1000);
	}
	else if(e.data == "stop") {
		if(timerID == null) return;
		clearInterval(timerID);
		timerID = null;
		// close();
	}
}

function myCallback() {
	postMessage(count);
	count++;
}
