let btn=document.querySelector('button')
let qutxt=document.querySelector('.txt')
let quaut=document.querySelector('.aname')
let soundbtn=document.querySelector('.sound')
let copybtn=document.querySelector('.copy')
let twwetbtn=document.querySelector('.twitter')

function randqou() {
    btn.innerText= "Loading...";
    btn.classList.add('loading');

    fetch("https://api.quotable.io/random").then(res =>res.json()).then(result =>{
     //for random quotes
       
   qutxt.innerText = result.content;
   quaut.innerText = result.author;
   btn.innerText = "NEW QUOTE";
   btn.classList.remove('.loading')

    })    
}


soundbtn.addEventListener('click',()=>{

    let snd=new SpeechSynthesisUtterance (`${qutxt.innerText} BY ${quaut.innerText}`)

    speechSynthesis.speak(snd);
})


copybtn.addEventListener('click',()=>{

    navigator.clipboard.writeText(`${qutxt.innerText} BY ${quaut.innerText}`)
})


twwetbtn.addEventListener('click',()=>{
    let twwt = `https://twitter.com/intent/tweet?url=${qutxt.innerText} BY ${quaut.innerText}`;
//to open text in twiiter 
    window.open(twwt,"_blank")
})


btn.addEventListener('click',randqou)