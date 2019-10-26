import {get,post,post_array} from '../http/axios'

export default {
    namespaced:true,
    state:{
        test:"hello"
    },
    getters:{
        helloHandler(){
            console.log("hello")
        }
    },
    mutations:{
        testHandler(){
            alert("this is a order demo")
        }
    },
    actions:{}
}