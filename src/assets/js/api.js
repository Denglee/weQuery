/*** api接口统一管理 */
import { get, post } from "./axios";


/**
 *
 * @param {string} params
 * 我们定义了一个index方法
 * 这个方法有一个参数params
 * params是我们请求接口时携带的参数对象
 * 而后调用了我们封装的post方法
 * post方法的第一个参数是我们的接口地址
 * 第二个参数是topics的params参数
 * 即请求接口时携带的参数对象
 * 最后通过export导出topics。
 */

// 轮播图
export const getLunbo = params => post("rotation/getAllRotation", params);         /* 所有产品*/

/* 1、产品 */
export const getAllType = params => get("product/getAll", params);         /* 所有产品*/

// 1.银行信贷，2.机构信贷，3.小额贷款，4.企业贷款，5.抵押贷款，6.线上急融
export const getByProdType = params => get("product/getByProdType", params);         /* 分类*/

// http://hwcshs.natappfree.cc/product/getProdDetail?prodId=1&prodType=1
export const getProdDetail = params => get("product/getProdDetail", params);         /* 详情*/

// 产品匹配接口：http://6wfij9.natappfree.cc/productCondi/getProductList
export const getCondiProductList = params => post("productCondi/getProductList", params);         /* 产品匹配接口*/


// 获取历史匹配列表接口：http://xkgfjp.natappfree.cc/productCondi/getHistoryList?staffNo=11&staffName=姚明
export const getHistoryList = params => get("productCondi/getHistoryList", params);         /* 历史匹配列表 */

// 获取历史匹配产品列表接口：http://xkgfjp.natappfree.cc/productCondi/getHistoryProductList?historyId=55
export const getHistoryProductList = params => get("productCondi/getHistoryProductList", params);         /* 历史匹配产品 详情*/

// 获取信用卡信息列表接口
export const getCreditCard = params => post("creditCard/getAll", params);


// 通过条件查询匹配结果接口：
export const getMatchProductList = params => post("productCondi/getMatchProductList", params);

// 信用卡
export const getAllCard = params => get("creditCard/getAll", params);         /* 所有产品*/


// 记录点击客服中心次数
export const customerVisit = params => get("customerService/visit", params);

//www.jierong123.com/wx/getWxUserInfo 登陆
export const getWxUserInfoApi = params => get("wx/getWxUserInfo", params);


/*微信 api 分享*/
export const getSignature = params => get("cc/wx/getSignature", params);


/**  1024*/
// 用户匹配清单列表
export const getHistoryProductConditionListApi = params => get("productCondi/getHistoryProductConditionList", params);
// www.jierong123.com/productCondi/getHistoryProductConditionList?staffNo=110
//   请求方式：Get 参数说明：staffNo（等同于openId）

// 匹配清单详情
export const getHistoryProductConditionApi = params => get("/productCondi/getHistoryProductCondition/", params);
// www.jierong123.com/productCondi/getHistoryProductCondition/historyId=120

// 获取会员列表
export const getMemberForPageApi = params => get("user/getMemberForPage", params);

// www.jierong123.com/user/getMemberForPage?pageNum=1&pageSize=10&nickName=’nickName’&memberType=1
// 请求方式：Get
// 参数说明：pageNum 页码   pageSize 页数    nickName  微信昵称（可以为空，用作条件查询用）   memberType  会员类型（传类型编码）  1、一般会员2、青铜会员3、白金会员4、钻石会员


/** 会员界面*/
/*注册会员*/
export const registerMemberApi = params => post("user/registerMember", params);

// www.jierong123.com/user/registerMember
// 请求方式：post
// 参数说明：主要通过openId来更新会员信息，因为想要注册会员，那就一定是登录了我们系统，登录了我们系统，那就有openid，此时其实是对用户信息的一个更新完善

/*获取会员信息*/
export const getMemberDetailApi = params => get("/user/getMemberDetail", params); /*手机端首页的会员中心，包括代理人页面*/
// export const getMemberDetailApi = params => get("/getMemberDetail", params); /*手机端首页的会员中心，包括代理人页面*/

/*联系我们*/
export const getAttendantForPageApi = params => get("/attendant/getAttendantForPage", params); /*手机端首页的会员中心，包括代理人页面*/

/*  1130 获取20条匹配记录列表 */
export const getAllHistoryListApi = params => get("/productCondi/getAllHistoryList", params);

/** 1226*/
/*获取贷款分类*/
export const getModelTypeApi = params => get("/modelType/get", params);

/*手机端会员中心的我的专员*/
export const getAttendantDetailApi = params => get("/attendant/getAttendantDetail", params);/*手机端会员中心的我的专员*/

/*我的邀请*/
export const getMemberListApi = params => get("/user/getMemberList", params);

/*openId*//*获取 联系 顾问 手机号码*/
export const getAttendantInfoApi = params => get("/rotation/getAttendantInfo", params); /*openId*/



