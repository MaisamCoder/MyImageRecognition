Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot()
//Webcam.snap() is a predefined function of webcam.js used to take images from a webcam, this function contains data_uri that can be used to show preview of the image which generates after taking a snapshot.
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capturedimage" src = "'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rDb6d1t5v/model.json', modelLoaded);
//ml5.imageClassifer is a pre-defined function which triggers the ml5.image classifacation function. It has to pass two perameters. If loaded- You can start using it. If not loaded - Error.
//model.json just says this is a model, and json means that all the pictures we have stored, are stored under a class, and the pictures are the value. So, json says we have to use these values using JSON file.
//modelLoaded is a function that either says if the model is loaded or not. (Error or no error)

function modelLoaded(){

    console.log('Model Loaded');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultobjectname").innerHTML = results[0].label;
        document.getElementById("resultobjectaccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}