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


function checkHex (hex) {
  var reg = /^#[0-9A-F]{6}$/i; 

  return reg.test(hex);

}


$("#tag").on("change keyup paste", function(){

  var toChange = $('#tag').val();
  
  if(toChange.length < 16) {
    $("#signTag h5").text(toChange);
  } else {
    swal("Maximum characters!", "You can only use up to 15 characters.");
  }
});

$("#tagcolor").focus(function() {

  var cont = $('#tagcolor').val();
  //console.log(cont);

  if(cont.length > 0) {
    return true;
  } else {
    $('#tagcolor').val('#');
  }


});



var notifier = new AWN();


$("#tagcolor").on("change keyup paste", function(){

  var toChange = $('#tagcolor').val();

    if(checkHex(toChange) && toChange.length == 7) {
      $(".colorprev").css('color', toChange);
      $("#signTag h5").css('background', toChange);
    } else if(toChange.length == 7) {
      notifier.alert('Please use a valid colorcode.');
    }


});