var node = document.getElementById('signDiv');
  var btn = document.getElementById('download');
  
  btn.onclick = function() {
    domtoimage.toBlob(document.getElementById('signDiv'))
      .then(function(blob) {
        var imageName = 'signature-' + user.toLowerCase(); + '.png';
        window.saveAs(blob, imageName);
      });
}

var user;

$("#username").on("change keyup paste", function(){

  var toChange = $('#username').val();
  user = toChange;
  
  $("#signUsername h4").text(toChange);

});


$("#tag").on("change keyup paste", function(){

  var toChange = $('#tag').val();
  
  $("#signTag h5").text(toChange);

});