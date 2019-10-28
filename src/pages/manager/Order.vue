<template>
    <div class="order">
       <div class="title">
            <van-sticky>
            <van-button style="width:100%">我的订单</van-button>
            </van-sticky>
            <hr>
            <van-tabs>
                    <!-- {{orders}} -->
                <van-tab title="全部订单" >
                   <!-- <van-card
                   v-for="o in orders" :key="o.id"
                    num="1"
                    :price="o.total"
                    :desc="o.remark"
                    :number="o.orderTime"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    /> -->
                    <van-card
                    v-for="o in orders" :key="o.id"
                    num="1"
                    :price="o.total"
                    :desc="o.status"  
                    title=""
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    >
                        <div slot="tags">
                            <van-tag plain type="danger">{{dateParse(o.orderTime)}}</van-tag>
                        </div>
                    </van-card>
                </van-tab>
                <van-tab title="未付款"></van-tab>
                <van-tab title="未服务">
                    <van-card
                    v-for="o in orders.filter(item => item.status=='未服务')" :key="o.id"
                    num="1"
                    :price="o.total"
                    :desc="o.status"  
                    title=""
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    >
                        <div slot="tags">
                            <van-tag plain type="danger">{{dateParse(o.orderTime)}}</van-tag>
                        </div>
                    </van-card>
                </van-tab>
                <van-tab title="未评价"></van-tab>
            </van-tabs>
       </div>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {
            active:0,
        }
    },
    computed:{
        ...mapState("order",["orders"]),
        ...mapGetters("order",[]),
    },
    methods:{
        ...mapMutations("order",[""]),
        ...mapActions("order",["findAllOrders"]),
        //普通方法
         dateParse(dataString) {
		  if(dataString){
		    let date = new Date(dataString);
		    let Y = date.getFullYear() + '-';
		    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		    let D = (date.getDate()< 10 ? '0'+date.getDate() : date.getDate())+' ';
		    let h = (date.getHours()< 10 ? '0'+date.getHours() : date.getHours())+ ':';
		    let m = (date.getMinutes()< 10 ? '0'+date.getMinutes() : date.getMinutes())+ ':';
		    let s = (date.getSeconds()< 10 ? '0'+date.getSeconds() : date.getSeconds());
		    return Y+M+D+h+m+s;
		  }else{
		    return '';
		  }
		}
    },
    created(){
        this.findAllOrders();
        // console.log(this.dateParse(1568961628188))
    }
}
</script>
<style scoped>
    .title {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 1px;
        border: 1px !important;
    }
    .title * {
        border: 0px;
    
    }
</style>
