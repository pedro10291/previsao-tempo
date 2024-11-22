
const key= "392cca6b3d2eacb9d20e8bfaf2434a3c"
window.onload = function() {
    buscarCidade('Itapevi'); 


};

function DadosNaTela(dados){
    console.log(dados)
    document.querySelector(".altera").innerHTML = `Tempo em ${dados.name} ${Math.floor(dados.main.temp)}°C`;
    document.querySelector(".tempmin").innerHTML = "Min " + Math.floor(dados.main.temp_min) + "°C";
    document.querySelector(".tempmax").innerHTML = "Max " + Math.floor(dados.main.temp_max) + "°C";
    document.querySelector(".txt-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())  

    
    DadosNaTela(dados)
}

function lupa(){
    const cidade = document.querySelector(".cidade").value

    buscarCidade(cidade)
}