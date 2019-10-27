<template>
    <div class="userAddress">
        <div class="back" @click="backHandler">
            <van-icon name="arrow-left"  />
            <span>返回</span>
        </div>
        <van-divider />

        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        
        />
        
    </div>
</template>
<script>

// import Vue from 'vue';
// import { AddressList } from 'vant';

// Vue.use(AddressList);
export default {
    data(){
        return {
            chosenAddressId: '1',
            list: [
                {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ],
            disabledList: [
                {
                id: '3',
                name: '王五',
                tel: '1320000000',
                address: '浙江省杭州市滨江区江南大道 15 号'
                }
            ]
        }
    },
    methods:{
        backHandler(){
            // this.$rourer.go(-1)
            this.$router.push({path:"/user"})
        }
    }
    
}
</script>
<style scoped>
    .back{
        height: 40px;
        line-height: 40px;
        position: relative;
        padding-top: 10px;

    }
    .back span{
        position: absolute;
        top:9px;
    }

</style>