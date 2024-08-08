/*==============================
~> Name Temp     : STING WEB - Plugin Disable Dev Tool
~> Version	 : 2024 / v2.0 MENA
~> Last Updated  : 10 - 8 - 2024 : 12:00 AM - 02:50 PM
~> Dev By     	 : STING WEB  - Facebook Page ->  https://www.facebook.com/stingweb.eg
~> Desgin URL    : https://www.sting-web.com
===============================*/
(function() { var devtools = { open: false, orientation: null }; var threshold = 160; var emitEvent = function(state) { window.location.href = "/"; } var main = function() { var widthThreshold = window.outerWidth - window.innerWidth > threshold; var heightThreshold = window.outerHeight - window.innerHeight > threshold; var orientation = widthThreshold ? 'vertical' : 'horizontal'; if (!(heightThreshold && widthThreshold) && ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) { if (!devtools.open || devtools.orientation !== orientation) { emitEvent(true, orientation); } devtools.open = true; devtools.orientation = orientation; } else { if (devtools.open) { emitEvent(false, null); } devtools.open = false; devtools.orientation = null; } }; setInterval(main, 500); })();
