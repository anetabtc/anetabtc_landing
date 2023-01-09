
(()=>{

window.addEventListener("load", function(){
    const loader = document.querySelectorAll(".loader");
    for(i=0; i<loader.length; i++){
        loader[i].style.display="flex";
    }
    setTimeout(()=>{
        countErgo1();
        countErgo2();
        countCardano1();
        countCardano2();
    },1500);
    let directions = document.querySelectorAll(".direction")
    for(i=0; i<directions.length; i++){
        directions[i].addEventListener("click", function(){
           let address = this.childNodes[1].innerHTML;
           navigator.clipboard.writeText(address).then(()=>{
            this.childNodes[5].style.display="flex";
           setTimeout(()=>{
            this.childNodes[5].style.display="none";
        },1500);
        })
        })
    }
})

/* const ergoPrueba = "https://api.ergoplatform.com/api/v1/addresses/9iLZJ7uEkve8vLphQ7jroUddYu5FWoLvGoeRtYYVvMeVrqWfc8u/balance/confirmed";

const ergoPrueba2 = "https://api.ergoplatform.com/api/v1/addresses/9g6Rke6UEaTBZtyCFx6rASQpDn4C5puP7P82SJERRjf6Jdr4tG9/balance/confirmed";

const cardanoPrueba1 = 'https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/addresses/addr1q9r852dhp45umey759kyxrrrh9xkcvwqssm7lcsk8zm28n3kw5ywq4rfx9txfj6deyjzz4zyfq0y2huntp2u8zgccsfqmcacnc/assets';

const cardanoPrueba2 = 'https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/addresses/addr1q8nmgfl8n6kgqcnxn66ptg6pv96qqm42t8zyz0ld8l6eyv8v6snchtuhy9w39ax6eppasafuyq3xxxene2y6ddjd7fnsh5paz2/assets'; */

const idErgo = "eVOTE2";

const policyIdAsset="7f8852f645cc6b38ffabee1b45dcb2ea1ab1e2ca10f86c916e88e53d";

const addressCardano1 ='https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/addresses/addr1q80md4t6xacfxzvm5ak903gmmed0he3d0k3x4ylxwcvy3qs5jtjeq8d8xnq59jx4c9yrt9xr6xsn0srmdy2ghgtth72qsat083/assets';

const addressCardano2 = 'https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/addresses/addr1qyngymtfrvzvwrueadytaeufmv0ymqc3feytlfqkr32uvpjml6tmvatgluk5yd7lu04dutqg4rylx9htrxrvsva29r6szjqama/assets';

const addressErgo1 = "https://api.ergoplatform.com/api/v1/addresses/9hC3QcUYK1vwNEvpjrPGC4q1egU8ydUCXLC31a58D1dWQ9wLN3o/balance/confirmed";

const addressErgo2 = "https://api.ergoplatform.com/api/v1/addresses/9hSXi4eBfvzNZPazBUe8MRWCKeQjJen7PgjYfsnjkdirWzcQFpC/balance/confirmed";

async function countErgo1(){
    let vote = document.getElementById("ergo1")
    let cant = 0;
    try{
        const response = await fetch(`${addressErgo1}`)
        const data = await response.json()
        const tokens = data.tokens
        for(i=0; i<tokens.length;i++){
            let index = tokens[i].name.indexOf(idErgo)
            if(index == 0){
                token = tokens[i]
                cant = (tokens[i].amount)/1000000;
                cant = new Intl.NumberFormat("de-DE").format(cant);
                break
            }
            }
    }
    catch (err){
    }
    vote.innerHTML=cant;
}

async function countErgo2(){
    let vote = document.getElementById("ergo2")
    let cant2 = 0;
    try{
        const response = await fetch(`${addressErgo2}`)
        const data = await response.json()
        const tokens = data.tokens
        for(i=0; i<tokens.length;i++){
            let index = tokens[i].name.indexOf(idErgo)
            if(index == 0){
                token = tokens[i]
                cant2 = (tokens[i].amount)/1000000;
                cant2 = new Intl.NumberFormat("de-DE").format(cant2);
                break
            }
            }
    }
    catch (err){
    }
    vote.innerHTML=cant2;
}

const options = {method: 'GET', headers: {'Content-Type': 'application/json', 'x-api-key': 'cc82fdb81f8146b294f99cd5f983991f'}};

async function countCardano1(){
    let vote = document.getElementById("cardano1")
    let cantToken = 0;
    try{
        const response = await fetch(`${addressCardano1}`, options)
        const data = await response.json()
        const tokens = data.data
        for(i=0; i<tokens.length;i++){
            let index = tokens[i].policy_id.indexOf(policyIdAsset);
            if(index==0){
                token = tokens[i];
                cantToken = token.quantity;
                cantToken = new Intl.NumberFormat("de-DE").format(cantToken);
                break
            }
        }
    }
    catch (err){
        console.log("error")
    }
    vote.innerHTML=cantToken;
}

async function countCardano2(){
    let vote2 = document.getElementById("cardano2")
    let cantToken2 = 0;
    try{
        const response = await fetch(`${addressCardano2}`, options)
        const data = await response.json()
        const tokens = data.data
        for(i=0; i<tokens.length;i++){
            let index = tokens[i].policy_id.indexOf(policyIdAsset);
            if(index==0){
                token = tokens[i];
                cantToken2 = token.quantity;
                cantToken2 = new Intl.NumberFormat("de-DE").format(cantToken2);
                break
            }
        }
    }
    catch (err){
        console.log("error")
    }
    vote2.innerHTML=cantToken2;
}


})();