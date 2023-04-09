Webcam.set({
    width:350,
    height:350,
    image_format:'jpg',
    jpg_quality:90
})
Webcam.attach(document.getElementById('webcam1'))



function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById('webcam2').innerHTML='<img id="image1" src='+data_uri+'>'
    })
}
console.log(ml5.version)
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7zHekRhgc/model.json',modelLoaded)
function modelLoaded(){
    console.log('model is loaded')
}
function identify(){
    var img=document.getElementById('image1')
    classifier.classify(img,gotResult)

}
function gotResult(error,result){
if (error) {
    console.log(error)
} else {
    
   var label=(result[0].label)
  var confidence=(result[0].confidence.toFixed(2))
document.getElementById('label').innerHTML=label
document.getElementById('confidence').innerHTML=confidence
}
}

