
var bgPort;

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function () {

  bgPort = chrome.runtime.connect({ name: "popup->background" });

  //register port with background.js
  bgPort.postMessage({ "action": "register" });

  $('#sendScan_1').click(function () {
    keyPress($("input#barcode1").val(), true)
  });


  $('#sendScan_2').click(function () {
    keyPress($("input#barcode2").val(), true)
  });


  $('#sendScan_3').click(function () {
    keyPress($("input#barcode3").val(), true)
  });

});

function keyPress(str, bolReturn) {
  if (!bolReturn) bolReturn = false;
  bgPort.postMessage({ "action": "keypress", "value": str, "return": bolReturn });
}
