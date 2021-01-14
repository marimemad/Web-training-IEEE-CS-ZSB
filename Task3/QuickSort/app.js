let values = [];
let wid=10;
let state=[];

function setup(){
  createCanvas(windowWidth-20, windowHeight-20);
  values=new Array(floor(width/wid));
  for(let i=0; i<values.length; i++ ){
    values[i]=random(height);
    state[i]=-1;
  }
  QuickSort(values, 0, values.length-1);
}

async function QuickSort(array,start,end){
  if(start>=end){
    return;
  }
  let index =await partition(array,start,end);
  state[index]=-1;
  await Promise.all([
  QuickSort(array,start,index-1),
  QuickSort(array,index+1,end)
])
  // await QuickSort(array,start,index-1);
  // await QuickSort(array,index+1,end);
}


async function partition(array,start,end){

  for(let i=start; i<end; i++){
    state[i]=1;
  }

  let poivotIndex=start;
  let poivotValue=array[end];

  state[poivotIndex]=0;

  for (let i=start; i<end; i++){
    if (array[i]<poivotValue){
      await swap(array,i,poivotIndex);
      state[poivotIndex]=-1;
      poivotIndex++;
      state[poivotIndex]=0;
    }
  }
  await swap(array, poivotIndex ,end);

  for(let i=start; i<end; i++){
    if(i !=poivotIndex){
      state[i]=-1;
    }
    state[end] =-1;
  }

  return poivotIndex;
}

async function swap(array, a, b){
  await sleep(50);
  let temp=array[a];
  array[a]=array[b];
  array[b]=temp;
}

function draw(){
  background('#ccccff');
  for(let i=0; i<values.length; i++){
    stroke(50)
    if (state[i] == 0) {
      fill('#000066');
    } else if (state[i] == 1) {
      fill('#e600e6');
    }
    else {
      fill('#0066ff');
    }
    rect(i*wid, height-values[i] ,wid ,values[i]);
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
