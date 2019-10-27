import {get,post,post_array} from '../http/axios'

export default {
    namespaced:true,
    state:{
        categories:[],
    },
    getters:{},
    mutations:{
        refreshCategories(state,data){
            state.categories = data;
        },     
    },
    actions:{
        //查询所有分类信息
        async findAllCategories(context){
            let response = await get("/category/findAll");
            context.commit("refreshCategories",response.data);
        },
    }
}