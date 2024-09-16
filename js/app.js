boton = document.getElementById('btnForm')
inputTarea = document.getElementById('inputTarea')
inputDescripcion = document.getElementById('descriptionInput')
divContenedor = document.getElementById('containerCards')

boton.addEventListener("click", ()=>{
    if(inputTarea.value != '' && inputDescripcion.value != ''){
        divContenedor.innerHTML +=`<div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">${inputTarea.value}</h5>
                                            <p class="card-text">${inputDescripcion.value}</p>
                                        </div>
                                        <button class="btn btn-danger">delete</button>
                                    </div>`
        inputTarea.value = ''
        inputDescripcion.value = ''
    }
    else{
        alert('Campos vacios, ingrese datos para crear un recordatorio')
    }                          
})