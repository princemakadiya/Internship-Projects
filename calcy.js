let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText="*"
            screen.value = screenValue;
        }

        if(buttonText == '⌫'){
            n=screenValue.length;
            screenValue=screenValue.slice(0,n-1)
            screen.value=screenValue
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue.fontcolor("blue")
        }
        else if(buttonText=="sin"){
            screenValue= Math.sin(screenValue);
            screen.value=screenValue
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}
function aud(){
    let audy = new Audio("water Drop.mp3")
    audy.play();
}
function eql(){
    let aud=new Audio("click2.wav")
    aud.play();
}
function audi(){
    let aud=new Audio("wd.mp3")
    aud.play();
}
