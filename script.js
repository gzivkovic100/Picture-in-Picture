const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Proompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("Something went wrong ",error);
    }
}

buttonElement.addEventListener('click', async () => {
    	// Disable button
        buttonElement.disabled = true;
        // Start picture in picture
        await videoElement.requestPictureInPicture();
        // Reset button
        buttonElement.disabled = false;
});


// On Load
selectMediaStream();
