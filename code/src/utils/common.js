/* eslint-disable no-unused-vars */
/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
import { _newsDetail } from "@api/service";

const KAIYUNFunction = {};
KAIYUNFunction.install = (Vue, options) => {
  Object.assign(Vue.prototype, {
    setCookie(name, value) {
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
    },
    
    //读取cookies
    getCookie(name) {
      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

      if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
      else
        return null;
    },

    //删除cookies
    delCookie(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = this.getCookie(name);
      if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
    },
    isPhone(str, type) {
      if (type === -1) {
        return /^\d{11}$|^(0\d{2,3}-?\d{7,8})$/.test(str);
      } else if (type === 0) {
        return /^0\d{2,3}-?\d{7,8}$/;
      } else {
        return /^1[3456789]\d{9}$/.test(str);
      }
    },
    
    groupArr(arr, step) {
      let result = [];

      for (var i = 0, len = arr.length; i < len; i += step) {
        result.push(arr.slice(i, i + step));
      }

      return result
    },
    handelDescription(description) {
      if (!description) {
        return "";
      }
      description = description.replace(/<[^>]+>/g, ""); //截取html标签
      description = description.replace(/&nbsp;/gi, ""); //截取空格等特殊标签
      return description;
    },
    highLightKeyword: function (str, key) {
      if (str == null || str == undefined || key == '') { return str }
      // this指向当前实例
      let reg = new RegExp(key, 'gi')
      return str.replace(reg, '<span class="red">' + key + "</span>")
    },
    getCalender() {
      let date = new Date();
      let y = date.getFullYear();
      let m = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
      let d = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
      return y + '年' + m + '月' + d + '日 ' + "星期" + "日一二三四五六".charAt(new Date().getDay());
    },
   
    async openPDF(id) {
      let res = await _newsDetail({ id: id });

      try {
        let PDF = "/" + JSON.parse(res.result).society.filelist[0].filepath;
        window.open(PDF);
      } catch (e) {
        this.$message.error("未找到相关PDF文件！");
      }

    }
    

  })
};

export default KAIYUNFunction;
