function search(){  
    const list1= ["inicio", "mision", "publico"]
    const list2= ["comienzo", "beneficio", "beneficios", "razones", "consejos"]
    const list3= ["libros", "datos", "lista"]
    const list4= ["sugerencia", "queja", "quejas", "reclamo", "reclamos"]
    const list5= ["registro", "inscripcion"]
    const list6= ["personal", "cuenta"]
    var obje = (document.getElementById("sbar")).value;
    console.log(obje);
    if(list1.indexOf(obje) > -1){
        console.log("lo encontro en 1")
        window.location.href = "index_main.html";
    }
    else if(list2.indexOf(obje) > -1){
        console.log("lo encontro en 2")
        window.location.href = "index_Motivacion.html";
    }
    else if(list3.indexOf(obje) > -1){
        console.log("lo encontro en 3")
        window.location.href = "index_libros.html";
    }
    else if(list4.indexOf(obje) > -1){
        console.log("lo encontro en 4")
        window.location.href = "index_sugerencias.html";
    }
    else if(list5.indexOf(obje) > -1){
        console.log("lo encontro en 5")
        window.location.href = "index_registro.html";
    }
    else if(list6.indexOf(obje) > -1){
        console.log("lo encontro en 6")
        window.location.href = "index_libros.html";
    };

   };  