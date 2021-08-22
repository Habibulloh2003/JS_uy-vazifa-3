while (true) {
    var son = prompt("son kiriting");
    
    if (son !== NaN && son % 2 == 0) {
        alert("Juft son kiritingiz")
    }
    else if (son !== NaN && son % 2 > 0){
        alert("Toq son kiritingiz")
    }
    else{
        var son = prompt("son kiriting");
    }
}

