let length;
let width;

function calculateArea(){
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);
    let area = length*width;
    document.getElementById('result1').innerText=`The area of the rectangle is: ${area}`;
}
let g1,g2,g3;
function grocerysum(){
g1=parseFloat(document.getElementById('grocerry1').value);
g2=parseFloat(document.getElementById('grocerry2').value);
g3=parseFloat(document.getElementById('grocerry3').value);
let amt=g1+g2+g3;
document.getElementById('result2').innerText=`Total grocery amount:${amt}`;

}
