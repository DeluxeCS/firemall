/**
 * storage的封装
 * 浏览器存储的sessionStorage的添加删除和修改方式不足
 * 只能以key-val的形式存储字符串或数字
 * 需求：
 *    storage能够存储json或其他样式的数据
 */

const STORAGE_KEY = "fireMall";

export default {
  // 传递两个参数key，以及模块名
  getItem(key, module_name) {
    //   取值的方式有两种
    // 2、获取fireMall的val的嵌套值
    if (module_name) {
      let value = this.getItem(module_name);
      if (value) {
        return value[key];
      }
    }
    // 1、获取key-val的值
    return this.getStorage()[key];
  },
  setItem(key, val, module_name) {
    key === "STORAGE_KEY" &&
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    if (module_name) {
      let value = this.getItem(module_name);
      value[key] = val;
      this.setItem(module_name, value);
    } else {
      // 在fireMall下的value新增
      let value = this.getStorage();
      value[key] = val;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    }
  },
  // 获取fireMall下的value值
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));
  },
  // 指定key清空或value下部分清空
  clear(key, module_name) {
    let value = this.getStorage();
    if (module_name) {
      delete value[module_name][key];
    } else {
      delete value[key];
    }
    this.setItem(STORAGE_KEY, value);
  },
};
