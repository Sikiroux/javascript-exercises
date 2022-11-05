const sumAll = function(x, y) {
    let arr = [x, y];
    let initiaValue = 0;
    let a = x + 1;
    let b = y + 1;
    
     if (x < y) {
        for (i = x; i < y - 1; i++) {
            arr = arr.concat(Number(a));
            a++
        }
    } else if (!x < y) {
        for (i = y; i < x - 1; i++) {
            arr = arr.concat(Number(b));
            b++
        }
    } 

    if (x < 0 || y < 0) {
        return "ERROR";
    }
    
    
    
    
    //arrFinal = Number(arr.join("+"))
    result = arr.reduce((prev, current) => prev + current,
    initiaValue);
    return result
}

// Do not edit below this line
module.exports = sumAll;

/*const sumAll = function(x, y) {
    let base = x;
    let end = y;
    let a = "";
    if (x < y) {
        for (i = x; i < y; i++) {
            a ++
            let concNum = a.concat()
        }
    } else if (x > y) {
        for (i = y; i < x; i++) {
            a ++
            let concNum = a.concat()
        }
    }


};*/
/*
const sumAll = function(x, y) {
    let base = x;
    let end = y;
    let a = "";
    let result = 0;
    if (x < y) {
        for (i = x; i < y; i++) {
            a = x;
            ++a;
            let b;
            b += a
            b.join("+")
            result = b + x + y;
        }
    } else if (x > y) {
        for (i = y; i < x; i++) {
            a = y;
            ++a;
            let b;
            b += a
            b.join("+")
            result = b + x + y;
        
        }
    }
    return result;
};

*/