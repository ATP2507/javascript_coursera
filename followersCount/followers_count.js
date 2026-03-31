let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;

}
function resetCount(){
    count=0;
    displayCount();
}

function checkCountValue(){
    if(count===10){
        alert("Your insta post gained 10 followers! Congratulations!!")
    }
    else if(count===20){
        alert("Your insta post gained 20 followers! Congratulations!!")
    }
}