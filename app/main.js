function one() {
    const length = parseInt(document.getElementById('length').value);
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const perimeter = (length + width) * 2;
    const square = perimeter * height;
    const tin_of_paint=16;
    const answer=Math.ceil(square/tin_of_paint);
    alert(answer+' банок необходимо.');
}
function two(){
    let top_price = parseInt(document.getElementById('A1').value);
    let middle_price = parseInt(document.getElementById('A2').value);
    let bottom_price = parseInt(document.getElementById('A3').value);

    let prices = [top_price, middle_price, bottom_price];
    function bubbleSort(a, b){
        if (a < b){return 1;}
        else if (a >= b){return -1;}}
    prices.sort(bubbleSort);
    top_price=prices[0];
    middle_price=prices[1];
    bottom_price=prices[2];

    let top_capacity = parseInt(document.getElementById('B1').value);
    let middle_capacity = parseInt(document.getElementById('B2').value);
    let bottom_capacity = parseInt(document.getElementById('B3').value);
    let capacities = [top_capacity, middle_capacity, bottom_capacity];
    capacities.sort(bubbleSort);
    top_capacity=capacities[0];
    middle_capacity=capacities[1];
    bottom_capacity=capacities[2];

    const best_case = top_price * top_capacity
        + middle_price * middle_capacity
        +bottom_price * bottom_capacity;
    alert('В лучшем случае вы заработаете ' + best_case);

}
function three() {
    let number = document.getElementById('ticket_number').value;
    while (number.length != 6) {
        number = '0' + number;
    }
    let num1 = 0, num2 = 0;
    for (let i = 0; i < 6; i++) {
    i <= 2 ? num1 += parseInt(number.charAt(i)) : num2 += parseInt(number.charAt(i));
    }
    alert(num1 == num2 ? 'YES' : 'NO');
}
function four_one() {
    const age = parseInt(prompt('Введите ваш возраст'));
    if (age >= 0 && age <= 12){alert(`Вы ребенок, вам ${age}`);}
    else if (age > 12 && age <= 18){alert(`Вы подросток, вам ${age}`);}
    else if (age > 18 && age <= 60){alert(`Вы взрослый, вам ${age}`);}
    else if (age > 60 && age == 150){alert(`Вы пенсионер, вам ${age}`);}
}
function four_two(){
    switch (parseInt(prompt('Введите число от 1 до 9'))){
        case 0:{alert(')'); break;}
        case 1:{alert('!'); break;}
        case 2:{alert('@'); break;}
        case 3:{alert('#'); break;}
        case 4:{alert('$'); break;}
        case 5:{alert('%'); break;}
        case 6:{alert('^'); break;}
        case 7:{alert('&'); break;}
        case 8:{alert('*'); break;}
        case 9:{alert('('); break;}
    }
}

