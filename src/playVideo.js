function playVideo(stream, idVideo){
  const video = document.getElementById(idVideo);
  video.srcObject = stream;
  video.onloadedmetada = function(){
    video.play();
  };
}

module.exports = playVideo;
