//Lecture Blocks and IIFEs


//we can use blocks without iifes or loops
{
    const a = 1;
    let b = 2;
    var c = 5;
}

//console.log(a+b);

//ES 5

(function() {
    var c = 3;
})();

console.log(c);