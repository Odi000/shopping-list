const insert = document.querySelector('input')
,uList = document.querySelector('ul')
,mainButton = document.querySelector('button');

//Declaring the function
function addItem() {
if (Boolean(insert.value)){

const itemName = insert.value;
insert.value = '';

const item = document.createElement('li'),
     span = document.createElement('span'),
     btn = document.createElement('button');

item.appendChild(span);
item.appendChild(btn);

span.textContent = itemName;
btn.textContent = 'Delete';
btn.addEventListener('click', () => {
 uList.removeChild(item)
});

uList.appendChild(item);
insert.focus();
}
}

//The function when you Click the 'Add item' button
mainButton.addEventListener('click', addItem);

//If eneter is pressed the above function will run
function enter(){
     if(event.key === 'Enter') {
     addItem();
     }
}

//Trying the other way by using addEventListener function
/*
insert.addEventListener('keydown',(e) => {
     console.log(e);
     if(e.key === 'Enter'){
          addItem();
     }
})
*/