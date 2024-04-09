//My API key
var apikey = {
    key: 'e4f67258-77b8-40d0-8b83-92975ccf3e60'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        var texto = "";

        //Get 10 coins and symbols
        for(let i = 0; i < 10; i++){
            console.log(api)
            
            let date = api.data[i].first_historical_data.split("-");
            date[2] = date[2].substring(0,2);

            //Show API information

            texto = texto + ` 
            
            <div class="media">
                <img src="assets/img/coin.png" class="align-self-center mr-3" alt="coin" width="195" height="195">
                <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                <p class="dateInfo"><b>Primeira data:</b> ${date[2]}/${date[1]}/${date[0]}</p>
                </div>
            </div>
            `;

            document.getElementById("coins").innerHTML = texto;
        }
    })
    .catch((error) => {
        console.error(error.message);
    });