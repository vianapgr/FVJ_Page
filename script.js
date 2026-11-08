// CONFIGURAÇÃO DOS SEUS LINKS E NÚMEROS
const CONFIG = {
    vendedor1: "5511945204617", 
    vendedor2: "5511971064918", 
    vendedor3: "5511975144024", 
    instagram: "fvj.stack",      
    mensagemPadrao: "Olá! Vim através do site da FVJ | Stack e gostaria de solicitar um orçamento para o meu projeto."
};

document.addEventListener("DOMContentLoaded", () => {
    const msg = encodeURIComponent(CONFIG.mensagemPadrao);
    
    document.getElementById("linkVendedor1").href = `https://wa.me/${CONFIG.vendedor1}?text=${msg}`;
    document.getElementById("linkVendedor2").href = `https://wa.me/${CONFIG.vendedor2}?text=${msg}`;
    document.getElementById("linkVendedor3").href = `https://wa.me/${CONFIG.vendedor3}?text=${msg}`;
    document.getElementById("linkInstagram").href = `https://instagram.com/${CONFIG.instagram}`;
});

function openContactModal() {
    document.getElementById("contactModal").classList.add("active");
}

function closeContactModal() {
    document.getElementById("contactModal").classList.remove("active");
}

window.onclick = function(event) {
    const modal = document.getElementById("contactModal");
    if (event.target === modal) {
        closeContactModal();
    }
}
