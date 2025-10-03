
function calculateBMI(){
    let weight=parseFloat(document.getElementById('weight').value);
    let height=parseFloat(document.getElementById('height').value);

    let bmi=weight/(height*height)
    let message=""
    if(bmi<=18.5){
        message="you piece of stick , go eat buddy you are underweight"
    }
    else if(bmi>18.5 && bmi<=25){
        message="You have a good body weight..keep it up"
    }
    else if(bmi>25 && bmi<=30){
        message="You fat ass,go loose some weight"
    }
    else {
        message="you are burden to earth,you fatty ass"
    }

    document.getElementById('formDiv').style.display = "none";
    document.getElementById('resultDiv').style.display = "block";

        // Show BMI value and message
    document.getElementById('bmiValue').innerText = "Your BMI: " + bmi;
    document.getElementById('bmiMessage').innerText = message;



}