/*
 * @Date:  2024-05-25 14:06:59
 * @LastEditors: LDH 574427343@qq.com
 * @LastEditTime: 2024-07-02 15:52:57
 * @FilePath: /zto-flow/src/api/index.js
 */

import http from '@/utils/axios'
let baseUrl = "http://117.72.70.166:7001/"

/**
 * 获取审批数据
 * @param { Number } id 
 * @returns 
 */
export function getApiWorkFlowData(data) {
  return http.get(`${baseUrl}/bpmnConf/detail/${data.id}`)
}
  
/**
 * 设置审批数据
 * @param {*} data 
 * @returns 
 */
export function setApiWorkFlowData(data) {
  return http.post(`${baseUrl}/bpmnConf/edit`, data)
}
 
/**
 * 获取审批数据列表
 * @param {*} param 
 * @returns 
 */
export function getFlowSchemaList(param) {
  let paramUri = "?type=" + param.type;
  paramUri += "&name=" + param.name;
  paramUri += "&description=" + param.description;
  return http.get(`${apiUrl}/books/${param.currentPage}/${param.pageSize}` + paramUri);
}


