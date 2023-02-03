window.onscroll = (e)=> headerScroll(e)

let oldScroll = 0,pos=0;
let h = 103;// the height of the header
let R = false;

let x = document.querySelector("header ul");
let y = document.querySelectorAll("header ul li");

const header = document.querySelector("header").style;

function headerScroll(e) {

    if(x.className === "nav-links"){
        R = false;
        h = 103;
    }else{
        R = true;
        h = 530;
    }
        

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        //if we are not at the top of the page
        if(oldScroll > this.scrollY){
            // if we are scrolling up
            header.position = "fixed"
            
            
            
            if(pos<h){
                if(!R)//if not in responsive mode
                    pos+=3;
                else
                    pos+=5;
            }else if(pos>=h && !R){
                pos = h;
            }
            header.background = "none";
            header.backgroundColor = "#a02f2f";

            
        }else{
            // if we are scrolling down
            if(pos>=0||pos>=h){
                if(!R)//if not in responsive mode
                    pos-=1.3;
                else
                    pos-=3;
            }

            
        }
        header.top = (pos-h)+"px"
        oldScroll = this.scrollY;  

    } else {
        header.background = "none";
        header.backgroundColor = "none";
        header.backgroundImage = "none";
        header.top = 0;
        pos = h;
        header.backgroundImage = "linear-gradient(to top, #00000000, #000000a4)";
        oldScroll = this.scrollY
    }  
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        setTimeout(()=>{
            let load = document.querySelector(".loading");
            load.style.opacity = "0";
            document.querySelector("body").style.overflow = "visible";
            setTimeout(()=>load.classList.add("loaded"),500);
        },500)
    }
};

const myResponse = ()=>{
            if (x.className === "nav-links") {
                x.className += " responsive";
                y.forEach((elem)=>{
                    elem.className = "responsive";
                });
            } else {
                x.className = "";
                x.className = "nav-links";
                y.forEach((elem)=>{
                    elem.className = "";
                });
            }

}

