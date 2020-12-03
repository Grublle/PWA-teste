let img_capture = document.getElementById("cameraCapture")
img_capture.addEventListener('change',(ev)=>{
    
    // const reader = new FileReader();
    // reader.readAsDataURL(img_capture.files[0])
    // reader.addEventListener('load', ()=> {
    //     reader.result
    // })
    
    
    let img64 = URL.createObjectURL(img_capture.files[0])
    let img_html = document.createElement("img");
    img_html.src=img64
    img_html.className ="fotos_pessoa"
    
    document.body.appendChild(img_html);    

    }  
)  
