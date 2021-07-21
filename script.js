const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {

    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On Load 
selectMediaStream();