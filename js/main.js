function yukari(){
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const yukari = document.querySelector(".yukari");
    //console.log(scroll);
    if(scroll > 300){
        //göster
        //console.log("göster");
        yukari.style.display = "block";
    }else{
        //gösterme
        //console.log("gösterme");
        yukari.style.display = "none";
    }
}

window.onscroll = function(){
    yukari();
}

document.addEventListener("click",function(){
    const acilirMenu = document.getElementById("acilirMenu");
    const ustMenu = new bootstrap.Collapse(acilirMenu,{
        toggle: false
    });
    ustMenu.hide();

    
});

function kontrol(){
   
    return false;
}

function resim(resim,baslik){
    const modalBaslik = document.getElementById("resimGosterBaslik");
    const modalGovde = document.getElementById("resimGosterGovde");
    modalBaslik.innerHTML = baslik;
    modalGovde.innerHTML = '<img src="resim/'+resim+'" class="w-100 h-100" />';
}

function icerik(baslik,id){
    var icerikModalBaslik = document.getElementById("icerikBaslik");
    var icerikModalGovde = document.getElementById("icerikGovde");

    var icerikGelen = document.getElementById(id);

    icerikModalBaslik.innerHTML = baslik;
    icerikModalGovde.innerHTML = icerikGelen.innerHTML;

}



