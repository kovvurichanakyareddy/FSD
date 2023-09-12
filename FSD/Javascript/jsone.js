var a=10;
let name1='outside';
const pi=3.14
{
    let name1='inside';
    const pi=1.43
    a=20;
    console.log(name1)
    console.log(a)
    console.log(pi)
}
console.log(name1)
console.log(a)
console.log(pi)
document.getElementById("a").style.fontSize="8px";