
let data=[
    {
        Quetion:"1. What is JavaScript?",
        option_1:"a) JavaScript is a scripting language used to make the website interactive",
        option_2:"b) JavaScript is an assembly language used to make the website interactive",
        option_3:"c) JavaScript is a compiled language used to make the website interactive",
        option_4:"d) None of the mentioned",
        answere:"a) JavaScript is a scripting language used to make the website interactive",
    },
   {
        Quetion:"2. Which of the following is correct about JavaScript?",
        option_1:"a) JavaScript is an Object-Based language",
        option_2:"b) JavaScript is Assembly-language",
        option_3:"c) JavaScript is an Object-Oriented language",
        option_4:"d) JavaScript is a High-level language",
        answere:"a) JavaScript is an Object-Based language",
    },
      {
        Quetion:"3. Arrays in JavaScript are defined by which of the following statements?",
        option_1:"a) It is an ordered list of values",
        option_2:"b) It is an ordered list of objects",
        option_3:"c) It is an ordered list of string",
        option_4:"d) It is an ordered list of functions",
        answere:"a) It is an ordered list of values",
    },
        {
        Quetion:"4. Which of the following is not javascript data types?",
        option_1:"a) Null type",
        option_2:"b) Undefined type",
        option_3:"c) Number type",
        option_4:"d) All of the mentioned",
        answere:"d) All of the mentioned",
    },
       {
        Quetion:"5. Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        option_1:"a) Position",
        option_2:"b) Window",
        option_3:"c) Standard",
        option_4:"d) Location",
        answere:"b) Window",
    },
       {
        Quetion:"6. Why JavaScript Engine is needed?",
        option_1:"a) Both Compiling & Interpreting the JavaScript",
        option_2:"b) Parsing the javascript",
        option_3:"c) Interpreting the JavaScript",
        option_4:"d) Compiling the JavaScript",
        answere:"c) Interpreting the JavaScript",
    },

       {
        Quetion:"7. Why event handlers is needed in JS?",
        option_1:"a) Allows JavaScript code to alter the behaviour of windows",
        option_2:"b) Adds innerHTML page to the code",
        option_3:"c) Change the server location",
        option_4:"d) Performs handling of exceptions and occurrences",
        answere:"a) Allows JavaScript code to alter the behaviour of windows",
    },
        {
        Quetion:"8. Which of the following is the property that is triggered in response to JS errors?",
        option_1:"a) onclick",
        option_2:"b) onerror",
        option_3:"c) onmessage",
        option_4:"d) onexception",
        answere:"b) onerror",
    },
    {
        Quetion:"9. Which of the following is not an error in JavaScript?",
        option_1:"a) Missing of Bracket",
        option_2:"b) Division by zero",
        option_3:"c) Syntax error",
        option_4:"d) Missing of semicolons",
        answere:"b) Division by zero",
    },
     {
        Quetion:"10. What is JavaScript?",
        option_1:"a) JavaScript is a scripting language used to make the website interactive",
        option_2:"b) JavaScript is an assembly language used to make the website interactive",
        option_3:"c) JavaScript is a compiled language used to make the website interactive",
        option_4:"d) None of the mentioned",
        answere:"a) JavaScript is a scripting language used to make the website interactive",
    },

]
let i=0;
marks=0;
const strat=()=>
{
    let d=document.getElementById("parent");
    d.setAttribute("class","d-none");

    document.getElementById("start").style.display="block";
    if(i==0)
    {
        next();
    }

}
const next =()=>
{
let item=data[i];
let Q=document.getElementById("Q");
Q.innerText=item.Quetion;

let O1=document.getElementById("O1");
O1.setAttribute("value",item.option_1);
let i1=document.getElementById("i1");
i1.innerText=item.option_1;

let O2=document.getElementById("O2");
O2.setAttribute("value",item.option_2);
let i2=document.getElementById("i2");
i2.innerText=item.option_2;

let O3=document.getElementById("O3");
O3.setAttribute("value",item.option_3);
let i3=document.getElementById("i3");
i3.innerText=item.option_3;

let O4=document.getElementById("O4");
O4.setAttribute("value",item.option_4);
let i4=document.getElementById("i4");
i4.innerText=item.option_4;

document.getElementById("f1").reset();
document.getElementById("b2").style.display="none";
}


function my(x)
{
 document.getElementById("b2").style.display="block";
 let item=data[i];
item.user_ans=x;
 if(x==item.answere)
 {
    marks+=2;
 }
 i++;
 if(i==10)
    {
        alert(marks);
        console.log(data)
        show();
    }
}

const show=()=>
{
for(let i=0;i<data.length;i++)
{
const item=data[i];
document.getElementById("start").style.display="none";

let m=document.createElement("h3");
m.innerHTML=marks+"/20";
m.setAttribute("class","text-center")

let q=document.createElement("h3");
q.innerHTML=item.Quetion;

let o1=document.createElement("h3");
o1.innerHTML=item.option_1;

let o2=document.createElement("h3");
o2.innerHTML=item.option_2;

let o3=document.createElement("h3");
o3.innerHTML=item.option_3;

let o4=document.createElement("h3");
o4.innerHTML=item.option_4;

let an=document.createElement("h3");
an.innerHTML="<h3>ANSWERE</h3>"+item.answere+"</br>";
an.setAttribute("class","bg-warning");

let ua=document.createElement("h3");
ua.innerHTML="<h3>YOUR ANSWERE</h3>"+item.user_ans;
ua.setAttribute("class","bg-danger");


let data1=document.createElement("div");
data1.setAttribute("class","border mt-5 bg-dark text-white p-lg-5")
data1.appendChild(m);
data1.appendChild(q);
data1.appendChild(o1);
data1.appendChild(o2);
data1.appendChild(o3);
data1.appendChild(o4);
data1.appendChild(an);
data1.appendChild(ua);

let data2=document.getElementById("data");
data2.appendChild(data1);

}
}