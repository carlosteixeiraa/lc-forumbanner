var node = document.getElementById('signDiv');
var btn = document.getElementById('download');
  
  btn.onclick = function() {
    domtoimage.toJpeg(document.getElementById('signDiv'), {quality: 1})
      .then(function(dataURL) {
      
        if(user) {
          var imageName = 'signature-' + user.toLowerCase(); + '.png';
          window.saveAs(dataURL, imageName);
        } else {
          // #56A1DA
          swal("You forgot something!", "Please insert a username before clicking submit.");
        }
        
    });
  }

var user;

$("#username").on("change keyup paste", function(){

  var toChange = $('#username').val();
  user = toChange;

  if(toChange.length < 16) {
    $("#signUsername h4").text(toChange);
  } else {
    swal("Maximum characters!", "You can only use up to 15 characters.");
  }
  

});


$("#tag").on("change keyup paste", function(){

  var toChange = $('#tag').val();
  
  if(toChange.length < 16) {
    $("#signTag h5").text(toChange);
  } else {
    swal("Maximum characters!", "You can only use up to 15 characters.");
  }
});