ctx.lineWidth=5;
ctx.lineCap = "round";
ctx.lineJoin = "round";
let activetool = "pencil";
let pencil = document.querySelector('#pencil');
let eraser = document.querySelector('#eraser');
let penciloptions = document.querySelector('#pencil-options');
let eraseroptions = document.querySelector('#eraser-options');

function handleTool(tool) {
    if (tool == "pencil") {
        if(activetool=="pencil"){
            penciloptions.classList.add("show");
            eraseroptions.classList.remove("show");
        }else{
            ctx.strokeStyle = "black";
            activetool="pencil";
            eraseroptions.classList.remove("show");      
        }
    } else if (tool == "eraser") {
        if(activetool=="eraser"){
            penciloptions.classList.remove("show");
            eraseroptions.classList.add("show");
        }else{
            ctx.strokeStyle = "white"
            activetool="eraser";
            penciloptions.classList.remove("show");
        }
    } else if (tool == "sticky") {
        createSticky();
    }else if(tool == "upload"){
        uploadFile();
    }else if(tool=="undo"){
        undoLast();
    } else if (tool == "redo") {
        redoLast();
    } else if (tool == "download") {
        downloadBoard();
    }

}
function changecolor(color){
    ctx.strokeStyle=color;
    //send
    socket.emit("colorChange", color)
}
let sliders = document.querySelectorAll("input[type='range']")
    for(let i=0;i<sliders.length;i++){
        sliders[i].addEventListener("change",function(){
            let width = sliders[i].value;
            ctx.lineWidth=width;
        })
    }
