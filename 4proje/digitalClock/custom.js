const saat = document.getElementById("saat");
const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

function updatesaat() {
    let s = new Date().getHours()
    let d = new Date().getMinutes()
    let sn = new Date().getSeconds()


    saat.innerText = s;
    dakika.innerText = d;
    saniye.innerText = sn;
    setTimeout(()=>{
        updatesaat()
    },100)
}

updatesaat(); 