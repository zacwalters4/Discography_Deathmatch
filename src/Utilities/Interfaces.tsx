export interface SearchInterface {
    artist: Artist[];
}

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
    size:    string;
}