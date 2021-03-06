import {get,post,post_array} from '../http/axios'
import axios from 'axios'
import Vue from 'vue'
import { Notify, Info } from 'vant';

Vue.use(Notify);

export default {
    namespaced:true,
    state:{
        information:{
            username:"",
            password:"",
            token:"",
        }
    },
    getters:{},
    mutations:{
        refreshInfo(state,info){
            state.information.username = info.username;
            state.information.password = info.password;
            state.information.token = info.token;
        },
    },
    actions:{
        //登陆事件
        async loginHandler(context,info){
            let response = await axios.post("/user/login",info);
            if(response.status === 200){
                Notify({ type: 'success', message:"登陆成功!"});
                context.commit("refreshInfo",response.data);
            }else{
                Notify({ type: 'danger', message:"用户名或密码错误"});
            }
        }
    }
}