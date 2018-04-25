$(function() {
	$.extend($.fn.validatebox.defaults.rules, {
   idcard : {// 验证身份证 
        validator : function(value) { 
            return /^\s*\d{15}(\d{2}[A-Za-z0-9])?\s*$/i.test(value); 
        }, 
        message : '身份证号码格式不正确' 
    },
      minLength: {
        validator: function(value, param){
    	 var len=$.trim(value).length;
            return len >= param[0];
        },
        message: '至少{0}个字符.'
    },
      maxLength: {
        validator: function(value, param){
    	 var len=$.trim(value).length;
            return len <= param[0];
        },
        message: '最多{0}个字符.'
    },
    length:{validator:function(value,param){ 
        var len=$.trim(value).length; 
            return len>=param[0]&&len<=param[1];
        }, 
            message:"内容长度必须介于{0}和{1}之间."
        }, 
    phone : {// 验证电话号码 
        validator : function(value) { 
            return /^\s*((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?\s*$/i.test(value); 
        }, 
        message : '格式不正确,请参考格式:020-88888888' 
    }, 
    mobile : {// 验证手机号码 
        validator : function(value) { 
            return /^\s*(13|15|18)\d{9}\s*$/i.test(value); 
        }, 
        message : '手机号格式不正确' 
    }, 
    intOrFloat : {// 验证整数或小数 
        validator : function(value) { 
            return /^\s*\d+(\.\d+)?\s*$/i.test(value); 
        }, 
        message : '必须整数或小数' 
    },
    currency : {// 验证货币 
        validator : function(value) { 
            return /^\s*\d+(\.\d+)?\s*$/i.test(value); 
        }, 
        message : '货币格式不正确' 
    }, 
    num : {// 验证数字 
        validator : function(value) { 
            return /^\s*\d+\s*$/i.test(value); 
        }, 
        message : '必须数字' 
    }, 
    integer : {// 验证整数 
        validator : function(value) { 
            return /^\s*([1-9]\d*|0)\s*$/i.test(value); 
        }, 
        message : '必须整数' 
    }, 
    age : {// 验证年龄
        validator : function(value) { 
            return /^\s*(?:[1-9][0-9]?|1[01][0-9]|120)\s*$/i.test(value); 
        }, 
        message : '年龄必须是0到120之间的整数' 
    }, 
    
    chinese : {// 验证中文 
        validator : function(value) { 
            return /^\s*[\Α-\￥]+\s*$/i.test(value); 
        }, 
        message : '请输入中文' 
    }, 
    english : {// 验证英语 
        validator : function(value) { 
            return /^\s*[A-Za-z]+\s*$/i.test(value); 
        }, 
        message : '请输入英文' 
    },
    ne : {// 验证数字或英文 
        validator : function(value) { 
            return /^\s*\w+\s*$/i.test(value); 
        }, 
        message : '请输入数字或英文' 
    },
    nande : {// 验证数字和英文 
        validator : function(value) { 
            return /^\s*(([A-Za-z]+\d+\w*)|(\d+[A-Za-z]+\w*))\s*$/i.test(value); 
        }, 
        message : '必须数字和英文组合' 
    },
    neOrLine : {// 验证数字、中划线、英文 
        validator : function(value) { 
            return /^\s*(\w|-)+\s*$/i.test(value); 
        }, 
        message : '请输入数字、英文或中划线' 
    },
    cne : {// 验证汉字、数字、英文 
        validator : function(value) { 
            return /^\s*([\Α-\￥]|\w)+\s*$/i.test(value); 
        }, 
        message : '请输入汉字、数字或英文' 
    },
    cn : {// 验证汉字、数字 
        validator : function(value) { 
            return /^\s*([\Α-\￥]|\d)+\s*$/i.test(value); 
        }, 
        message : '请输入汉字或数字' 
    },
    unnormal : {// 验证是否包含空格和非法字符 
        validator : function(value) { 
            return /.+/i.test(value); 
        }, 
        message : '输入值不能为空和包含其他非法字符' 
    }, 
    username : {// 验证用户名 
        validator : function(value) { 
            return /^\s*[a-zA-Z][a-zA-Z0-9_]*\s*$/i.test(value); 
        }, 
        message : '用户名不合法（字母开头，允许字母数字下划线）' 
    }, 
    ip : {// 验证IP地址 
        validator : function(value) { 
            return /\s*d+.d+.d+.d+\s*/i.test(value); 
        }, 
        message : 'IP地址格式不正确' 
    }, 
    name : {// 验证姓名，可以是中文或英文 
            validator : function(value) { 
                return /^\s*[\Α-\￥]+\s*$/i.test(value)|/^\s*\w+[\w\s]+\w+\s*$/i.test(value); 
            }, 
            message : '请输入姓名' 
    },
    date : {// 验证姓名，可以是中文或英文 
        validator : function(value) { 
         //格式yyyy-MM-dd或yyyy-M-d
            return /^\s*(?:(?!0000)[0-9]{4}([-]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]?)0?2\2(?:29))\s*$/i.test(value); 
        },
        message : '清输入合适的日期格式'
    },
    same:{ 
        validator : function(value, param){
            if($("#"+param[0]).val() != "" && value != ""){ 
                return $("#"+param[0]).val() == value; 
            }else{ 
                return true; 
            } 
        }, 
        message : '两次输入的密码不一致！'    
    }
});
});

function isNum(value){
	return /^\s*\d+\s*$/i.test(value);
}