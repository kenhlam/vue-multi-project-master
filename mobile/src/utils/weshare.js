// title desc必传
import wx from 'weixin-js-sdk';
import { KY_Get } from "@utils/request";
const ShareImpl = function (option) {
  function isIOS() {
    let isIphone = navigator.userAgent.includes('iPhone')
    let isIpad = navigator.userAgent.includes('iPad')
    return isIphone || isIpad
  }
  var infoUrl = '/app/mycloud';

  var wxDomain = window.location.host; //域名
  var wxurl;
  if (isIOS()) {
    wxurl = window.location.href.split('#')[0];
  } else {
    wxurl = window.location.href;
  }
  
  KY_Get(infoUrl, {
    jsonParams: '{method:"getCompanyInfoByUrl",params:{domain:"mycloud.com",servername:"' + wxDomain + '",url:"' + wxurl + '"},token:""}'
  }).then((response) => {
    
    wx.config({
      debug: false,
      appId: response.result.weixiid,
      timestamp: 1420810476,
      nonceStr: 'wuxishetuanguanlipintai',
      signature: response.result.signatureinfo,
      // jsApiList: [
      //   'updateAppMessageShareData',
      //   'updateTimelineShareData',
      // ]
      jsApiList: [
        "checkJsApi",
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareWeibo",
        "hideMenuItems",
        "showMenuItems",
        "hideAllNonBaseMenuItem",
        "showAllNonBaseMenuItem",
        "translateVoice",
        "startRecord",
        "stopRecord",
        "onRecordEnd",
        "playVoice",
        "pauseVoice",
        "stopVoice",
        "uploadVoice",
        "downloadVoice",
        "chooseImage",
        "previewImage",
        "uploadImage",
        "downloadImage",
        "getNetworkType",
        "openLocation",
        "getLocation",
        "hideOptionMenu",
        "showOptionMenu",
        "closeWindow",
        "scanQRCode",
        "chooseWXPay",
        "openProductSpecificView",
        "addCard",
        "chooseCard",
        "openCard"
      ] // 必填,需要使用的JS接口列表
    });
  }).catch(error => {
    window.console.log(error);
  });
  wx.ready(function () {

    // wx.updateAppMessageShareData({
    //   title: option.title, 
    //   desc: option.desc,
    //   link: wxurl,
    //   imgUrl: option.shareImg
    // });
    // wx.updateTimelineShareData({
    //   title: option.title || "苏州科协",
    //   desc: option.desc || "苏州科协",
    //   link: wxurl,
    //   imgUrl: option.shareImg || location.host + "/portal/szkx/mobile/favicon.png",
    // });

    wx.onMenuShareTimeline({ //分享到朋友圈
      title: option.title || "苏州科协",
      desc: option.desc || "苏州市科学技术协会",
      link: wxurl,
      imgUrl: option.shareImg || "http://szst.suzhou.gov.cn/portal/szkx/mobile/favicon.png",
      success: function () {
        // 用户确认分享后执行的回调函数
        // alert("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        alert("您已取消分享");
      }
    });
    wx.onMenuShareAppMessage({ //分享给朋友
      title: option.title || "苏州科协",
      desc: option.desc || "苏州市科学技术协会",
      link: wxurl,
      imgUrl: option.shareImg ||  "http://szst.suzhou.gov.cn/portal/szkx/mobile/favicon.png",
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        // alert("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        alert("分享失败");
      }
    });
    wx.onMenuShareQQ({ //分享到QQ
      title: option.title || "苏州科协",
      desc: option.desc || "苏州市科学技术协会",
      link: wxurl,
      imgUrl: option.shareImg ||  "http://szst.suzhou.gov.cn/portal/szkx/mobile/favicon.png",
      success: function () {
        // 用户确认分享后执行的回调函数
        // alert("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        alert("分享失败");
      }
    });

    wx.onMenuShareWeibo({ //分享到腾讯微博
      title: option.title || "苏州科协",
      desc: option.desc || "科苏州市科学技术协会",
      link: wxurl,
      imgUrl: option.shareImg || "http://szst.suzhou.gov.cn/portal/szkx/mobile/favicon.png",
      success: function () {
        // 用户确认分享后执行的回调函数
        // alert("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        alert("分享失败");
      }
    });
  })
  /*}*/
}

export default ShareImpl
