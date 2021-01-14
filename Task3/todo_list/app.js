btn=document.getElementById('additem');
btn.addEventListener('click',AddItem);

function AddItem(){
  //item value
  let ivalue=document.getElementById('itemvalue');
  let span=document.getElementById('msg');

  if (ivalue.value==''){
    span.innerText='Please enter any job';
  }
  else {
    span.innerText='';
    //creat span hold the itemvalue
    let label=document.createElement('label');
    label.textContent=ivalue.value;
    //clear input value
    ivalue.value='';
    //create li element
    let li=document.createElement('li');
    //creat delete button
    let deletebutton=document.createElement('button');
    deletebutton.innerHTML='<i class="fas fa-times"></i>';
    deletebutton.setAttribute('class','deleteitem');
    //creat Complete button
    let compleatbutton=document.createElement('button');
    compleatbutton.innerHTML='<i class="fas fa-check"></i>';
    compleatbutton.setAttribute('class','completedeitem');

    let list=document.getElementById('items');
     li.appendChild(label);
     li.appendChild(compleatbutton);
     li.appendChild(deletebutton);
     list.appendChild(li);
   }
}

let list=document.getElementById('items');
list.addEventListener('click', DeleteItem);

function DeleteItem(event){
  if (event.target.classList.contains('deleteitem')){
    let li=event.target.parentElement;
    list.removeChild(li);
  }
  else if (event.target.classList.contains('completedeitem')){
    let li=event.target.parentElement;
    li.firstChild.style.opacity= 0.5;
    li.style.textDecoration='line-through';
  }

}
