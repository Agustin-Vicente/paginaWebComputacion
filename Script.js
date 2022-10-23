

var produ=2;

function agregar(){
    //console.log("entre");
    //console.log(produ);
    switch(produ){
        case 2:
            if(document.getElementById("precioProducto1").textContent==""){
                alert("Complete la tabla para agregar más equipos");
            }
            else{
            document.getElementById("segundoProducto").style.display = "block";
            document.getElementById('eliminarProducto').style.display = "inline-block"; 
            produ=3;
            console.log(produ);
            }
            break;

        case 3: 
            if(document.getElementById("precioProducto2").textContent==""){
            alert("Complete la tabla para agregar más equipos");
            }
            else{
            document.getElementById("tercerProducto").style.display = "block";
            document.getElementById('eliminarProducto').style.display = "inline-block"; 
            produ=4;
            console.log(produ);}
            break;
        
        case 4:
            if(document.getElementById("precioProducto3").textContent==""){
                alert("Complete la tabla para agregar más equipos");
                }
            else{document.getElementById("cuartoProducto").style.display = "block";
            document.getElementById('eliminarProducto').style.display = "inline-block"; 
            produ=5;
            console.log(produ);}
            break;
        
        case 5: 
            if(document.getElementById("precioProducto2").textContent==""){
            alert("Complete la tabla para agregar más equipos");
            }
            else{
            document.getElementById("quintoProducto").style.display = "block";
            document.getElementById('añadirProducto').style.display = "none";
            document.getElementById('eliminarProducto').style.display = "inline-block"; 
            produ=6;
            console.log(produ);}
            break;      
    }
}

function eliminar(){
    //console.log("elimino");
    //console.log(produ);

        switch(produ){
            case 6:
                document.getElementById("quintoProducto").style.display = "none";
                document.getElementById('añadirProducto').style.display = "inline-block";
                document.getElementById('tabla5').rows[1].cells[0].childNodes[0].textContent = "";
                document.getElementById('tabla5').rows[1].cells[1].childNodes[0].textContent = "";
                document.getElementById('tabla5').rows[1].cells[2].childNodes[0].textContent = ""; 
                document.getElementById("cant5").value="";   
                document.getElementById("selectorQuintoProducto").value="7";  
                produ=5;

                console.log(produ);
                break;
    
            case 5: 
                document.getElementById("cuartoProducto").style.display = "none";
                document.getElementById('añadirProducto').style.display = "inline-block";
                document.getElementById('tabla4').rows[1].cells[0].childNodes[0].textContent = "";
                document.getElementById('tabla4').rows[1].cells[1].childNodes[0].textContent = "";
                document.getElementById('tabla4').rows[1].cells[2].childNodes[0].textContent = "";
                document.getElementById("cant4").value=""; 
                document.getElementById("selectorCuartoProducto").value="7";      
                produ=4;
                console.log(produ);
                break;
            
            case 4:
                document.getElementById("tercerProducto").style.display = "none";
                document.getElementById('añadirProducto').style.display = "inline-block";
                document.getElementById('tabla3').rows[1].cells[0].childNodes[0].textContent = "";
                document.getElementById('tabla3').rows[1].cells[1].childNodes[0].textContent = "";
                document.getElementById('tabla3').rows[1].cells[2].childNodes[0].textContent = ""; 
                document.getElementById("cant3").value="";   
                document.getElementById("selectorTercerProducto").value="7";    
                produ=3;
                //console.log(produ);
                break;
            
            case 3: 
                document.getElementById("segundoProducto").style.display = "none";
                document.getElementById('eliminarProducto').style.display = "none";
                document.getElementById('añadirProducto').style.display = "inline-block";
                document.getElementById('tabla2').rows[1].cells[0].childNodes[0].textContent = "";
                document.getElementById('tabla2').rows[1].cells[1].childNodes[0].textContent = "";
                document.getElementById('tabla2').rows[1].cells[2].childNodes[0].textContent = "";
                document.getElementById("cant2").value="";   
                document.getElementById("selectorSegundoProducto").value="7";           
                produ=2;
                break;      
        }
    
}
var total1=0;
var total2=0;
var total3=0;
var total4=0;
var total5=0;

function primerProducto(){
    let precio = [100, 200, 300, 400, 500, 600, 700];
    let cant1;
    let producto1;
   
    let precioProducto1;
    
    cant1 = document.getElementById("cant1").value;
    producto1 = parseInt(document.getElementById("selectorPrimerProducto").value);
    
    if(isNaN(producto1)){
        document.getElementById("precioProducto1").textContent = "";
        console.log("entre");
    }else{
        precioProducto1 = precio [producto1];
        total1 = cant1 * precioProducto1;
        document.getElementById("precioProducto1").textContent = total1;
        document.getElementById("cantProducto1").textContent = cant1;
        document.getElementById("nombreProducto1").textContent = document.getElementById("selectorPrimerProducto").childNodes[(producto1*2)+3].innerText;
        
    }
    }

    function segundoProducto(){
        let precio = [100, 200, 300, 400, 500, 600, 700];
        let cant2;
        let producto2;
       
        let precioProducto2;
        
        cant2 = document.getElementById("cant2").value;
        producto2 = parseInt(document.getElementById("selectorSegundoProducto").value);
        console.log("entre");
        if(isNaN(producto2)){
            document.getElementById("precioProducto2").textContent = "";
            console.log("entre es nan");
        }else{
            precioProducto2 = precio [producto2];
            total2 = cant2 * precioProducto2;
            document.getElementById("precioProducto2").textContent = total2;
            document.getElementById("cantProducto2").textContent = cant2;
            document.getElementById("nombreProducto2").textContent = document.getElementById("selectorSegundoProducto").childNodes[(producto2*2)+3].innerText;
            console.log(document.getElementById("selectorSegundoProducto").childNodes);
        }
        }

        function tercerProducto(){
            let precio = [100, 200, 300, 400, 500, 600, 700];
            let cant3;
            let producto3;
           
            let precioProducto3;
            
            cant3 = document.getElementById("cant3").value;
            producto3 = parseInt(document.getElementById("selectorTercerProducto").value);
            
            if(isNaN(producto3)){
                document.getElementById("precioProducto3").textContent = "";
                console.log("entre");
            }else{
                precioProducto3 = precio [producto3];
                total3 = cant3 * precioProducto3;
                document.getElementById("precioProducto3").textContent = total3;
                document.getElementById("cantProducto3").textContent = cant3;
                document.getElementById("nombreProducto3").textContent = document.getElementById("selectorTercerProducto").childNodes[(producto3*2)+3].innerText;
                console.log(document.getElementById("selectorTercerProducto").childNodes);
            }
            }
            
            function cuartoProducto(){
                let precio = [100, 200, 300, 400, 500, 600, 700];
                let cant4;
                let producto4;
               
                let precioProducto4;
                
                cant4 = document.getElementById("cant4").value;
                producto4 = parseInt(document.getElementById("selectorCuartoProducto").value);
                
                if(isNaN(producto4)){
                    document.getElementById("precioProducto4").textContent = "";
                    console.log("entre");
                }else{
                    precioProducto4 = precio [producto4];
                    total4 = cant4 * precioProducto4;
                    document.getElementById("precioProducto4").textContent = total4;
                    document.getElementById("cantProducto4").textContent = cant4;
                    document.getElementById("nombreProducto4").textContent = document.getElementById("selectorCuartoProducto").childNodes[(producto4*2)+3].innerText;
                    
                }
                }
            
                function quintoProducto(){
                    let precio = [100, 200, 300, 400, 500, 600, 700];
                    let cant5;
                    let producto5;
                   
                    let precioProducto5;
                    
                    cant5 = document.getElementById("cant5").value;
                    producto5 = parseInt(document.getElementById("selectorQuintoProducto").value);
                    
                    if(isNaN(producto5)){
                        document.getElementById("precioProducto5").textContent = "";
                        console.log("entre");
                    }else{
                        precioProducto5 = precio [producto5];
                        total5 = cant5 * precioProducto5;
                        document.getElementById("precioProducto5").textContent = total5;
                        document.getElementById("cantProducto5").textContent = cant5;
                        document.getElementById("nombreProducto5").textContent = document.getElementById("selectorQuintoProducto").childNodes[(producto5*2)+3].innerText;
                        
                    }
                    }


function pagoFinal(){
    let precioFinal;
    let iva;
    let totalFinal;
   

    precioFinal = total1 + total2 + total3 + total4 + total5;
    console.log(total1);
    console.log(total5);
    iva = precioFinal*0.21;

    if(document.getElementById("Pagar").value == 2){
        totalFinal = (precioFinal + iva) + (precioFinal + iva)*0.75;
    }
    else{
        totalFinal = (precioFinal + iva);
    }
    
    

    document.getElementById("precioFinal").textContent = precioFinal;
    document.getElementById("iva").textContent = iva;
    document.getElementById("total").textContent = totalFinal;
}



//document.getElementById("Pagar").style.display="block"; Con esto intenté hacer que el cuadro de forma de pago quede arriba de Total pagar cuando se imprime
function printer(){
    let div = document.getElementById("estoSeImprime")
    let name = document.getElementById("clienteNombre").value;
    document.getElementById("pyc1").style.display = "none";
    document.getElementById("pyc2").style.display = "none";
    document.getElementById("pyc3").style.display = "none";
    document.getElementById("pyc4").style.display = "none";
    document.getElementById("pyc5").style.display = "none";
    
    var formaPago = document.getElementById("Pagar").value;
    
    if (formaPago == 1) {
        formaPago = " Ahora 12"
    } else if (formaPago == 2) {
        formaPago = " Ahora 18"
    } else{formaPago = " Contado"}
   

    div.innerHTML = "<html>" +
        "<body>" +
        document.getElementById("nombreCliente").textContent +
        name  +
        document.getElementById("primerProducto").outerHTML +
        document.getElementById("segundoProducto").outerHTML +
        document.getElementById("tercerProducto").outerHTML +
        document.getElementById("cuartoProducto").outerHTML +
        document.getElementById("quintoProducto").outerHTML +
        document.getElementById("formaPagoTabla1").outerHTML +
        formaPago +
        document.getElementById("totalPagar").outerHTML +
        "</body></html>"

    document.body.style.visibility = "hidden"
    div.style.visibility = "visible"

    window.print()

    document.body.style.visibility = "visible"
    div.innerHTML = ""

    document.getElementById("pyc1").style.display = "block";
    document.getElementById("pyc2").style.display = "block";
    document.getElementById("pyc3").style.display = "block";
    document.getElementById("pyc4").style.display = "block";
    document.getElementById("pyc5").style.display = "block";
    /*No sé por qué cuando se imprime el cuadro "Total a pagar" se pone al lado del de "forma de pago".
    Probé cambiandole la propiedad bottom, pero no funcionó
    ¿Hay alguna manera de hacer esto*/
}




    
    window.onload = function()
    {
        var z = ["ok1", "ok2", "ok3", "ok4", "ok5"];
        document.getElementById("pdf")

        .addEventListener("click",()=> 
        {
         document.getElementById("pdf").style.display="none";
         document.getElementById("print").style.display="none";
         var z = ["ok1", "ok2", "ok3", "ok4", "ok5"];
         var a = 0;
     
      
            while(a<5)
            {
                document.getElementById(z[a]).style.display = "none";
                //console.log(z[a]);
                //console.log(document.getElementById(z[a]));
                a++
            }
            document.getElementById("añadirProducto").style.display="none";
            document.getElementById("eliminarProducto").style.display="none";
            document.getElementById("fin").style.display="none";
        
            const invoice = this.document.getElementById("estoEsPDF");
            var opt = 
            {
                filename:     'Your Favourite Only Budget Calculator',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 , /*margintop: 5*/},
                jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait', /*margintop: 5*/ }

            };
         html2pdf().from(invoice).set(opt).save();
         document.getElementsById("ok1").style.display="block"; 
         document.getElementsById("ok2").style.display="block";
         document.getElementsById("ok3").style.display="block";
         document.getElementsById("ok4").style.display="block";
         document.getElementsById("ok5").style.display="block";
         
         
        })
         
    }
        

    //¿Cómo puedo hacer para setear una altura para que el pdf no que sobre el margen superior?
    //Intenté hacer que la página vuelva al estado original, como lo hice con imprimir, pero no se me ocurrió una forma de hacerlo.
    //¿Como puedo solucionar esas cosas?
      
    /*Yo si a los botones los edito por clase, y no por id, no funciona. Lo tengo que hacer por id*/
      //document.getElementsById("ok1").style.display="none"; 
      //document.getElementsById("ok2").style.display="none";
      //document.getElementsById("ok3").style.display="none";
      //document.getElementsById("ok4").style.display="none";
     // document.getElementsById("ok5").style.display="none";

    document.getElementsById("ok1").style.display="inlineblock"; 
    document.getElementsById("ok2").style.display="inlineblock";
    document.getElementsById("ok3").style.display="inlineblock";
    document.getElementsById("ok4").style.display="inlineblock";
    document.getElementsById("ok5").style.display="inlineblock";