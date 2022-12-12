// 数据1：
const num_1 = [1, 2, 3, 4, 5]
const num_2 = [2, 3, 4, 5, 6, 8, 10]

// 数据2
const objArr_1 = [
    {userId: 1,userName: '张海洋'}, 
    {userId: 2,userName: '王小晓'},
    {userId: 3,userName: '李天霸'},
    {userId: 4,userName: '李好'}]

const objArr_2 = [
    {userId: 1,userName: '张海洋'}, 
    {userId: 2,userName: '王小晓'}, 
    {userId: 6,userName: '吴小飞'}, 
    {userId: 8,userName: '唐三'}]

/**
 *
 * @desc 数组交集 arrIntersection (arr_1,arr_2, key)
 * @param {Array,Array} arr_1,arr_2：原数组
 * @param {String} key：关键字
 * @return {Array} 返回一个数组
*/

function arrIntersection(arr_1, arr_2, key) {
   return arr_1.filter(item => key ? arr_2.map(it => it[key]).includes(item[key]) : arr_2.includes(item))
}

// 测试
console.log(arrIntersection(num_1, num_2))
console.log(arrIntersection(objArr_1, objArr_2, 'userId'))