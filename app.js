const abrir = document.getElementById("abrir");
const reset = document.getElementById("reset");
const sobre = document.getElementById("tri");
const ab = document.getElementById("trit");
const img = document.getElementById("img");
let estado = false;
let psImg = 0;
let t = 330;

abrir.addEventListener("click", ()=> {
    if (!(estado)) {
        estado = true;
        img.style.top = "0px";
        sobre.style.borderTop = "0";
        sobre.style.borderBottom = "135px solid #ce7c8a";
        sobre.style.bottom = "126px";

        setTimeout(()=> {
            img.style.display = "block";
        }, 1000);

        let intervalo = setInterval(()=> {
            psImg--;
            t--;
            img.style.top = `${psImg}px`;
            img.style.clipPath = `inset(0 0 ${t}px 0)`;            
        }, 10);

        setTimeout(()=> {
            clearInterval(intervalo);
            setTimeout(()=> {
                img.style.clipPath = "inset(0 0 0 0)";
            },400);
        }, 2000);
    }
});

reset.addEventListener("click", ()=> {
    if (estado) {
        estado = false;
        location.reload();
    };
});