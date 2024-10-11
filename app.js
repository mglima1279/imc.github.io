var imcFin, condition, weightToNormal;

function calculateIMC(){
    const name = document.getElementById("name").value;
    var sex = document.querySelectorAll('input[type=radio]');

    if(sex[0].checked){
        sex = "M";
    }else{
        sex = "F";
    }

    var 
        weight = parseFloat(document.getElementById('weight').value),
        height = parseFloat(document.getElementById('height').value)
    ;

    var imc = weight / Math.pow(height / 100, 2);

    switch(sex){
        case "M":
            calcM(imc, weight, height);
            break;

        case "F":
            calcF(imc, weight, height);
            break;
    }

    fim(name, condition, imc, weightToNormal);
}

function clearForm(){
    result = document.getElementById('result').style.display = "none";
}

function fim(nameFin, conditionFin, imcFin, weightToNormalFin) {
    var result = document.getElementById('result');

    result.style.display = 'flex';

    var 
    nameSlot = document.getElementById("result-name"),
    imcSlot = document.getElementById("imc"),
    conditionSlot = document.getElementById("cond"),
    pesoSlot = document.getElementById("peso")
    ;

    nameSlot.innerHTML = nameFin;
    imcSlot.innerHTML = imcFin.toFixed(1);
    conditionSlot.innerHTML = conditionFin;
    pesoSlot.innerHTML = weightToNormalFin >= 0 ? 
        `Você precisa ganhar ${weightToNormalFin.toFixed(1)} kg para alcançar o peso normal.` : 
        `Você precisa perder ${(-weightToNormalFin).toFixed(1)} kg para alcançar o peso normal.`;
}

function calcM(imc, weight, height){
    if(imc <= 20.7){
        condition = "Abaixo do peso";
        weightToNormal = (20.7 * Math.pow(height / 100, 2)) - weight;
    } else if(imc <= 26.4){
        condition = "Peso normal";
        weightToNormal = 0;
    } else if(imc <= 27.8){
        condition = "Pouco acima do peso";
        weightToNormal = weight - (26.4 * Math.pow(height / 100, 2));
    } else if(imc <= 31.1){
        condition = "Acima do peso";
        weightToNormal = weight - (26.4 * Math.pow(height / 100, 2));
    } else{
        condition = "Obesidade";
        weightToNormal = weight - (26.4 * Math.pow(height / 100, 2));
    }
}

function calcF(imc, weight, height){
    if(imc <= 19.1){
        condition = "Abaixo do peso";
        weightToNormal = (19.1 * Math.pow(height / 100, 2)) - weight;
    } else if(imc <= 25.8){
        condition = "Peso normal";
        weightToNormal = 0;
    } else if(imc <= 27.3){
        condition = "Pouco acima do peso";
        weightToNormal = weight - (25.8 * Math.pow(height / 100, 2));
    } else if(imc <= 32.3){
        condition = "Acima do peso";
        weightToNormal = weight - (25.8 * Math.pow(height / 100, 2));
    } else{
        condition = "Obesidade";
        weightToNormal = weight - (25.8 * Math.pow(height / 100, 2));
    }
}
