
import { KY_Get, KY_Post } from "@utils/request";


// home

export const _newsList = (param = {}) =>KY_Post('/mainPortal/getSocietiesList.do',param)//新闻列表
