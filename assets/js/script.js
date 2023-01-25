// Task:
//      Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
//  var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2) resultin neticesi bu yazilisa gore
//  50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi


class CustomMatch {
    constructor(num) {
        this.num = num;
    }

    plus(num1) {
        this.num += num1;
        return this;
    }
    minus(num2) {
        this.num -= num2;
        return this;
    }
    multiply(num3) {
        this.num *= num3;
        return this;
    }
    divide(num4) {
        this.num /= num4;
        return this;
    }
}
let result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result);
