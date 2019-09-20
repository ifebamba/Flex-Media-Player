/* create an array of songs */
const songs = [
  "bensound-goinghigher.mp3",
  "bensound-littleidea.mp3",
  "bensound-ukulele.mp3",
  "joeboy.mp3"
]

/* arrow function to create a song list */

const createSongList = () => {

      const list = document.createElement('ol')     /* create an ordered list of songs, assign it variable list */

      list.classList.add("playlist_songs")          /* add class "playlist_songs" to the ordered list */

  /* For loop to cycle through all song items in songs array, create a list item "li" for each song, to each list item, append the text filename of each song item, finally append each list item into the ordered list created earlier, then return the list */

        for (let i = 0; i < songs.length; i++){
          const item = document.createElement('li')
          item.appendChild(document.createTextNode(songs[i]))
          list.appendChild(item)
        }
      return list
}

/* append the songlist created in the createSongList function to the ID named "playlist"  */

document.getElementById('playlist').appendChild(createSongList())


/*
playlist.onClick = (e) => {
const clickedItem = e.target
const source = document.getElementById("source")
source.src = "songs/" + clickedItem.innerText



player.load()
player.play()
}
*/


const pp = document.getElementById("playlist");         /* get the playlist ID element and assign it into a variable constant named pp*/

pp.addEventListener("click", playSong);                 /* add an eventListener to the element pp, listen for the click event, and then                                                             run a function called playSong */

function playSong(e){
  const clickedItem = e.target
  const source = document.getElementById("source")
  source.src = "songs/" + clickedItem.innerText

  document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
  document.getElementById('currentSong').innerText = clickedItem.innerText

  document.getElementById('currentlyPlayingSong2').innerText = "Currently Playing: "
  document.getElementById('currentSong2').innerText = clickedItem.innerText
  document.getElementById('viz_image').innerHTML = '<img src="img/viz.gif" id="viz"/>'


  document.getElementById('click_play').innerHTML = '<i class="fas fa-pause" onclick="pauseAudio()"></i>'

player.load()
player.play()
}


const playAudio = () => {
  if (player.readyState) {
        player.play()
  }
  
  document.getElementById('click_play').innerHTML = '<i class="fas fa-pause" onclick="pauseAudio()"></i>'
  document.getElementById('currentlyPlayingSong2').innerText = "Currently Playing: "
  }

const pauseAudio = () => {
player.pause()
document.getElementById('click_play').innerHTML = '<i class="fa fa-play biggy" onclick="playAudio()"></i>'
document.getElementById('currentlyPlayingSong2').innerText = "Currently Paused: "
}


const stopAudio = () => {
  player.pause()
  player.currentTime = 0
  document.getElementById('click_play').innerHTML = '<i class="fa fa-play biggy" onclick="playAudio()"></i>'
  }

/** 
  var songIndex = 0;

  const previousSong = () => {
    player.pause()
    if (songIndex === 0) {
      songIndex = songs.length - 1;
    } else {
      songIndex -= 1;
    }
    player = new Audio("songs/" + songs[songIndex] + ".mp3"); // reload the new song
    player.play();
  }

*/


const sliderMenu = document.getElementById('volumeSliderMenu')
sliderMenu.addEventListener("input", adjustVolumeMenu);
function adjustVolumeMenu(e) {
	const volumeMenu = e.target.value
	player.volume = volumeMenu
}


const slider = document.getElementById('volumeSlider')
slider.addEventListener("input", adjustVolume);
function adjustVolume(e) {
	const volume = e.target.value
	player.volume = volume
}

const updateProgress = () => {
  if(player.currentTime > 0){
  const progressBar = document.getElementById('progress')
  progressBar.value = (player.currentTime / player.duration) * 100
}





const nxt = document.getElementById("next")
nxt.addEventListener("click", nextSong);



// function for moving to next audio file
function nextSong(e) {

	// Current index of the files array
	var s = 0;

	// Get the audio element
	const music_player = document.getElementById("source");

    // Check for last audio file in the playlist
    if (s === songs.length - 1) {
        s = 0;
	console.log(s);
    } else {
        s = s + 1;
    }

    // Change the audio element source
    music_player.src = songs[s]; 
    player.play()
}






}