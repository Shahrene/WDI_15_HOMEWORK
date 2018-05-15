

var sumOfMultiples = function (num) {
    var total = 0;
    for (var i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          console.log(i)
            total = total + i;
        }
    }
    console.log(total);
}

sumOfMultiples(process.argv);
