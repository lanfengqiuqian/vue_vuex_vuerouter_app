<template>
    <div class="address">
        <van-nav-bar
        title="更改收货地址"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        @select="addHandler"
        @edit="edit" @add="add"
        />
        <!-- 模态框 -->
        <van-dialog
        v-model="show"
        message="设为默认收货地址?"
        show-cancel-button
        @confirm="submitHandler"
        >
        </van-dialog>
        <!-- /模态框 -->
    </div>
</template>
<script>
import Vue from 'vue';
import { AddressList } from 'vant';
import {get,post,post_array} from 'axios'
Vue.use(AddressList);
import { Dialog } from 'vant';
import {Toast} from 'vant'
export default {
    data(){
        return {
            chosenAddressId:0,
            address:{},
            list:[],
            disabledList:[],
            show:false,
        }
    },
    //局部注册对话框组件
    components: {
        [Dialog.Component.name]: Dialog.Component
    },
    methods:{
        findAllAddress(){
            get("/address/findAllAddressWithCustomer")
            .then((response)=>{
                for(let item of response.data){
                    let obj = {};
                    obj.address = String(item.province)+String(item.city)+String(item.area)+String(item.address);
                    obj.id = item.id;
                    obj.name = item.customer.realname;
                    obj.tel = item.telephone;
                    this.list.push(obj);
                }
                
            })
        },
        //返回上一级
        onClickLeft(){
            this.$router.go(-1);
        },
        addHandler(){
            this.show = true;
        },
        //添加默认收货地址
        submitHandler(){
            this.show = false;
        },
        add(){
            Toast.fail("权限不够");
        },
        edit(){
            Toast.fail("权限不够");
        },
    },
    created(){
        // 查询所有地址信息
        this.findAllAddress();
    }
}
</script>