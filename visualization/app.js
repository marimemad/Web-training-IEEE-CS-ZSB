function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


let btn=document.getElementsByClassName('find')[0];
let sortbtn=document.getElementsByClassName('sort')[0];

sortbtn.addEventListener('click', Help,false);
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
    ul.childNodes[i].style.backgroundColor='rgb(153, 194, 255)';

    if (x===value){
      p.innerText=` ${value}  in the index ${(i+1)} of the array`;
      break;
    }
    else{
      p.innerText=` ${x} != ${value}`;
      ul.childNodes[i].style.backgroundColor='rgb(255, 255, 255)';
      //sleep(500);
    }
  }
  }

function Help(){
  ul=createUl('sort');
  let p=document.getElementsByClassName('sort-steps')[0];
  let low=0;
  let len=(ul.childNodes.length);

  QuickSort(ul.childNodes,low,len);

}

function QuickSort(ul,low,len){
  let pi=sort(ul,low,len);
  if(low>=len){return ul};
  QuickSort(ul,low,pi);
  QuickSort(ul,pi+1,len);

}

function sort(ul,start,end){
  let poivt=ul[start];
  pointer=start;
  len=ul.length;
  for (let i=start; i<len ; i++){
    li=ul[i];

    if(li.textContent<poivt.textContent){

      pointer++;
      minli=ul[pointer];
      let x=li.textContent;
      let y=minli.textContent;


      li.innerText=y;
      minli.innerText=x;
    }
  }
  let pointerli=ul[pointer];  let startli=ul[start];
  x=pointerli.textContent;
  y=startli.textContent;
  startli.innerText=x;
  pointerli.innerText=y;

  return pointer;
}
