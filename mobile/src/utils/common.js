/* eslint-disable no-unused-vars */
/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
import { _newsDetail } from "@api/service";
const KAIYUNFunction = {};
KAIYUNFunction.install = (Vue, options) => {
  Object.assign(Vue.prototype, {
    setCenterMinHeight(domSelector, selectors) {
      //domSelector目标DOM 设置中间DIV最小高度
      let all = document.documentElement.clientHeight;
      let aimDom = document.querySelector(domSelector);
      selectors.forEach(v => {
        let s = document.querySelector(v);
        all -= s.clientHeight;
        all -= window.getComputedStyle(s).marginTop.replace("px", "")
        all -= window.getComputedStyle(s).marginBottom.replace("px", "")

      });
      // 目标DOM  去除margin padding
      all -= window.getComputedStyle(aimDom).marginTop.replace("px", "")
      all -= window.getComputedStyle(aimDom).paddingTop.replace("px", "")
      all -= window.getComputedStyle(aimDom).paddingBottom.replace("px", "")
      all -= window.getComputedStyle(aimDom).marginBottom.replace("px", "")
      aimDom.style.minHeight = all + 'px';
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

    goNewsDetail(id) {

      this.$router.push({
        path: '/newsDetail',
        query: {
          id: id,
        }
      });

    },
    goPersonDetail(id) {

      this.$router.push({
        path: '/personDetail',
        query: {
          id: id,

        }
      });

    },
    goVideoDetail(id) {
      this.$router.push({
        path: "/videoDetail",
        query: {
          id: id
        }
      })

    },
    async openPDF(id) {
      let res = await _newsDetail({ id: id });
      
      try {
        let PDF = '/'+JSON.parse(res.result).society.filelist[0].filepath;
        window.open(PDF);
      } catch (e) {
        this.$message.error("未找到相关PDF文件！");
      }

    }

  })
};

export default KAIYUNFunction;
