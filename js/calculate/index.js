
    let stratigies = {
        'S':function(salary){
            return salary * 5;
        },
        'A':function(salary){
            return salary * 3
        },
        'B':function(salary){
            return salary * 2
        },
        'C':function(salary){
            return salary * 1
        },
        'D':function(salary){
            return salary * 0;
        }

    }
function calculate(level, salary) {
    // if (level === 'S') {
    //     return salary * 5
    // };
    // if (level === 'A') {
    //     return salary * 3
    // };
    // if (level === 'B') {
    //     return salary * 2
    // };
    // if (level === 'C') {
    //     return salary * 1
    // };
    // if (level === 'D') {
    //     return salary * 0
    // };

    return stratigies[level](salary);

}
console.log(calculate('S',10000));
