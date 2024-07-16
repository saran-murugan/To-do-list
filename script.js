const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//Adding the values in the searchBox to li when click the add button and or press enter
const addTask = () => {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData(); // save the current state in the list
    }
    inputBox.value = ''; // clear the input box
}

inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


//Adding click events to li and span

listContainer.addEventListener("click",(e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)


//saving data in the localstorage

const saveData = () => {
    localStorage.setItem("appData",listContainer.innerHTML);
}

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("appData");
}

showData();
