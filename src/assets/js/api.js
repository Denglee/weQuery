/*** api接口统一管理 */
import { get, post } from './axios';


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

/* 1、产品 */
export const getAllType   = params => post('product/getAll', params);         /* 所有产品*/

// 1.银行信贷，2.机构信贷，3.小额贷款，4.企业贷款，5.抵押贷款，6.线上急融
export const getByProdType   = params => post('product/getByProdType', params);         /* 分类*/

// http://hwcshs.natappfree.cc/product/getProdDetail?prodId=1&prodType=1
export const getProdDetail   = params => post('product/getProdDetail', params);         /* 详情*/
