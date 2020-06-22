var video_count = 0;
var videos = ['vimlvN1QE0w'];
var tag = document.createElement('script');
var done = false;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    // console.log('ready');
    $("#player").replaceWith($('<div id="player" class="clip"></div>'));
    done = false;
    player = new YT.Player('player', {
        videoId: videos[video_count],
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // console.log('on-ready');
    event.target.playVideo();
    video_count++;
    if (video_count > videos.length - 1) {
        video_count = 0;
    }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function onPlayerStateChange(event) {
    // console.log(event.data, YT.PlayerState.ENDED);
    if (event.data == YT.PlayerState.ENDED) {
        onYouTubeIframeAPIReady();
        //setTimeout(onYouTubeIframeAPIReady, 6000);
        //done = true;
    }
}

function change_video_count(count) {
    video_count = count;
    onYouTubeIframeAPIReady();
}
