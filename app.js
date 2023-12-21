const colors = ['blue', 'Green', 'black', 'white', 'pink', 'yellow', 'brown', 'chocolate', 'indigo', 'violet', 'purple', 'cream', 'ash', 'red']

const btn = document.querySelector(".btn");
const color = document.querySelector("#color");

const randomNumber = () =>{
    return Math.floor(Math.random() * colors.length)
};

btn.addEventListener("click", ()=>{
    const num = randomNumber()
    document.body.style.backgroundColor = colors[num]
    color.textContent = colors[num]
});