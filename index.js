function displaySongInfo() { 
let nameSong = document.getElementById("nameSong").value;
let songLink = document.getElementById("songLink").value;
let date = document.getElementById("date").value;
let description = document.getElementById("description").value;
let songInfo = document.getElementById("songInfo").value;
let formSong = document.getElementById("formSong");
const youtubeEmbedLink = songLink.replace('watch?v=', 'embed/').replace('https://www.youtube.com/', 'https://www.youtube-nocookie.com/');

document.getElementById("songInfo").style.display="block";

document.getElementById("songInfo").innerHTML = `
name :  ${nameSong}  <br> date: ${date} <br> description: ${description} <br>
<iframe width="560" height="315" src="${youtubeEmbedLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`;

formSong.style.display="none";

}

// module.exports = {
//     displaySongInfo: displaySongInfo,
// };ٍٍ