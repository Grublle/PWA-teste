// let pacientes;
async function loadjson(){
    const response = await fetch('/pacientes_data/pacientes.json')
    const pacientes= await response.json();
    create_paciente_dom(pacientes);
}

async function create_paciente_dom(pacientes){

    // let pacientes_div = document.getElementById("pacientes_container").lastChild;
    // let pessoa = pacientes_div.cloneNode(true);
    // pessoa.style.display="block";
    // document.getElementById("pacientes_container").appendChild(pessoa);
    
    let pacientes_div = document.getElementById("pacientes_container");

    for (let index = 0; index < pacientes.length; index++) {
        const element = pacientes[index];

        pacientes_div.innerHTML += `
            <div class="card-panel pessoa white row">
                <i class="medium material-icons">person</i>
                <a href="/pages/pessoa.html" class="grey-text text-darken-1">
                    <div class="pessoa-details">
                        <div class="pessoa-title">`+element.nome+`</div>
                        <div class="pessoa-ingredients">`+element.last_mod+`</div>
                    </div>
                </a>
                <div class="pessoa-delete">
                    <i class="material-icons">delete_outline</i>
                </div>
            </div>
        `    
    }
}

loadjson()
.then(response=>{
    // create_paciente_dom();
})
.catch(error => {
    console.error(error);
});
