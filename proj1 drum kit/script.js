let body=document.querySelector("body");
let snare = document.querySelector("#snare");
let clap =document.querySelector("#clap")
let hihat =document.querySelector("#hihat")
let kick =document.querySelector("#kick")
let openhat =document.querySelector("#openhat")
let boom =document.querySelector("#boom")
let ride =document.querySelector("#ride")
let tops =document.querySelector("#top")
let tink =document.querySelector("#tink")

body.addEventListener("keydown",(event)=>{
         if(event.code === "KeyJ" ){
            snare.currentTime = 0;
            snare.play();
         }
         if(event.code === "KeyA" ){
            clap.currentTime = 0;
            clap.play();   
                  
         }
          if(event.code === "KeyS" ){
            hihat.currentTime = 0;
            hihat.play();
         }
          if(event.code === "KeyD" ){
            kick.currentTime = 0;
            kick.play();
         }
          if(event.code === "KeyF" ){
            openhat.currentTime = 0;
            openhat.play();
         }
          if(event.code === "KeyG" ){
            boom.currentTime = 0;
            boom.play();
         }
          if(event.code === "KeyH" ){
            ride.currentTime = 0;
            ride.play();
         }
          if(event.code === "KeyK" ){
            tops.currentTime = 0;
            tops.play();
         }
          if(event.code === "KeyL" ){
            tink.currentTime = 0;
            tink.play();
         }
})

