Webcam.set({
    width:350,
    height:350,
    image_format:'jpg',
    jpg_quality:90
})
Webcam.attach(document.getElementById('webcam1'))



function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById('webcam2').innerHTML='<img id="image" src='+data_uri+'>'
    })
}
console.log(ml5.version)
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7zHekRhgc/model.json',modelLoaded)
function modelLoaded(){
    console.log('model is loaded')
}