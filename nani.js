function naveen()
{
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    if(username=="Naveen"&&password=="Nani2150")
    {
        window.open("index1.html")
    }
    else{
        alert("Invalid Credentials");
    }
}