// 首页
import request from "@/utils/request";

// 一级分类列表
export function usProduusProductCategoryParentListctList() {
  return request({
    url: `usProductCategory/usProductCategoryParentList/`,
    method: "get",
    params: {},
  });
}
// 二级分类列表
export function usProductCategoryChildList(categoryId) {
  return request({
    url: `usProductCategory/usProductCategoryChildList/`,
    method: "get",
    params: { categoryId },
  });
}
// 产品列表V1
export function usProductListV1(pid, categoryId) {
  return request({
    url: `usProduct/usProductListV1/`,
    method: "get",
    params: { pid, categoryId },
  });
}
// 产品详情V1
export function usProductDetailsV1(productId) {
  return request({
    url: `usProduct/usProductDetailsV1/`,
    method: "get",
    params: { productId },
  });
}
// 案例列表
export function usProductCaseNoPage(categoryId) {
  return request({
    url: `usProductCase/usProductCaseNoPage/`,
    method: "get",
    params: { categoryId },
  });
}
// 产品列表
export function usProductList() {
  return request({
    url: `usProduct/usProductList/`,
    method: "get",
    params: {},
  });
}

// 产品详情
export function usProductDetails(productId) {
  return request({
    url: `usProduct/usProductDetails/`,
    method: "get",
    params: { productId },
  });
}

// 反馈
export function usConsultOperation(data) {
  return request({
    url: `usConsult/usConsultOperation`,
    method: "post",
    data: {
      name: data.name,
      sourceMailbox: data.sourceMailbox,
      content: data.content,
    },
  });
}


// 服务列表
export function usServiceTypeList() {
  return request({
    url: `usServiceType/usServiceTypeList/`,
    method: "get",
    params: {},
  });
}

// 案例类型
export function usCaseTypeList() {
  return request({
    url: `usCaseType/usCaseTypeList/`,
    method: "get",
    params: {},
  });
}

// 案例列表
export function usCaseFileList(ctId) {
  return request({
    url: `usCaseFile/usCaseFileList/`,
    method: "get",
    params: { ctId },
  });
}

// 画册列表
export function usProductCategoryAlbumList() {
  return request({
    url: `usProductCategory/usProductCategoryAlbumList/`,
    method: "get",
    params: {},
  });
}


// 邮箱申请PDF
export function usApplyAdd(data) {
  return request({
    url: `usApply/usApplyAddV1`,
    method: "post",
    data: {
      categoryId: data.categoryId,
      mailbox: data.mailbox,
      ipAddress: data.ipAddress,
    },
  });
}
