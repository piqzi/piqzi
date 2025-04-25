import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player";
const LAST_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        cache: "no-cache",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        })
    });

    return response.json();
};


const lastPlayed = async () => {
    const { access_token } = await getAccessToken();
    const response = await fetch(LAST_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });
    const data = await response.json();

    const tracks = await data.items;
    const title = tracks?.[0]?.track?.name;
    const artist = tracks?.[0]?.track?.artists?.[0]?.name;
    const album = tracks?.[0]?.track?.album?.name;
    const albumImageUrl = tracks?.[0]?.track?.album?.images?.[0]?.url;
    const trackUrl = tracks?.[0]?.track.external_urls?.spotify;
    const artistUrl = tracks?.[0]?.track.artists?.[0]?.external_urls?.spotify;
    const albumUrl = tracks?.[0]?.track.album?.external_urls?.spotify;

    return { title, artist, album, albumImageUrl, trackUrl, artistUrl, albumUrl };
};


export const nowPlaying = async () => {
    let playing: boolean = false;
    
    const { access_token } = await getAccessToken();
    
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: "no-cache",
    });
    
    if (response.status == 200) {
        const track = await response.json();
        playing = track?.is_playing;

        if(playing) {
            const title: string = track?.item?.name
            const artist: string = track?.item?.artists?.[0]?.name;
            const album: string = track?.item?.album?.name;
            const albumImageUrl: string = track?.item?.album?.images?.[0]?.url;
    
            return { playing, title, artist, album, albumImageUrl };
        } else {
            const { title, artist, album, albumImageUrl } = await lastPlayed();
            
            return { playing, title, artist, album, albumImageUrl }
        }
    } else {
        const { title, artist, album, albumImageUrl } = await lastPlayed();
        
        return { playing, title, artist, album, albumImageUrl}
    }
};

