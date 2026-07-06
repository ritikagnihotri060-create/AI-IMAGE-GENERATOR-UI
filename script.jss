const btn =
document.getElementById("genratorbtn")

btn.onclick = async ()=>{
    const prompt=
document.getElementById("prompt").value;
fetch("https://api.openai.com/v1/image/genration",){
 
    }
method:"POST",
 header:{
    "Content-Type":"application/json",
    "Authorization":Bearer YOUR_API_KEY",
 }
 body:json.stringify({
    mode1:"gpt-image-1",
    prompt:prompt,
    size:"1024x1024"
 })

 {
    const data =await response.json();
    document.getElementById("image").src=data.data[0].ur1;
    document.getElementById("image").style.display="block";
 }
 }
