function openCamera(){
  navigator.mediaDevices.getUserMedia({ audio: true, video:true })
  .then(stream => {
    const video = document.getElementById('localStream');
    video.srcObject = stream;
    video.onloadedmetada = function(){
      video.play();
    };
  })
  .catch(err => console.log(err));
}

module.exports = openCamera;
