function load(){
    const message = document.getElementById('message');
    const image = document.getElementById('image');
    let hora = new Date().getHours();
    message.innerHTML = `Agora são ${hora} horas.`
    

    if(hora >= 0 && hora < 12){
        //Bom dia
        image.src = 'pacote_img/pexels-manha.jpg';
        document.body.style.background = '#B37D8A';
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        image.src = 'pacote_img/pexels-tarde.jpg';
        document.body.style.background = '#FF8812';
    }else if(hora > 18 && hora <= 23){
        //Boa Noite
        image.src = 'pacote_img/pexels-noite.jpg';
        document.body.style.header = 'whi'
        document.body.style.background = '#18314D';
    }
}

