const emojis = ["😀", "🤣", "🤩"];
let index = 0;
const size = emojis.length;

function changeEmoji() {
    index = (index + 1) % size;
    let ptag1 = document.getElementsByClassName("emoji")[0];
    ptag1.textContent = emojis[index];
}