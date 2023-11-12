(() => {

	let main = "mainn"

	window.addEventListener("load", function () {
		const loader = document.querySelectorAll(".loader");
		for (i = 0; i < loader.length; i++) {
			loader[i].style.display = "flex";
		}
		setTimeout(() => {
			countErgo1();
			countErgo2();
			countCardano1();
			countCardano2();
		}, 1500);
		let directions = document.querySelectorAll(".direction");
		for (i = 0; i < directions.length; i++) {
			directions[i].addEventListener("click", function () {
				let address = this.childNodes[1].innerHTML;
				navigator.clipboard.writeText(address).then(() => {
					this.childNodes[5].style.display = "flex";
					setTimeout(() => {
						this.childNodes[5].style.display = "none";
					}, 1500);
				});
			});
		}
	});

	let middle = "sqtjWK4C4HRh05xQNt"


	const idErgo = "eVOTE4";

	// TODO modify cVOTE

	const policyIdAssetCVote =
		"a07f36fddfbb01cd2e752736f90005c78ea2b8a463323f0446c5fd3c63564f544534";


	const addressCardano1 =
	`https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qx5c5ydtw2xrmwj6tqj3s4yd9sck5rgcr5d22haa9jq6j2crcz99ppc0fld4m03rhm3s23v3f0nhayjpd5yu6qfu0zvsp64vph/total`;

	const addressCardano2 =
	`https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qysdt8l9unds43hcuvx8e73t05lvs27djktjed8lcj9d4fqx78z7ek4j8v2v9sczcjvw80mh3wmk82ygnlp9xww2gscq38s4jp/total`;

	const addressErgo1 =
		"https://api.ergoplatform.com/api/v1/addresses/9iHhB4BG9QVmrczbiLmN3aQzhDeBGtNHtHuAYBi9EEw5YHksgmc/balance/confirmed";

	const addressErgo2 =
		"https://api.ergoplatform.com/api/v1/addresses/9g4e3U4Pkr2Fp8TQBccCztVLMZyQJji4DrBEuSJsApwcjbDDHUf/balance/confirmed";


		let end = "etvLnTPxnvRm5rY5"


	async function countErgo1() {
		let vote = document.getElementById("ergo1");
		let cant = 0;
		try {
			const response = await fetch(`${addressErgo1}`);
			const data = await response.json();
			const tokens = data.tokens;
			for (i = 0; i < tokens.length; i++) {
				let index = tokens[i].name.indexOf(idErgo);
				if (index == 0) {
					token = tokens[i];
					cant = ((tokens[i].amount)/1000000).toFixed();
					cant = new Intl.NumberFormat("en").format(cant);
					break;
				}
			}
		} catch (err) { }
		vote.innerHTML = cant;
	}

	const test = main+end+middle;

	async function countErgo2() {
		let vote2 = document.getElementById("ergo2");
		let cant2 = 0;
		try {
			const response = await fetch(`${addressErgo2}`);
			const data = await response.json();
			const tokens = data.tokens;
			for (i = 0; i < tokens.length; i++) {
				let index = tokens[i].name.indexOf(idErgo);
				if (index == 0) {
					token = tokens[i];
					cant2 = ((tokens[i].amount)/1000000).toFixed();
					cant2 = new Intl.NumberFormat("en").format(cant2);
					break;
				}
			}
		} catch (err) { }
		vote2.innerHTML = cant2;
	}

	async function countCardano1() {
		let vote1 = document.getElementById("cardano1");
		let cantToken = 0;
		
		try {

			fetch(addressCardano1, {
				method: "GET",
				headers: {
					"Accept": "application/json",
					"project_id": test,
				},
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error("Error en la solicitud a la API");
					}
					return response.json();
				})
				.then((data) => {
					const tokens = data.received_sum;
					//console.log(tokens);
					const result = tokens.find((token) => token.unit === policyIdAssetCVote);
					
					if (result) {
						cantToken = result.quantity;
						cantToken = new Intl.NumberFormat("en").format(cantToken);
						//console.log(cantToken);
					} else{
						cantToken = 0;
					}
					vote1.innerHTML = cantToken;

				})
				.catch((error) => {
					console.error(error);
				});	
		}
		catch (err) {
			console.log("error");
		}
	}
	

	async function countCardano2() {
		let vote2 = document.getElementById("cardano2");
		let cantToken2 = 0;
		
		try {

			fetch(addressCardano2, {
				method: "GET",
				headers: {
					"Accept": "application/json",
					"project_id": test,
				},
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error("Error en la solicitud a la API");
					}
					return response.json();
				})
				.then((data) => {
					const tokens = data.received_sum;
					//console.log(tokens);
					const result = tokens.find((token) => token.unit === policyIdAssetCVote);
					
					if (result) {
						cantToken2 = result.quantity;
						cantToken2 = new Intl.NumberFormat("en").format(cantToken2);
						//console.log(cantToken2);
					} else{
						cantToken2 = 0;
					}
					vote2.innerHTML = cantToken2;

				})
				.catch((error) => {
					console.error(error);
				});	
		}
		catch (err) {
			console.log("error");
		}
	}


})();
