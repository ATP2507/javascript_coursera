function submitFeedback(){
    const username=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const email=document.getElementById('email').value;
    const job=document.getElementById('job').value;
    const designation=document.getElementById('designation').value;
    const product=document.getElementById('productType').value;
    const feedback=document.getElementById('feedbackText').value;
    const userExp=document.getElementById('experienceText').value;
    document.getElementById('userProductChoise2').innerHTML = product;

    
    alert("Thank you for your valuable feedback");
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoise').innerHTML = product;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = userExp;
    document.getElementById('userInfo').style.display = 'block';

};
const submitButton=document.getElementById('submitBtn');
submitButton.onclick=submitFeedback;
document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        submitFeedback();
    }
});