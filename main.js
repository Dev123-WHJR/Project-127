song = "";

function preload()
{
  song = "";
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    image(video,20,10,600,500);
}

function play()
{
    song.play();
}