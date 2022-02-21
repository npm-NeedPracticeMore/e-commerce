
let da = state[0]
window.onload =  function(){


    document.getElementById('object').innerHTML = da.category
    
    document.getElementById('ddd').innerHTML = da.badge; 
    
    

    let img = document.createElement("img");

    img.src = state[0].img;

    img.classList.add('imageContent');

    document.getElementById('image').appendChild(img);

}

console.log(state[0].category)

