const ApiUrl = "https://yesno.wtf/api";
const gifHolder=document.getElementById("gifHolder");
const yesbtn=document.getElementById("yes");
const nobtn=document.getElementById("no");
let answer="";
let score= 0;
let counter=0;
const populate=(data)=>{
    counter+=1
    document.getElementById("counter").innerText=counter+")"
    gifHolder.setAttribute("src",data.image)
    answer=data.answer
}
const getData=()=>fetch(ApiUrl)
.then((res) => res.json())
.then((data) => populate(data));
getData()


const setScore = (point)=>{
    score+=point
    document.getElementById("score").innerText = score;
    getData()
}
yesbtn.addEventListener("click",()=>{
    if(answer=="no")
        setScore(1)
    else
        setScore(-1)
})
nobtn.addEventListener("click",()=>{
    if(answer=="no")
        setScore(1)
    else
        setScore(-1)
})

