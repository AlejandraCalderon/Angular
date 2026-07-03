interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 33,
    songDuration: 33,
    song: "dddd",
    details: {
        author: "Ed Sheeran",
        year: 2014
    },
};

const song = 'New song';

const { song: anotherSong, songDuration: duration, details: { author } } = audioPlayer;

const [, , trunks='Not found']: string[] = ['Goku', 'Vegeta']
//const trunks = dbz[3] || 'No hay personaje'
//console.log('Song', anotherSong);
//console.log('Duracion', duration);
//console.log('author', author);


console.log('Personaje 3', trunks)

export { };