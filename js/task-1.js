const getItem = document.querySelectorAll(".item");
console.log(`Categories: ${getItem.length}`)

getItem.forEach(item => {
    const header = item.querySelector("h2");
    const getList = item.querySelectorAll("li");
    console.log(`Category: ${header.textContent}`);
    console.log(`Elements: ${getList.length}`);
    
});
