let i,j;
let temp;

function swap(arr, index1, index2){
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function arrange(arr){
  for(i = 0; i < arr.length - 1; i++){
  for(j = 0; j < arr.length - 1; j++){
    if(arr[j] > arr[j+1]){
      swap(arr, j , j+1);
    }
  }
  }
  return arr;
}

result.innerHTML(arrange(["Home", 376, 465, 3, 46, 9]));
