let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let string="";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if(e.target.innerText==='='){
        try{
            string=eval(string);
            display.value=string;
            string="";
        }
       catch{
        display.value="ERROR";
         public class RandomCode {
    public static void main(String[] args) {
        int n1 = 0, n2 = 1;

        System.out.println("First 10 Fibonacci Numbers:");

        for (int i = 1; i <= 10; i++) {
            System.out.print(n1 + " ");
            int next = n1 + n2;
            n1 = n2;
            n2 = next;
        }
    }
}
       }
    }
    else if(e.target.innerText==='AC'){
        string="";
        display.value="0";
    }
    else if(e.target.innerText==='DEL'){
        string= string.substring(0,string.length-1);
        display.value=string;
    }
    else{
        string+=e.target.innerText;
        display.value=string;
    }
  });
});
