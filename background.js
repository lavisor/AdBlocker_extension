const adsProvider = [
	"*://*.doubleclick.net/*",
	"*://*.scorecardresearch.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://*.zedo.com/*",
	"*://partner.googleadservices.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) 
	{ 
		return { cancel: true }
	},
    { 
		urls:adsProvider 
	},
    ["blocking"]
)

