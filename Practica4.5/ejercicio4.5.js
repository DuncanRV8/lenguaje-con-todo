function myAnimeLyst() {
    fetch('https://api.jikan.moe/v4/random/anime')
    .then(respone => respone.json())
    .then(dato=>{
        dato => dato.data

        //titulos de los animes
        const titulo = dato.title;
        const tituloJapo = dato.title_japanese;
        const tituloIng  = dato.title_english;

        const tipoAnime = dato.type;
        document.getElementById("tipoManga").innerHTML += tipoAnime;



    })
    .catch(error =>{
        console.error("Error no se ha podido cargar la pagina", error)
    })
}