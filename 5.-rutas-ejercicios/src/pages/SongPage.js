import React from 'react';
import { useParams } from 'react-router-dom';
import SongDetails from '../componentes/SongDetails';

const SongPage = ({ mySongs }) => {
    let {id} = useParams();
    let currentSong = mySongs[id];
    let { search, lyric, bio } = currentSong;
    //console.log(id, mySongs);

    return (
        <SongDetails search={search} lyric={lyric} bio={bio} />
    )
}

export default SongPage;