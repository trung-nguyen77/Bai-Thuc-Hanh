function isPrime(number) {
    let check = true;
    if (number < 2){
        check = false;
    }else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                check = false;
                break;
            }
        }
    }
    if (check) {
        document.getElementById('result').innerHTML = (number + ' is a Prime number');
        return check;
    } else {
        document.getElementById('result').value = (number + ' is not Prime number');
        return check;
    }
}
isPrime(number)