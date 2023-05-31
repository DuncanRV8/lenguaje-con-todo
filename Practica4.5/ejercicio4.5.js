function myAnimeList() {
    fetch('https://api.jikan.moe/v4/random/anime')
    .then(response => response.json())
    .then(info => {
        info = info.data;

        const genero = info.genres;
        const esHentai = genero.some(genero => genero.name === "Hentai");
        if (esHentai) {
            funcion();
        }
        else{
            //titulos de los animes
            document.getElementById('p1').innerHTML += info.title;
            document.getElementById('japones').innerHTML += info.title_japanese;
            document.getElementById('ingles').innerHTML += info.title_english;
            document.getElementById('tipoManga').innerHTML += info.type;
            document.getElementById('fuente').innerHTML += info.source;
            document.getElementById('episodio').innerHTML += info.episodes;
            document.getElementById('comienzoEmision').innerHTML += info.status;
            document.getElementById('duracion').innerHTML += info.duration;
            document.getElementById('clasificacion').innerHTML += info.rating;
            document.getElementById('nota').innerHTML += info.score;
            document.getElementById('sinopsis').innerHTML += info.synopsis;
            document.getElementById('imagen').src = info.images.jpg.image_url;
            document.getElementById('trailer').src = info.trailer.embed_url;

            //para sacar los generos de la array de genres
            for (let index = 0; index < genero.length; index++) {
                document.getElementById('genero').innerHTML += genero[index].name + " ";
            }
        } 
    })
    .catch(error => {
        console.error("Error no se ha podido cargar la pagina", error)
    })
}


