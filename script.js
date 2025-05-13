const url = `https://api.thecatapi.com/v1/breeds`;
const api_key =`live_7w6FfosCkolmKR6I6j0O4jUZzwUZAlP17SoHlokWTzl605CTOLTCvSyApyIXDW7W`;
const slcBreed = document.getElementById('slcBreed');
const slcGen =document.getElementById('slcGen');

let breedImg = document.getElementById('breedImg');
let breeds = [];

fetch(url,{headers: {
    'x-api-key': api_key
}})
.then(res => res.json())
.then(data => {
    data = data.filter(img=> img.image?.url!=null)
    breeds = data;
    
    slcBreed.innerHTML = `<option value="">Selecione uma raça</option>`;
    breeds.forEach(breed => {
        slcBreed.innerHTML += `<option value="${breed.id}">${breed.name}</option>`;
        if(slcBreed.value == ""){
            breedImg.alt = 'Selecione uma raça primeiro';
            if(slcGen.value == ""){
                breedImg.alt = 'Selecione uma quantidade primeiro';
            }else{
                let breedUrl = breed.image.url;
                breedImg.src = breedUrl;
            }
        }
    });
});






