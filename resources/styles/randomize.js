function multiplyX() {
    let x = Math.floor(Math.random()*401)+250;
    return x;
}

function multiplyY() {
    let y = Math.floor(Math.random()*250);
    return y;
}

for (i = 0; i < 14; i++) {
    console.log(multiplyY());
}