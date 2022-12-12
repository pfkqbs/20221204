/**
 *
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
 function arrayEqual (arr1, arr2) {
    // 首先要判断是否是数组,传进来的非数组,返回false
    if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
        return false;
    }
    if (arr1 === arr2) return true;
    if (arr1.length != arr2.length) return false;
    for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

/**
 * @desc 获取浏览器类型和版本
 * @return {String}
 */
function getExplore () {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                            (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

    // 根据关系进行判断
    if (sys.ie) return ('IE: ' + sys.ie);
    if (sys.edge) return ('EDGE: ' + sys.edge);
    if (sys.firefox) return ('Firefox: ' + sys.firefox);
    if (sys.chrome) return ('Chrome: ' + sys.chrome);
    if (sys.opera) return ('Opera: ' + sys.opera);
    if (sys.safari) return ('Safari: ' + sys.safari);
    return 'Unkonwn';
}

/**
 *
 * @desc 获取操作系统类型
 * @return {String}
 */
function getOS () {
    var userAgent = 'navigator' in window
        && 'userAgent' in navigator
        && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window
        && 'vendor' in navigator
        && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window
        && 'appVersion' in navigator
        && navigator.appVersion.toLowerCase() || '';

    if (/mac/i.test(appVersion))
        return 'MacOSX';
    if (/win/i.test(appVersion))
        return 'windows';
    if (/linux/i.test(appVersion))
        return 'linux';
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent))
        return 'ios';
    if (/android/i.test(userAgent))
        return 'android';
    if (/win/i.test(appVersion) && /phone/i.test(userAgent))
        return 'windowsPhone';
}

/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 */
function deepClone (values) {
    var copy = {};

    // Handle the 3 simple types, and null or undefined
    if (null == values || "object" != typeof values) return values;

    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }

    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }

    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (var attr in values) {
            if (values.hasOwnProperty(attr)) {
                copy[attr] = deepClone(values[attr]);
            }
        }
        return copy;
    }

    throw new Error("Unable to copy values! Its type isn't supported.");
}

/**
 *
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmptyObject (obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false
    return !Object.keys(obj).length
}

/**
 *
 * @desc 生成指定范围随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function randomNum (min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

/**
 *
 * @desc   现金额转大写
 * @param  {Number} n
 * @return {String}
 */
function digitUppercase (n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
}

/**
 *
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
function isEmail (str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isPhoneNum (str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}

/**
 * 去除空格的方法
 * @param str
 * @param type
 * all-所有空格,
 * preBehind-前后空格
 * previous-前面空格,
 * behind-后面空格
 */
function trim (str, type) {
    switch (type) {
        case 'all':
            return str.replace(/\s+/g, "");
        case 'preBehind':
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 'previous':
            return str.replace(/(^\s*)/g, "");
        case 'behind':
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}

/**
 * 字母大小写切换
 * @param str
 * @param type
 * FirstUpper - 首字母大写
 * FirstLower - 首字母小写
 * AllToggle - 全部大小写转换
 * AllUpper - 全部大写
 * AllLower - 全部小写
 */
function changeCase (str, type) {
    function ToggleCase (str) {
        var itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                } else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                } else {
                    itemText += item;
                }
            });
        return itemText;
    }

    switch (type) {
        case 'FirstUpper':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1);
            });
        case 'FirstLower':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1);
            });
        case 'AllToggle':
            return ToggleCase(str);
        case 'AllUpper':
            return str.toUpperCase();
        case 'AllLower':
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * 检测字符串类型
 * @param str
 * @param type
 */
function checkType (str, type) {
    switch (type) {
        case 'email':
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone':
            return /^1[3|4|5|7|8|9][0-9]{9}$/.test(str);
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
            return /^[0-9]+$/.test(str);
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        case 'text':
            return /^\w+$/.test(str);
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':
            return /^[a-z]+$/.test(str);
        case 'upper':
            return /^[A-Z]+$/.test(str);
        default:
            return true;
    }
}

/**
 * 检测密码强度
 * @param str
 * @returns {number}
 */
function checkPwd (str) {
    var nowLv = 0;
    if (str.length < 6) {
        return nowLv;
    }
    if (/[0-9]/.test(str)) {
        nowLv++;
    }
    if (/[a-z]/.test(str)) {
        nowLv++;
    }
    if (/[A-Z]/.test(str)) {
        nowLv++;
    }
    if (/[\.|-|_]/.test(str)) {
        nowLv++;
    }
    return nowLv;

}

/**
 * 随机生成指定长度的字符串
 * @param length
 * @returns {string}
 */
function random (length) {
    var str = Math.random().toString(36).substr(2);
    if (str.length >= length) {
        return str.substr(0, length);
    }
    str += random(length - str.length);
    return str;
}

/**
 * 统计给定字符串中,目标字符串出现的次数
 * @param str
 */
function countStr (str, target) {
    return str.split(target).length - 1;
}


/**
 * 格式化处理字符串
 * @param str
 * @param size-位数,默认3位
 * @param delimiter-连接符,默认为','
 */
function formatText (str, size, delimiter) {
    var _size = size || 3, _delimiter = delimiter || ',';
    var regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
    var reg = new RegExp(regText, 'g');
    return str.replace(reg, _delimiter);
}

/**
 * 找出字符串中最长的单词
 * @param str
 * @param splitType
 */
function longestWord (str, splitType) {
    var _splitType = splitType || /\s+/g,
        _max = 0, _item = '';
    var strArr = str.split(_splitType);
    strArr.forEach(function (item) {
        if (_max < item.length) {
            _max = item.length;
            _item = item;
        }
    });
    return { el: _item, max: _max };
}

/**
 * 数组去重es6和es5方法
 * @param arr
 * @returns {Array}
 */
function uniqueEs6 (arr) {
    return Array.from(new Set(arr))
}

function uniqueEs5 (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}


// JavaScript 版本

// `m`: the month (zero-based index)
// `d`: the day
// `y`: the year
const isValidDate = (m, d, y) => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= new Date(y, m, 0).getDate();

// typescript版本

// const isValidDate2 = (m: number, d: number, y: number): boolean => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= new Date(y, m, 0).getDate();