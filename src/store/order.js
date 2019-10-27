import {get,post,post_array} from '../http/axios'

export default {
    namespaced:true,
    state:{
        test:"hello",
        orders:[]
    },
    getters:{
    },
    mutations:{
        refreshOrders(state,orders){
            state.orders=orders;
        }
    },
    actions:{
        async findAllOrders(context){
            let response = await get("/order/findAll");
            context.commit("refreshOrders",response.data)
        }
    }
}