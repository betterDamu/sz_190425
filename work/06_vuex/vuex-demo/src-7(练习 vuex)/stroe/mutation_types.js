const SEARCHNAME = "search_name"  // 根据search.vue组件中的输入数据来修改仓库中的searchName
const REQING = "req_ing" // 请求users数据 状态是请求中
// const REQSUCCSEEHASDATA = "req_success_data_has" // 请求users数据 状态是请求完成 数据不为空
// const REQSUCCSEENODATA = "req_success_data_no" // 请求users数据 状态是请求完成 数据为空
const REQSUCCSEE = "req_success"
const REQERROR = "req_error" // 请求失败

// export default 的形式 在外部不能使用 {} 的形式进行导入
export  {
  SEARCHNAME,
  REQING,
  REQSUCCSEE,
  // REQSUCCSEEHASDATA,
  // REQSUCCSEENODATA,
  REQERROR
}
