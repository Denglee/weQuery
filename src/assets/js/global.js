/** 字体 */
fnResize();
window.onresize = function () {
    fnResize()
};

function fnResize() {
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    // console.log(deviceWidth);
    if (deviceWidth >= 750) {
        deviceWidth = 750;
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5 * 2) + 'px';
    // console.log( document.documentElement.style.fontSize);
}


/** session 存储*/
/*/storage 存储
sessionStorage.setItem('currentIndex', 0)
// 获取
index=sessionStorage.getItem('currentIndex');
// 删除一个
sessionStorage.removeItem("currentIndex");
// 删除全部
sessionStorage.clear();*/


// 获取今天的日期
function getToday() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    // 如果需要时分秒
    // var h = now.getHours();
    // var m = now.getMinutes();
    // var s = now.getSeconds();
    let formatDate = year + '-' + month + '-' + day;
    return formatDate;
}


// 全局 js
let localUrl = '';  //全局路径
var localOrigin = window.location.origin;

// console.log(localOrigin);
if (localOrigin == 'http://localhost:8282') {
    localUrl = 'http://vikily.f3322.net:20000';
} else {
    localUrl = localOrigin;
}

// const localUrl = 'http://vikily.f3322.net:20000';  //测试
// const localUrl = 'https://spt.zmtek.net';  //系统正式
// const localUrl = 'https://swim.zmtek.net';    //游泳馆正式

let LoanAllArr = {
    "status": "success",
    "data": [
        {
            "id": 4,
            "ioc": "e://ddd",
            "name": "房东信用贷",
            "prodType": 2,
            "labelList": [
                {
                    "id": 4567678,
                    "productId": 4,
                    "name": "征信宽松"
                }
            ],
            "basicInfoList": [
                {
                    "id": 8677,
                    "productId": 4,
                    "name": "5-60万"
                }
            ],
            "qsList": [
                {
                    "id": 56,
                    "productId": 4,
                    "name": "15期"
                },
                {
                    "id": 78,
                    "productId": 4,
                    "name": "30期"
                }
            ],
            "label2List": [
                {
                    "id": 67899,
                    "productId": 4,
                    "name": "征信宽松"
                }
            ],
            "bltjList": [
                {
                    "id": 46,
                    "productId": 4,
                    "name": "年龄要求：",
                    "nameValue": "20周岁"
                }
            ],
            "sxzlList": [
                {
                    "id": 545,
                    "productId": 4,
                    "name": "银行卡"
                }
            ],
            "bllcList": [
                {
                    "id": 1453453453,
                    "productId": 4,
                    "name": "联系客户经理操作办理"
                }
            ],
            "ohterInfoList": [
                {
                    "id": 644,
                    "productId": 4,
                    "name": "还款方式：",
                    "nameValue": "先息后本"
                }
            ],
            "zxyqList": [
                {
                    "id": 677,
                    "productId": 4,
                    "name": "五级分类要求：",
                    "nameValue": "信用卡"
                }
            ],
            "mzsmList": [
                {
                    "id": 9,
                    "productId": 4,
                    "name": "免责声明"
                }
            ]
        },
        {
            "id": 3,
            "ioc": "c://dates",
            "name": "月供贷",
            "prodType": 2,
            "labelList": [
                {
                    "id": 234235,
                    "productId": 3,
                    "name": "资料简单"
                }
            ],
            "basicInfoList": [
                {
                    "id": 56784567,
                    "productId": 3,
                    "name": "等额本息"
                }
            ],
            "qsList": [
                {
                    "id": 324,
                    "productId": 3,
                    "name": "60期"
                }
            ],
            "label2List": [
                {
                    "id": 89787,
                    "productId": 3,
                    "name": "资料简单"
                }
            ],
            "bltjList": [
                {
                    "id": 45,
                    "productId": 3,
                    "name": "年龄要求：",
                    "nameValue": "19周岁以上"
                }
            ],
            "sxzlList": [
                {
                    "id": 87,
                    "productId": 3,
                    "name": "银行卡"
                }
            ],
            "bllcList": [
                {
                    "id": 345345,
                    "productId": 3,
                    "name": "联系客户经理操作办理"
                }
            ],
            "ohterInfoList": [
                {
                    "id": 67,
                    "productId": 3,
                    "name": "额度：",
                    "nameValue": "最高30万"
                }
            ],
            "zxyqList": [
                {
                    "id": 4567,
                    "productId": 3,
                    "name": "小额要求：",
                    "nameValue": "当前未结清小贷"
                }
            ],
            "mzsmList": [
                {
                    "id": 34,
                    "productId": 3,
                    "name": "免责声明"
                }
            ]
        },
        {
            "id": 2,
            "ioc": "c://data",
            "name": "小商贷",
            "prodType": 1,
            "labelList": [
                {
                    "id": 34567,
                    "productId": 2,
                    "name": "等额等息"
                },
                {
                    "id": 87678,
                    "productId": 2,
                    "name": "资料简单"
                }
            ],
            "basicInfoList": [
                {
                    "id": 687787,
                    "productId": 2,
                    "name": "5-50万"
                }
            ],
            "qsList": [
                {
                    "id": 12,
                    "productId": 2,
                    "name": "30期"
                }
            ],
            "label2List": [
                {
                    "id": 6785678,
                    "productId": 2,
                    "name": "等额等息"
                }
            ],
            "bltjList": [
                {
                    "id": 3453,
                    "productId": 2,
                    "name": "国际要求：",
                    "nameValue": "大陆人士"
                }
            ],
            "sxzlList": [
                {
                    "id": 90,
                    "productId": 2,
                    "name": "身份证"
                }
            ],
            "bllcList": [
                {
                    "id": 345,
                    "productId": 2,
                    "name": "联系客户经理操作办理"
                }
            ],
            "ohterInfoList": [
                {
                    "id": 456,
                    "productId": 2,
                    "name": "利率：",
                    "nameValue": "年化7%到12%"
                }
            ],
            "zxyqList": [
                {
                    "id": 34,
                    "productId": 2,
                    "name": "查询要求：",
                    "nameValue": "征信查询次数3个月不能超过3次"
                }
            ],
            "mzsmList": [
                {
                    "id": 54,
                    "productId": 2,
                    "name": "免责声明"
                }
            ]
        },
        {
            "id": 1,
            "ioc": "d://user",
            "name": "中国银行-优客分期卡",
            "prodType": 1,
            "labelList": [
                {
                    "id": 2343,
                    "productId": 1,
                    "name": "放贷快"
                },
                {
                    "id": 456456,
                    "productId": 1,
                    "name": "利率0.5"
                }
            ],
            "basicInfoList": [
                {
                    "id": 6798345,
                    "productId": 1,
                    "name": "利率0.99%",
                    'value': 0.99,
                }
            ],
            "qsList": [
                {
                    "id": 3,
                    "productId": 1,
                    "name": "30期",
                    'value': 30,
                },
                {
                    "id": 34,
                    "productId": 1,
                    "name": "12期",
                    'value': 12,
                },
                {
                    "id": 234,
                    "productId": 1,
                    "name": "60期",
                    'value': 60,
                }
            ],
            "label2List": [
                {
                    "id": 6477,
                    "productId": 1,
                    "name": "放贷快"
                },
                {
                    "id": 34234,
                    "productId": 1,
                    "name": "放贷快"
                },
                {
                    "id": 234657875,
                    "productId": 1,
                    "name": "放贷快"
                }
            ],
            "bltjList": [
                {
                    "id": 123,
                    "productId": 1,
                    "name": "年龄要求：",
                    "nameValue": "18周岁以上"
                }
            ],
            "sxzlList": [
                {
                    "id": 325,
                    "productId": 1,
                    "name": "实名手机号"
                }
            ],
            "bllcList": [
                {
                    "id": 546456,
                    "productId": 1,
                    "name": "联系客户经理操作办理"
                }
            ],
            "ohterInfoList": [
                {
                    "id": 98,
                    "productId": 1,
                    "name": "期限：",
                    "nameValue": "1年"
                }
            ],
            "zxyqList": [
                {
                    "id": 790,
                    "productId": 1,
                    "name": "逾期要求：",
                    "nameValue": "近两年不能连续3次逾期"
                }
            ],
            "mzsmList": [
                {
                    "id": 123,
                    "productId": 1,
                    "name": "免责声明"
                }
            ]
        }
    ]
}

let LoanDetailsArr = {
    "status": "success",
    "data": [
        {
            "id": 2,
            "ioc": "c://data",
            "name": "小商贷",
            "prodType": 1,
            "labelList": [
                {
                    "id": 34567,
                    "productId": 2,
                    "name": "等额等息"
                },
                {
                    "id": 87678,
                    "productId": 2,
                    "name": "资料简单"
                }
            ],
            "basicInfoList": [
                {
                    "id": 687787,
                    "productId": 2,
                    "name": "5-50万",
                }
            ],
            "qsList": [
                {
                    "id": 12,
                    "productId": 2,
                    "name": "301期",
                }
            ],
            "label2List": [
                {
                    "id": 6785678,
                    "productId": 2,
                    "name": "等额等息"
                }
            ],
            "bltjList": [
                {
                    "id": 3453,
                    "productId": 2,
                    "name": "国际要求：",
                    "nameValue": "大陆人士"
                }
            ],
            "sxzlList": [
                {
                    "id": 90,
                    "productId": 2,
                    "name": "身份证"
                }
            ],
            "bllcList": [
                {
                    "id": 345,
                    "productId": 2,
                    "name": "联系客户经理操作办理"
                }
            ],
            "ohterInfoList": [
                {
                    "id": 456,
                    "productId": 2,
                    "name": "利率：",
                    "nameValue": "年化7%到12%"
                }
            ],
            "zxyqList": [
                {
                    "id": 34,
                    "productId": 2,
                    "name": "查询要求：",
                    "nameValue": "征信查询次数3个月不能超过3次"
                }
            ],
            "mzsmList": [
                {
                    "id": 54,
                    "productId": 2,
                    "name": "免责声明"
                }
            ]
        },
        {
            "id": 1,
            "ioc": "d://user",
            "name": "中国银行-优客分期卡",
            "prodType": 1,
            "labelList": [
                {
                    "id": 2343,
                    "productId": 1,
                    "name": "放贷快"
                },
                {
                    "id": 456456,
                    "productId": 1,
                    "name": "利率0.5"
                }
            ],
            "basicInfoList": [
                {
                    "id": 6798345,
                    "productId": 1,
                    "name": "利率0.99%"
                }
            ],
            "qsList": [
                {
                    "id": 3,
                    "productId": 1,
                    "name": "30期"
                },
                {
                    "id": 34,
                    "productId": 1,
                    "name": "12期"
                },
                {
                    "id": 234,
                    "productId": 1,
                    "name": "60期"
                }
            ],
            "label2List": [
                {
                    "id": 6477,
                    "productId": 1,
                    "name": "放贷快"
                },
                {
                    "id": 34234,
                    "productId": 1,
                    "name": "放贷快"
                },
                {
                    "id": 234657875,
                    "productId": 1,
                    "name": "放贷快"
                }
            ],
            "bltjList": [
                {
                    "id": 123,
                    "productId": 1,
                    "name": "年龄要求：",
                    "nameValue": "18周岁以上"
                }
            ],
            "sxzlList": [
                {
                    "id": 325,
                    "productId": 1,
                    "name": "实名手机号"
                }
            ],
            "bllcList": [
                {
                    "id": 546456,
                    "productId": 1,
                    "name": "联系客户经理操作办理"
                }
            ],
            "ohterInfoList": [
                {
                    "id": 98,
                    "productId": 1,
                    "name": "期限：",
                    "nameValue": "1年"
                }
            ],
            "zxyqList": [
                {
                    "id": 790,
                    "productId": 1,
                    "name": "逾期要求：",
                    "nameValue": "近两年不能连续3次逾期"
                }
            ],
            "mzsmList": [
                {
                    "id": 123,
                    "productId": 1,
                    "name": "免责声明"
                }
            ]
        }
    ]
};

let LoanBankInfo = {
    "status": "success", "data": {
        "id": 5,
        "ioc": "f://yyy",
        "name": "平安抵押",
        "prodType": 5,
        "labelList": [{"id": 1, "productId": 5, "name": "征信宽松"}, {"id": 2, "productId": 5, "name": "资料简单"}, {
            "id": 3,
            "productId": 5,
            "name": "超低利息"
        }, {"id": 4, "productId": 5, "name": "沟通尺度大"}],
        "basicInfoList": [{"id": 1, "productId": 5, "name": "利率 0.55%", "nameValue": "0.55%"}, {
            "id": 2,
            "productId": 5,
            "name": "5-30万",
            "nameValue": null
        }, {"id": 3, "productId": 5, "name": "等额等息", "nameValue": null}],
        "qsList": [{"id": 1, "productId": 5, "name": "12期", "nameValue": "12"}, {
            "id": 2,
            "productId": 5,
            "name": "24期",
            "nameValue": "24"
        }, {"id": 4, "productId": 5, "name": "36期", "nameValue": "36"}, {
            "id": 5,
            "productId": 5,
            "name": "48期",
            "nameValue": "48"
        }, {"id": 6, "productId": 5, "name": "60期", "nameValue": "60"}],
        "quotaList": [{"id": 3, "productId": 5, "minQuota": 5, "maxQuota": 30, "step": 1, "defaultQuota": 5}],
        "label2List": [{"id": 1, "productId": 5, "name": "征信宽松"}, {"id": 2, "productId": 5, "name": "征信宽松"}],
        "bltjList": [{
            "id": 1,
            "productId": 5,
            "name": "抵押物及成数：",
            "nameValue": "住宅（无产权期限限制）、别墅、70年产权居住用途的单身公寓，宿舍"
        }, {"id": 332, "productId": 5, "name": "国籍要求：", "nameValue": "大陆居民或港澳居民"}, {
            "id": 453,
            "productId": 5,
            "name": "年龄要求：",
            "nameValue": "借款人22至65岁，抵押人年18至75岁"
        }, {"id": 455, "productId": 5, "name": "营业执照要求：", "nameValue": "注册成立时间满2年、借款人需为公司法人或占股30%且持有满6个月、客户资质优可准入"}],
        "sxzlList": [{"id": 1, "productId": 5, "name": "1.身份证、户口本、婚烟证明"}, {
            "id": 2,
            "productId": 5,
            "name": "2.近一年银行流水记录"
        }, {"id": 3, "productId": 5, "name": "3.营业执照/工作证明"}, {"id": 4, "productId": 5, "name": "4.房产证复印件"}, {
            "id": 5,
            "productId": 5,
            "name": "5.购货台同"
        }],
        "bllcList": [{"id": 1, "productId": 5, "name": "联系客户经理操作办理申请。"}, {
            "id": 2,
            "productId": 5,
            "name": "深圳地区上门服务"
        }, {"id": 3, "productId": 5, "name": "红本按揭贷款流程：\r\n银行申请-批复-办理抵押-银行放款"}, {
            "id": 4,
            "productId": 5,
            "name": "转按揭抵押贷款流程：\r\n\r\n银行申请-批复-公证-赎楼-国土局注销/抵押-银行放款"
        }, {"id": 5, "productId": 5, "name": "需要赎楼的客户可以配合提放保产品"}, {
            "id": 6,
            "productId": 5,
            "name": "亮点：\r\n\r\n1、快！银行审批即放全款，先放款，后赎楼，客户可第一时间收到款项！\r\n\r\n2、省！批复金额X0.4%（保险费）、无超期后顾之忧，赎楼免费，提前用款免费！\r\n\r\n3、安全！资金用途明确、符合监管要求。客户无断桥风险。\r\n总结：该产品可以出批复直接放款，在办押，不用赎楼，详情咨询客户经理正常进件！"
        }],
        "ohterInfoList": [{"id": 1, "productId": 5, "name": "期限：", "nameValue": "8年（看情况不用过桥）"}, {
            "id": 2,
            "productId": 5,
            "name": "利率：",
            "nameValue": "3厘98（年化4.35%）"
        }, {"id": 3, "productId": 5, "name": "额度：", "nameValue": "最高1500万"}, {
            "id": 4,
            "productId": 5,
            "name": "还款方式：",
            "nameValue": "先息后本，等额等息"
        }, {"id": 5, "productId": 5, "name": "提前还款：", "nameValue": "无罚息"}],
        "zxyqList": [{
            "id": 1,
            "productId": 5,
            "name": "逾期：",
            "nameValue": "半年无2，一年无3，两年无4；贷款当前无逾期，信用卡当前逾期不超1000可准入（具体看客户情况）"
        }, {"id": 2, "productId": 5, "name": "查询（884房产方案）：", "nameValue": "近2个月不超3次（不含本笔），客户优质可沟通，负债低或学位房。"}],
        "mzsmList": [{"id": 1, "productId": 5, "name": "免责声明"}]
    }
};

export default {
    localUrl,
    getToday: getToday(),

    LoanAllArr,
    LoanDetailsArr,
    LoanBankInfo,
}