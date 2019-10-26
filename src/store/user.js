import {get,post,post_array} from '../http/axios'

export default {
    namespaced:true,
    state:{},
    getters:{},
    mutations:{},
    actions:{
        async helloHandler(context){
            alert("hello world")
        }
    }
}