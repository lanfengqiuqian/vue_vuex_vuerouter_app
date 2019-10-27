import {get,post,post_array} from '../http/axios'
import Vue from 'vue'
import { Notify, Info } from 'vant';

Vue.use(Notify);
export default {
    namespaced:true,
    state:{},
    getters:{},
    mutations:{},
    actions:{
        //根据令牌获取用户信息
        async getInfo(context,token){
            let response = await get("/user/info",token);
            return response;
        },
        //退出登陆
        async logoutHandler(context){
            let response = await post("/user/logout");
            //提示信息
            if(response.status === 200){
                Notify({ type: 'success', message:"退出成功!"});
                return response;
            }else{
                Notify({ type: 'danger', message:"退出失败"});
            }
            
        },
    }
}