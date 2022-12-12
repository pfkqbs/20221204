//生成随机数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min   
}

console.log('随机数',getRandom(100,200));


// 数组的随机排序：随机出现正序或者倒序！
let arr = [2,3,454,34,324,32]
arr.sort(randomSort)
function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}