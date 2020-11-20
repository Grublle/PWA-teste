
let img_capture = document.getElementById("cameraCapture")
img_capture.addEventListener('change',(ev)=>{
    console.log(img_capture.files[0])
    let img64 = URL.createObjectURL(img_capture.files[0])
    // console.log(img64)

    let img_html = document.createElement("img");
    img_html.src=img64
    img_html.className ="fotos_pessoa"
    

    document.body.appendChild(img_html);    

    }  
)  
