const audio = document.getElementById('audio');
const lyricsContainer = document.getElementById('lyrics');

lyrics.forEach((line, index) => {
    const lyricElement = document.createElement('div');
    lyricElement.className = 'lyric';
    lyricElement.id = 'lyric-' + index;
    lyricElement.textContent = line.text;
    lyricsContainer.appendChild(lyricElement);
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    lyrics.forEach((line, index) => {
        const lyricElement = document.getElementById('lyric-' + index);
        if (currentTime >= line.time) {
            lyricElement.classList.add('active');
        } else {
            lyricElement.classList.remove('active');
        }
    });
});
