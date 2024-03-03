const ngrok = require("@ngrok/ngrok");

(async function () {
	const listener = await ngrok.forward({
        authtoken:"26J1UQiDGGhteXzK7TWuokKaRe6_6TTXhiC6wJPWBUrfr4dTo",
		addr: 80,
		domain: "asnan.ap.ngrok.io"
        
	});
    listener.forward('http://localhost:80')

	console.log(`Ingress established at: ${listener.url()}`);
})();