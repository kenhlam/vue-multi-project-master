// https://note.youdao.com/ynoteshare1/index.html?id=02814c6f03215839628745470569e6f8&type=note
import { KY_Get, KY_Post } from "@utils/request";


export const _newsList = (param = {}) =>KY_Post('/mainPortal/getSocietiesList.do',param)//新闻列表

