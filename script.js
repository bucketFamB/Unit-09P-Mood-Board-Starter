var happyImages = ["https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDpJySewuhBEreoxLDBbVofhSkK94WW6T6vxc_to7Eo2QLoy4","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOCwTKGvzQe8hnMmkVtjUcMZrf1HFhsbAU8DVyG_K4LnKBXQsmw"];
var basketballImages = ["https://media.giphy.com/media/12Tob44HkDJty8/giphy.gif"];
var tiredImages = ["https://thumbs.gfycat.com/RapidWickedAfghanhound.webp"];
var hungryImages = ["https://thumbs.gfycat.com/OrdinaryAromaticFish.webp" ];


$('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
   if(mood==="hungry"){
   }
   else if(mood==="happy"){
   }
   else if(mood==="basketball"){
   }
   else if(mood==="tired"){
   }

});


function happyMood(){
   changeBackgroundColor("yellow");
   changeTextColor("black");
}

function basketballMood(){
    changeBackgroundColor("orange");
    changeTextColor("black");
}

function tiredMood(){
 changeBackgroundColor("gray");
    changeTextColor("white");
}

function hungryMood(){
    changeBackgroundColor("green");
    changeTextColor("black");
}

function changeBackgroundColor(color){
    $("body").css("background-color");
}

function changeTextColor(color){
    $("body").css("color",color);
}

function displayImages(images){
  images.foreach(function(img){
      var thisimage = $("<img>");
      
  });
}


