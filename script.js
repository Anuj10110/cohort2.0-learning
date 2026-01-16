let main = document.querySelector('main')
let btn = document.querySelector('button')

let arr =   [
    "Anuj sochta hai HTML seekh ke hacker ban jayega",
    "CSS itna confuse karta hai ki dimag ka layout bigad jata hai",
    "JavaScript ne toh sabki neend uda rakhi hai",
    "Bugs itne hain ki lagta hai project nahi jungle hai",
    "Console.log zindagi ka sahara ban chuka hai",
    "Code chal gaya toh khud pe bharosa ho jata hai",
    "Error aaye toh bas Google bhagwan yaad aata hai",
    "Git push karte waqt heart attack aata hai",
    "Commit message hota hai: final_final_v3_last",
    "StackOverflow ke bina coder adhoora hai",
    "Frontend banate banate backend ka darr lagta hai",
    "Client bole simple chahiye, coder bole impossible",
    "Project deadline aate hi laptop slow ho jata hai",
    "Code likhne se zyada toh debug hi hota hai",
    "Dark mode na ho toh coding hi nahi hoti",
    "Ek bug fix karo, teen naye paida ho jate hain",
    "Internet na ho toh coder bhi bekaar ho jata hai",
    "Tutorial dekh ke lagta hai sab aata hai, project me sab bhool jata hai",
    "Salary ka sapna, internship ka reality",
    "Anuj future ka developer hai, bas thoda time aur coffee chahiye"
];

btn.addEventListener('click', function () {
    let x = Math.random() * 100;
    let y = Math.random() * 100;

    let scale = Math.floor(Math.random() * 3);

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rot = Math.floor(Math.random() * 360);

    let h1 = document.createElement('h1');

    h1.innerHTML = arr[Math.floor(Math.random() * arr.length)];

    h1.style.position = 'absolute';

    h1.style.left = `${x}%`;
    h1.style.top = `${y}%`;

    h1.style.rotate = `${rot}deg`;

    h1.style.color = `rgb(${r}, ${g}, ${b})`;

    h1.style.scale = scale;

    main.appendChild(h1);
    
})