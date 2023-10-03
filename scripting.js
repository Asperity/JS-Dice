function rollDice()
{
    const num = Math.floor(Math.random()*6)+1;
    alert(num);
    const num1 = Math.floor(Math.random()*6)+1;
    alert(num1);
    const add = num + num1;
    alert(add);
}

const buttons = document.querySelectorAll(`button`);

for(const button of buttons)
{
    button.addEventListener("click", rollDice);
}