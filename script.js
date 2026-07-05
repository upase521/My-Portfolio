const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(".hidden").forEach(section=>{
    observer.observe(section);
});

function sendmsg() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    if(name==="" || email==="" || subject==="" || message===""){
        alert('Please fill all the fields.');
        return;
    }
    else {
    alert('Message sent!');
}
}

