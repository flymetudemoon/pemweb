function hewan (){
    let animal = document.getElementById("animal").value
    let foto = document.getElementById("foto")

    if (animal == "srigala"){
        foto.setAttribute("src", "asset/serigala.jpeg")
    }else if (animal == "ular"){
        foto.setAttribute("src", "asset/ular.jpeg")
    }else if (animal == "hiu"){
        foto.setAttribute("src", "asset/hiu.jpeg")
    }else if (animal == "komodo"){
        foto.setAttribute("src", "asset/komodo.jpeg")
    }else if (animal == "kadal"){
        foto.setAttribute("src", "asset/kadal.jpeg")
    } else {
        alert("Tidak memilih gambar")
    }
}