<template>
    <div id="app">
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer> 
    </div>
</template>

<script>
import Header from './todo/header.vue'
import Todo from './todo/todo.vue'
import Footer from './todo/footer.jsx'

export default {
   components:{
       Header,
       Todo,
       Footer
   }
}
</script>


