let btn=document.getElementsByClassName('find')[0];
let sortbtn=document.getElementsByClassName('sort')[0];

btn.addEventListener('click', LinerSearch,false);

function createUl(name){
  let values=document.getElementById('array').value.split(' ');
  let div=document.getElementsByClassName('find/sort')[0];
  let ul=document.createElement('ul');
  let p=document.createElement('p');
  p.className=`${name}-steps`;
  div.appendChild(p);
  ul.className=name;
  for (var i=0;i<values.length;i++){
    let li=document.createElement('li');
    li.innerText=values[i];
    ul.appendChild(li);
  }
  div.appendChild(ul);
  return ul;
}

function LinerSearch(){
  ul=createUl('find');
  value=document.getElementById('value').value;
  let p=document.getElementsByClassName('find-steps')[0];
  let len=(ul.childNodes.length);

  for (var i=0; i<len; i++){
    let x=ul.childNodes[i].textContent;
    ul.childNodes[i].style.backgroundColor='rgb(204, 102, 0)';

    if (x===value){
      p.innerText=` ${value}  in the index ${(i+1)} of the array`;
      break;
    }
    else{
      p.innerText=` ${x} != ${value}`;
      ul.childNodes[i].style.backgroundColor='rgb(255, 217, 179)';
    }
  }
}
