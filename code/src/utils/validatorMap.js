// 提取信息中的网络链接:(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?
// 提取信息中的邮件地址:\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*
// 提取信息中的图片链接:(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?
// 提取信息中的IP地址:(\d+)\.(\d+)\.(\d+)\.(\d+)
// 提取信息中的中国电话号码（包括移动和固定电话）:(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}
// 提取信息中的中国邮政编码:[1-9]{1}(\d+){5}
// 提取信息中的中国身份证号码:\d{18}|\d{15}
// 提取信息中的整数：\d+
// 提取信息中的浮点数（即小数）：(-?\d*)\.?\d+
// 提取信息中的任何数字 ：(-?\d*)(\.\d+)?
// 提取信息中的中文字符串：[\u4e00-\u9fa5]*
// 提取信息中的双字节字符串 (汉字)：[^\x00-\xff]*
const vMap = {
    rules: {
        mobilePhone: /^1[3456789]\d{9}$/,
        telphone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
        phoneOrtelephone: /(^1[3456789]\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\d{3,4}\s|\s)?\d{7,14}$)/,
        // 95365897987UI525I0
        creditCode: /(^[A-Za-z0-9]{15}$)|(^[A-Za-z0-9]{18}$)/,
        validateConnectName: /^([\u4e00-\u9fa5]+|[a-zA-Z0-9_]+)+$/,
        valueNum: /^[0-9]{1,100}$/,
        valueString: /.{1,100}/,
        spec: /.{0,100}/,
        integer: /^[1-9]\d*$/,
        number: /^\d*$/,
        numberNO: /^[1-9]([0-9])*$/,
        normalName: /^([\u4e00-\u9fa5]+|[a-zA-Z0-9]+)+$/,
        specialChar: /(?!.*['"<>{}\[\]:;])^.*$/,
        decimal: /^[0-9]+([.]{1}[0-9]+){0,1}$/,
        decimal18: /^[0-9]{1,14}([.]{1}[0-9]{0,2}){0,1}$/,
        /*最大16位，18位保存有损失精度*/
        decimal16: /^[0-9]{1,14}([.]{1}[0-9]{0,2}){0,1}$/,
        /*最大16位，18位保存有损失精度*/
        money: /^(([1-9]+\d*)|([1-9]+\d*\.\d{1,2}))$/,
        hours: /^((\d{1,4}(\.\d){0,1}))$/,
        letters: /^[A-Za-z]+$/,
        chars: /^[A-Za-z0-9_]+$/, // 字符数字字母下划线
        chinese: /^[\u4e00-\u9fa5]{0,}$/,
        email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,

        idcard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        password: /^(?=.*[0-9].*)(?=.*[a-zA-Z].*).{6,20}$/,
        phone: /^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/,
        contactNumber: /(^(13|15|18|17)\d{9}$)|(^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,
        url: new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$"),
        mon: /^((\d{1,8})|(\d{1,8}\.\d{1,2}))$/,
        chineseLetterNum: /^(?!\d)[\(\)（）a-zA-Z0-9_\u4e00-\u9fa5]*$/,
        unnormal: /^(?!.*?[\|\\\/:\*\?<>\|]).*$/,
        filePath: /(^[a-zA-Z]\:\\([a-zA-Z0-9_\u4E00-\u9FA5]+\\)+$)|(^[a-zA-Z]\:\\$)/,
        training: /(?!^0$)(?!^00$)(?!^000$)(?!^0000$)(?!^0\.0?0$)(?!^00\.0?0$)(?!^000\.0?0$)(?!^0000\.0?0$)^(([0-9]\d{0,3})|([0-9]\d{0,3}\.\d{1,2}))$/,
        monContract: /^(([1-9]\d{0,9})|([1-9]\d{0,9}\.\d{1,2}))$/,
        inputAwak: /^([1-9]\d{0,3}|10000)$/,
        ip: /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/,
        monCarmgt: /(?!^0$)(?!^00$)(?!^000$)(?!^0000$)(?!^00000$)(?!^000000$)(?!^0000000$)(?!^00000000$)(?!^000000000$)(?!^0\.0?0$)(?!^00\.0?0$)(?!^000\.0?0$)(?!^0000\.0?0$)(?!^00000\.0?0$)(?!^000000\.0?0$)(?!^0000000\.0?0$)(?!^00000000\.0?0$)(?!^000000000\.0?0$)^(([0-9]\d{0,8})|([0-9]\d{0,8}\.\d{1,2}))$/,
        phoneOrTelphone: /^(((13|15|18|17)\d{9})|(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/,
        thirdApiVal: /^[^<>]*$/gi,
        thirdHeader: /^[^<>]*$/gi, // 不包含<>
        pwd:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/gi
    },
    messages: {
        mobilePhone: "请输入正确的手机号",
        telphone: "请输入有效的电话号码",
        phoneOrtelephone: "评价输入有效电话或手机号码",
        creditCode: "请输入有效的社会信用代码",
        validateConnectName: "字符中只能包含中英文、数字和下划线",
        reName: "名称不能重复",
        valueNum: "参数设置中,number类型的参数值必须是0到100个数字组成",
        valueString: "参数设置中,string类型的参数值长度必须在0到100之间",
        spec: "参数设置中,string类型的参数值长度必须在0到100之间",
        integer: "请输入正整数",
        required: "此字段为必填项",
        numberNO: "请输入有效的网址",
        normalName: "数字",
        specialChar: "不能包含" + "'\"<>{}[]:;",
        minLength: "至少需要输入【{minLength}】个字符，已输入【{inputlength}】个字符",
        maxLength: "最多允许输入【{maxLength}】个字符，已输入【{inputlength}】个字符",
        number: "请输入数字",
        decimal: "请输入整数或者小数",
        decimal18: "请输入最多14位整数和2位小数",
        decimal16: "请输入最多14位整数和2位小数",
        money: "请输入金额，精确到小数点后两位",
        hours: "请输入小于10000数字，精确到小数点后一位",
        letters: "请输入由字母(不区分大小写)组成的字符串",
        chars: "请输入由字母(不区分大小写)、数字、下划线组成的字符串",
        chinese: "请输入中文",
        email: "请输入有效的电子邮箱地址",

        idcard: "请输入有效的身份证号码",
        phone: "请输入有效的电话号码",
        url: "请输入有效的网址",
        authFunc: "自定义验证函数有错误，请检查",
        contactNumber: "请输入正确的联系电话",
        password: "密码长度为6-20位，必须同时具备字母和数字",
        mon: "请输入金额，整数位数最多8位，精确到小数点后两位",
        chineseLetterNum: "只能输入汉字、字母、数字、下划线、括号，且不能以数字开头",
        unnormal: "不能输入非法字符",
        filePath: "请输入正确的文件路径",
        training: "课程学时范围:大于零且正整数最多4位，小数最多2位",
        monContract: "请输入金额，整数位数最多10位，精确到小数点后两位",
        inputAwak: "请输入0-10000的整数",
        ip: "请输入有效的ip地址",
        monCarmgt: "请输入正确范围:大于零，整数位数最多9位，精确到小数点后两位",
        phoneOrTelphone: "请输入有效的电话号码",
        pwd:"密码中必须8位以上，且包含数字和字母！"

    },
    getExpressObj: function (key, message) {
        return {
            pattern: this.rules[key] || "",
            message: message || this.messages[key] || "",
            trigger: "blur"
        }
    }
};

export default vMap;
// 专为element ui 定制的正则验证规则

