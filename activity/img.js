let imgInput = document.querySelector("#acceptImg");
function uploadFile(){
    imgInput.click();
    imgInput.addEventListener("change",function(){
        let imgObj = imgInput.files[0];
        let imgLink = URL.createObjectURL(imgObj);
        let textBox = createBox();
        let img = document.createElement("img");
        img.setAttribute("class", "upload-img")
        img.src = imgLink;
        textBox.appendChild(img);
    })
}