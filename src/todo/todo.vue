<template>
    <section class="real-app">
        <input 
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下去要做什么？"
            v-on:keyup.enter="addTodo"
        >
        <!-- 通过：todo="todo"将父组件中todo的值传给子组件 -->
        <Item 
        :todo="todo"
        v-for="todo in filteredTodos"
        :key="todo.id"
        @del="deleteTodo"
        />
        <Tabs 
        :filter="filter"
        :todos="todos"
        @toggle="toggleFilter"
        @clearAllCompleted="clearAllCompleted"
        />
    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id=0
export default {
    // 通过data函数进行数据声明
    data(){
        return{
            todos:[],
            filter:'全部'
        }
    },
    components:{
        Item,
        Tabs
    },
    computed:{

        filteredTodos(){
            if(this.filter==='全部'){
                return this.todos
            }
            //让filter===completed
            const completed=this.filter==='已完成'
            return this.todos.filter(todo=>completed===todo.completed)
        }
    },
    methods: {
        addTodo(e){
            this.todos.unshift({
                id:id++,
                content:e.target.value.trim(),
                completed:false
            })
            e.target.value=''  //输入完成后则清空input中的内容
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo => todo.id===id),1)
        },
        toggleFilter(state){
            // 这里的的state是从子组件传过来的
            this.filter=state
        },
        clearAllCompleted(){
            //清除已完成的任务即意味着只留下未完成的，将过滤了completed的todos再赋值给todos即可
            this.todos=this.todos.filter(todo=>!todo.completed)
        }
    },
}
</script>

<style lang="stylus" scoped>
 .real-app
     width 600px
     margin 0 auto
     padding-top 10px
.add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit 
    line-height 1.4em
    border none
    outline none 
    color inherit 
    box-sizing border-box
    font-smoothing antialiased
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
  

</style>
