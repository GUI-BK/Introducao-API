let url = `https://api.thecatapi.com/v1/breeds`;
const api_key =`live_7w6FfosCkolmKR6I6j0O4jUZzwUZAlP17SoHlokWTzl605CTOLTCvSyApyIXDW7W`;
const slcBreed = document.getElementById('slcBreed');


let breedImg = document.getElementById('breedImg');
let breeds = [];



fetch(url,{headers: {
    'x-api-key': api_key
}})
.then(res => res.json())
.then(data => {
    data = data.filter(img=> img.image?.url!=null)
   
    breeds = data;

     for (let i = 0; i < breeds.length; i++) {
      const breed = breeds[i];
      let option = document.createElement('option');
       
       if(!breed.image)continue
       
      option.value = i;
      option.innerHTML = `${breed.name}`;
        slcBreed.appendChild(option);
      };
      
  });
  function showBreedImage(index){
 
  breedImg.src= breeds[index].image.url;

  }





