boton = document.getElementById('btnForm')
inputTarea = document.getElementById('inputTarea')
inputDescripcion = document.getElementById('descriptionInput')
divContenedor = document.getElementById('containerCards')

boton.addEventListener("click", ()=>{
    if(inputTarea.value != ''){
        divContenedor.innerHTML +=`<div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${inputTarea.value}</h5>
                                    <p class="card-text">${inputDescripcion.value}</p>
                                </div>
                                </div>`
        inputTarea.value = ''
        inputDescripcion.value = ''
    }                          
})