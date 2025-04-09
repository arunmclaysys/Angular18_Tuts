//named export
function func1add(a,b) {
    return a+b;
}

function func1sub(a,b) {
    return a-b;
}

function func1mul(a,b) {
    return a*b;
}

module.exports = {
    func1add,
    func1sub,
    func1mul
};

