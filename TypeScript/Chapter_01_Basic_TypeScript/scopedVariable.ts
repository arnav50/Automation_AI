
function scopeVAr() {

    var a: number = 10;
    var globalVar = "I am a function-scoped Variable";
    console.log(globalVar);
    console.log(a);

    {
        var a: number = 30;
        console.log(a);
    }
    console.log(a);
}
scopeVAr();

function scopeLet() {

    let c: number = 50;
    let scopedLet = "I am a block-Scoped";
    console.log(c);
    console.log(scopedLet);
    {

        let c: number = 70;
        console.log(c);

    }

    console.log(c);
}

scopeLet();