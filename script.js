/* 

	Author: Patrick Ingram
	Date: 10/22/2018
	HandsOnProject 7-4
	
*/

"use strict";

var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");

function processDeliveryInfo() {
	var prop;
	delivInfo.name = document.getElementById("nameinput").value;
	delivInfo.addr = document.getElementById("addrinput").value;
	delivInfo.city = document.getElementById("cityinput").value;
	delivInfo.email = document.getElementById("emailinput").value;
	delivInfo.phone = document.getElementById("phoneinput").value;
	for (prop in delivInfo) {
		delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
	}
}

document.getElementById("deliverTo").style.display = "block";

function previewOrder() {
    processDeliveryInfo();
    document.getElementById("sectBlock").style.display = "block";
}

function eventListener() {
	var clickButton = document.getElementById("previewBtn");
	
	if (clickButton.addEventListener) {
		clickButton.addEventListener("click", previewOrder, false)
	} else if (clickButton.attachEvent) {
		clickButton.attachEvent("onclick", previewOrder)
	}
}

if (window.addEventListener) {
    window.addEventListener("load", eventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", eventListener);
}