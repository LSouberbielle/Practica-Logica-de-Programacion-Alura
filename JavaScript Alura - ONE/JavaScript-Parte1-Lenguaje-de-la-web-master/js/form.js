var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset();
});

function capturarDatosPaciente(form){
    
    var paciente = {
        
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        grasa: form.grasa.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }
    
    return paciente;
}

function construirTr(paciente){
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nombreTd = construirTd(paciente.nombre,"info-nombre");
    var pesoTd = construirTd(paciente.peso,"info-peso");
    var alturaTd = construirTd(paciente.altura,"info-altura");
    var grasaTd = construirTd(paciente.grasa,"info-grasa");
    var imcTd = construirTd(paciente.imc,"info-imc");
   
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(grasaTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}