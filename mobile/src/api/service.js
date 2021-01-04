
import { KY_Get, KY_Post } from "@utils/request";


// home

export const _newsList = (param = {}) =>KY_Post('/mainPortal/getSocietiesList.do',param)//新闻列表

export const _newsDetail = (param = {}) =>KY_Post('/mainPortal/getSocietyDetail.do',param)//新闻详情
export const _rwList = (param = {}) =>KY_Post('/mainPortal/getLeaguersList.do',param)//人物列表
export const _rwDetail = (param = {}) =>KY_Post('/mainPortal/getLeaguerDetail.do',param)//人物详情


export const _getTypeByYear = (param = {}) =>KY_Post('/mainPortal/getDateList.do',param)//获取页面头部年度接口
export const _getListByYear = (param = {}) =>KY_Post('/mainPortal/getSocietiesPeopleList.do',param)//根据年份和新闻编码获取魅力人物

export const _getVideoList = (param = {}) =>KY_Post('/portal/video/list.do',param)//视频列表
export const _getVideoDetail = (param = {}) =>KY_Post('/portal/video/detail.do',param)//video详情页


// export const _logIn = (url,param = {},cfg) =>KY_Post(url,param,cfg)//根据年份和新闻编码获取魅力人物


export const _search = (param = {}) =>KY_Post('/mainPortal/searchList.do',param)//搜索
