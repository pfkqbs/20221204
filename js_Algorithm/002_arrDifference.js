// 数据1：数组 （数字数组）
const num_1 = [1, 2, 3, 4, 5]
const num_2 = [2, 3, 4, 5, 6, 8, 10]

// 数据2：（对象数组）
const objArr_1 = [
    {userId: 1,userName: '张海洋'}, 
    { userId: 2,userName: '王小晓'}, 
    {userId: 3,userName: '李天霸'}, 
    {userId: 4,userName: '李好'}]

const objArr_2 = [
    {userId: 1,userName: '张海洋'}, 
    {userId: 2,userName: '王小晓'}, 
    {userId: 6,userName: '吴小飞'}, 
    {userId: 8,userName: '唐三'}]

/**
 *
 * @desc 数组差集arrDifference(arr_1,arr_2, key)
 * @param {Array，Array} arr_1,arr_2：原数组
 * @param {String} key：关键字
 * @return {Array} 返回一个数组
 */

function arrDifference(arr_1, arr_2, key) {
    let duplicatesArr = arrRmDuplicates([...arr_1, ...arr_2], key) // arrRmDuplicates是前面提到的数组去重方法
    return duplicatesArr.filter(item => (![arr_1, arr_2].every(it => key ? (it.map(its => its[key]).includes(item[key])) : it.includes(item))))
}

// 测试
console.log(arrDifference(num_1, num_2))
console.log(arrDifference(objArr_1, objArr_2, 'userId'))