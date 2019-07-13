<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}}项未完成 </span>
        <span class="tabs">
            <!--:class表示一个动态的类；filter代表我们正选中的状态 -->
            <span
                v-for="state in states"
                :key="state"
                :class="[state,filter===state?'actived':'']"
                @click="toggleFilter(state)"
            >
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">清除已完成的任务</span>
    </div>
</template>

<script>

export default {
// 因为filter需要从上层组件传进来，所以需要用props进行声明一下
props:{
    filter:{
        type:String,
        required:true
    },
    todos:{
        type:Array,
        required:true
    }
},
    data(){
        return{
            states:['全部','已完成','未完成']
        }
    },
    methods:{
        toggleFilter(state){
            //state是要传出去的一个参数，表示接下来的状态
            this.$emit('toggle',state)

        },
        clearAllCompleted(){
            this.$emit('clearAllCompleted')
        }
    },
    computed:{
        unFinishedTodoLength(){
            return this.todos.filter(todo=>!todo.completed).length
        }
    }
    
    
}
</script>
<style lang="stylus" scoped>
.helper
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #ffffff
    font-size 14px
    font-smoothing antialiased
.left, .clear, .tabs
    padding 0 10px
.left .clear
    width 150px
.left
    text-align center
.clear
    text-align right
    cursor pointer
.tabs
    width 200px
    display flex
    justify-content space-between
    *
        display inline-block
        padding 0 10px
        cursor pointer
        border 1px solid rgba(175,47,47,0)
        &.actived
            border-color rgba(175,47,47,0.4)
            border-radius 5px
</style>


