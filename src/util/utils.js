export function getCookie(name) {
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) {
    return arr[2];
  } else {
    return null;
  }
}

export function toPage(total, row, page, number) {
  let panduan = total % row === 0 ? row : total % row
  let flag = page === Math.ceil(total / row)
  let currentPage = ''
  if (flag) {
    currentPage = number >= panduan ? page - 1 : page
    return currentPage
  }
}

export function setCookie(name, value, expiredays) {
  var exdate = new Date();
  // exdate.setDate(exdate.getDate() + expiredays)
  exdate.setTime(exdate.getTime() + expiredays);
  // console.log('expire=' + exdate + ';toGMTString:' + exdate.toGMTString() + ';toUTCString:' + exdate.toUTCString())
  document.cookie = name + '=' + escape(value) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
}

export function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
}
/**
 * 取出小括号内的内容
 * @param text
 * @returns {string}
 */
export function getParenthesesStr(text) {
  let result = '';
  result = text.match(/\(([^)]*)\)/);
  if (result) {
    result = result[1];
  }
  return result;
}
