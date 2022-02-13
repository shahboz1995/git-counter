var count = 0;
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click" , function(e){
        const styles = e.currentTarget.classList;
        console.log(styles);
        if (styles.contains("decrease")){
            count --;
         } else if (Array.from(styles).includes("increase")){
                count++;
            }else{
                count = 0;
            }
            if (count < 0) {
                value.style.color = "red";
            } else if (count > 0){
                value.style.color ="green";                
            }else{
                value.style.color ="black";
            }
            value.textContent =count;
    });
});