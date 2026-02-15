// BUTTONS
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");

// ❤️ YES button
yesBtn.addEventListener("click", ()=>{
    result.innerHTML="<div class='emoji'>You went ahead and pressed YES, huh? Figures. 😏 </div>";

    // gradient background
   
   

    // hearts
    setInterval(()=>{
        const heart=document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="🌸";
        heart.style.left=Math.random()*100+"vw";
        heart.style.fontSize=(Math.random()*20+20)+"px";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),3000);
    },200);
});

// 😈 NO button run away
function moveNoBtn(){
  const x=Math.random()*(window.innerWidth-100);
  const y=Math.random()*(window.innerHeight-50);
  noBtn.style.transition="left 0.2s ease, top 0.2s ease";
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";
}
noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("click", moveNoBtn);





// ✨ MAGIC CURSOR
const cursor = document.createElement("div");
cursor.className="magic-cursor";
document.body.appendChild(cursor);

const blur = document.createElement("div");
blur.className="cursor-blur";
document.body.appendChild(blur);

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

    blur.style.left=e.clientX+"px";
    blur.style.top=e.clientY+"px";
});

// cursor hover effect on buttons
document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("mouseenter", ()=>{
        cursor.style.transform="translate(-50%,-50%) scale(2)";
        cursor.style.background="hotpink";
    });
    btn.addEventListener("mouseleave", ()=>{
        cursor.style.transform="translate(-50%,-50%) scale(1)";
        cursor.style.background="white";
    });
});