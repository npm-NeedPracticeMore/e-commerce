//! bu faylda ayrim barcha uchun manfaatli bo`lishi mumkun bo`lgan js kodlari saqlanadi. bu fayl boshqa joylarda chaqirilmaydi va ishlatilmaydi. Ishlaydigan kodlarning izohlari bo`lishi shart! Shuningdek barcha kodlar izohlarda bo`lishi kerak! aks holda ortiqcha kompilyatsiyalar sodir bo`lib, loyihaning ochilishi sekinlashib qoladi

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

