/**
 *
 * @desc 计算年龄 getAge(dateString)
 * @param dateString：出生日期的字符串
 * @return age 数字
*/

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// 测试
console.log(getAge("2016,8,6"));//6