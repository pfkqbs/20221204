// sleep函数作用是让线程休眠，等到指定时间在重新唤起。

/**
 *
 * @desc 休眠 sleep(delay)
 * @param delay：休眠时间
*/

function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
  }
  
  function test() {
    console.log('111');
    sleep(2000);
    console.log('222');
  }
  
  test()