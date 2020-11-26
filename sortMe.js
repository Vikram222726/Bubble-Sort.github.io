let arr = [], heights = [];

document.querySelector("#nArry").addEventListener("click", function () {
  let val = 0;
  for (x = 0; x < 18; x++) {
    arr[x] = document.createElement("div");
    arr[x].className = "common";
    arr[x].id = "id" + x;
    const hgt = Math.floor(Math.random() * 400) + 50;
    heights[x] = hgt;
    arr[x].style.height = hgt + "px";
    arr[x].style.left = val + "px";
    val += 50;
    arr[x].style.backgroundColor = "#33ffff";
    arr[x].style.outlineStyle = "solid";
    arr[x].style.outlineColor = "#0066ff";
    document.getElementById("container").appendChild(arr[x]);
  }
});

document.querySelector("#BSort").addEventListener("click", function () {
  let counter = 0;
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 18 - i - 1; j++) {
      setTimeout(function () {
        if (heights[j] > heights[j + 1]) {
          let temp = heights[j];
          heights[j] = heights[j + 1];
          heights[j + 1] = temp;
        }
        for (let k = 0; k < 18; k++) {
          arr[k].style.height = heights[k] + "px";
          if (k == j || k == j + 1) arr[k].style.backgroundColor = "yellow";
          else arr[k].style.backgroundColor = "#33ffff";
        }
      }, 250 * counter);

      counter += 1;
    }
  }
});

/*
document.querySelector('#BSort').addEventListener('click', function(){
    let counter=0, ctr=0;
    
    for(let i = 0 ; i < 18 ; i++){
        setTimeout(function(){
        for(let j = 0; j < (18-i-1) ; j++){
            let c = 0;
            if(heights[j] > heights[j+1]){
                const temp = heights[j];
                heights[j] = heights[j+1];
                heights[j+1] =temp;
            }
            setTimeout(function(){
                for(let k=0;k<18;k++){
                    arr[k].style.height = heights[k] + 'px';
                }
            }, 1000*counter);
            setTimeout(function(){
                arr[j].style.background = 'green';
                arr[j+1].style.background = 'green';
            }, 1000*c);
            setTimeout(function(){
                arr[j].style.background = '#33ffff';
                arr[j+1].style.background = '#33ffff';
            }, 1000*(1.23));
            c++;
            counter+=1;
        }}, ctr*1000);
        ctr++;
        arr[18-i-1].style.background = 'yellow';
    }
});
*/



/*
            let v1, v2, a1, a2, val1, val2;
            v1 = arr[j].style.height;
            v2 = arr[j+1].style.height;
            a1 = v1.split("p");
            a2 = v2.split("p");
            val1 = parseInt(a1[0], 10);
            val2 = parseInt(a2[0], 10);
            setTimeout(function(){
                if(val1 > val2){
                    arr[j].style.background = 'yellow';
                    arr[j+1].style.background = 'yellow';
                    const temp1 = arr[j].style.height;
                    arr[j].style.height = arr[j+1].style.height;
                    arr[j+1].style.height = temp1;
                }
            }, 0.01 * counter);
            arr[j].style.background = '#33ffff';
            arr[j+1].style.background = '#33ffff';

*/
