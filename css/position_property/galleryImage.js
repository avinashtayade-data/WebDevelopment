let arr=document.querySelector("#arrow");
console.log(arr);
arr.addEventListener("click",()=>{
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
});
