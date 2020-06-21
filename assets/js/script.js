// Site Information

const siteName = "Leva";
const siteDomain = "leva.com";
const siteIP = "127.0.0.1";
const siteHost = "localhost";

function siteInformation(a) {
	if (a == "yes" || a == "да") {
		console.log("< -------------------------------------------------- >");
		console.log("Site information:");
		console.log(`Site name: ${siteName}.`);
		console.log(`Site domain: ${siteDomain}. (Domain is not activated)`);
		console.log(`Site IP: ${siteIP}.`);
		console.log(`Site host: ${siteHost}.`);
		console.log("< -------------------------------------------------- >");
	} else if (a == "no" || a == "нет") {
		console.log("< -------------------------------------------------- >");
		console.log("Site information is hide");
		console.log("< -------------------------------------------------- >");
	} else {
		return;
	}
}

siteInformation("yes");

// End Site Information