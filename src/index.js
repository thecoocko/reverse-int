module.exports = function reverse(n) {
    if (Math.sign(n) === -1) {
        n = n.toString().split('');
        n.splice(0, 1);
        return n.reverse().join('');
    }else {
        n = n.toString().split('');
        return n.reverse().join('');
    }
}
