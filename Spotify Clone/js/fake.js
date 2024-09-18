const client_id = '00f4c80a80ba475ea50d9ca412e631c0';
const client_secret = '2bdafda6f41b483a9b893ca870c6e532';
let token = '';
let currentTrack = null;
let isPlaying = false;
let trackList = [];
let currentTrackIndex = -1;

async function fetchToken() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    token = data.access_token;
}

async function searchTracks(query) {
    const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await result.json();
    displayTracks(data.tracks.items);
}

function displayTracks(tracks) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    trackList = tracks;

    tracks.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('col-md-4', 'mb-4');
        trackElement.innerHTML = `
            <div class="card h-100">
                <img src="${track.album.images[0].url}" class="card-img-top" alt="${track.name}">
                <div class="card-body">
                    <h5 class="card-title">${track.name}</h5>
                    <p class="card-text">${track.artists[0].name}</p>
                    <audio controls id="audio-${track.id}">
                        <source src="${track.preview_url}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        `;
        resultsContainer.appendChild(trackElement);

        const audioElement = trackElement.querySelector('audio');
        const progressBar = document.getElementById('trackProgressBar');

        audioElement.addEventListener('play', () => {
            if (currentTrack && currentTrack !== audioElement) {
                currentTrack.pause();
            }
            currentTrack = audioElement;
            currentTrackIndex = index;
            isPlaying = true;
            document.getElementById('play').src = 'img/pause.svg';
            updateProgressBar(audioElement, progressBar);
        });

        audioElement.addEventListener('pause', () => {
            isPlaying = false;
            document.getElementById('play').src = 'img/play.svg';
        });

        progressBar.addEventListener('input', () => {
            const seekTime = (progressBar.value / 100) * audioElement.duration;
            audioElement.currentTime = seekTime;
        });
    });
}

function updateProgressBar(audioElement, progressBar) {
    audioElement.addEventListener('timeupdate', () => {
        if (audioElement.duration) {
            progressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
        }
    });
}

function togglePlay() {
    if (currentTrack) {
        if (isPlaying) {
            currentTrack.pause();
        } else {
            currentTrack.play();
        }
    }
}

function playNextTrack() {
    if (trackList.length > 0) {
        currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
        playTrack(currentTrackIndex);
    }
}

function playPreviousTrack() {
    if (trackList.length > 0) {
        currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
        playTrack(currentTrackIndex);
    }
}

function playTrack(index) {
    const audioElement = document.getElementById(`audio-${trackList[index].id}`);
    if (currentTrack && currentTrack !== audioElement) {
        currentTrack.pause();
    }
    currentTrack = audioElement;
    currentTrack.play();
    isPlaying = true;
    document.getElementById('play').src = 'img/pause.svg';
}

document.getElementById('play').addEventListener('click', togglePlay);
document.getElementById('next').addEventListener('click', playNextTrack);
document.getElementById('previous').addEventListener('click', playPreviousTrack);
document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchSong').value;
    if (query) {
        searchTracks(query);
    }
});

const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');
searchIcon.addEventListener('click', () => {
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
});

fetchToken();
