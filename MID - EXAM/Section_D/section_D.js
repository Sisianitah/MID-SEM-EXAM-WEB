function addItem() {
    let input = document.getElementById("itemInput");
    let item = input.value.trim(); // Remove extra spaces

    if (item === "") {
        alert("Please enter an item!"); // Prevent empty inputs
        return;
    }

    bucketList.push(item); // Add item to the array
    input.value = ""; // Clear input field
    displayList(); // Update the UI
}

function displayList() {
    let list = document.getElementById("bucketList");
    list.innerHTML = ""; // Clear previous list

    bucketList.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = function() { removeItem(index); }; // Attach delete function

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function removeItem(index) {
    bucketList.splice(index, 1); // Remove item from array
    displayList(); // Refresh the UI
}

let bucketList = [];

function addItem() {
    let input = document.getElementById("itemInput");
    let item = input.value.trim();

    if (item === "") {
        alert("Please enter an item!");
        return;
    }

    bucketList.push(item);
    input.value = "";
    displayList();
}

function displayList() {
    let list = document.getElementById("bucketList");
    list.innerHTML = "";

    bucketList.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = function() { removeItem(index); };

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function removeItem(index) {
    bucketList.splice(index, 1);
    displayList();
}






