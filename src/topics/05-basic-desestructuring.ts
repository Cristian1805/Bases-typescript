interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: String;
    details: Details;
}

interface Details{
    author: String;
    year: Number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 50,
    song: "Whiskey on the jar",
    details: {
        author: "Metallica",
        year: 1998
    }
}


//Desestructuracion de Objetos:
const { 
    song: anotherSong, 
    songDuration:duration,
    details } = audioPlayer;

const {author} = details;

console.log('Song: ', anotherSong);
console.log('SongDurarion' , duration);

//Imprimir en la consola el autor
console.log('Author' , author);



//Desestructuración de Arreglos (FORMA 1)
const dragonBall: String[] = ['Goku', 'Vegeta', 'Gohan', 'Trunks', 'Picoro'];
console.log('Personaje 3', dragonBall[4]);

//Desestructuración de Arreglos (FORMA 2)
const [ , , , , , goten = 'Not fount' ]: String[] = ['Goku', 'Vegeta', 'Gohan', 'Trunks', 'Picoro'];
console.log('Personajes', dragonBall[1]);
console.log('No se encuentra el personaje', goten);


export{};