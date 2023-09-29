import { Dispatch, SetStateAction } from 'react'

export interface Artist {
    name:       string;
    listeners:  string;
    mbid:       string;
    url:        string;
    streamable: string;
    image:      Image[];
}

export interface Image {
    "#text": string;
    size:    Size;
}

export enum Size {
    Extralarge = "extralarge",
    Large = "large",
    Medium = "medium",
    Mega = "mega",
    Small = "small",
}

export interface ArtistData {
    artist: Artist
}

export interface ArtistArray {
    searchArray: Array<Artist>
}

export interface Album {
    name:       string;
    playcount:  number;
    url:        string;
    artist: {
        name:       string;
        mbid:       string;
        url:        string;
    }
    image:  Image[];
}

export interface AlbumData {
    album: Album
}

export interface Track {
    streamable: {
        fulltrack: string;
        "#text": string;
    }
    duration: number;
    url: string;
    name: string;
    "@attr": {
        rank: number;
    }
    artist: {
        name:       string;
        mbid:       string;
        url:        string;
    }
}

export interface TrackData {
    track: Track
}

export interface topAlbumsState {
    setTopAlbums: Dispatch<SetStateAction<Album[]>>
}

export interface topAlbumsArray {
    topAlbums: Album[]
}