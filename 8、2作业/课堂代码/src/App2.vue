<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <Index msg="啦啦啦" school="积云教育" @handleClick='getChildrenInfo'>
    <template v-slot:aaa>
      <span>我是具名插槽</span>
    </template>
    <span>我是匿名插槽</span>
  </Index>
  监听ref:<input type="text" v-model="a"><br><br>
  姓名: <input v-model='user.name' /><br/><br/><br/>
  年龄: <input v-model='user.age' /><br/><br/><br/>
  个人信息: <input v-model='user.userInfo'/>
</template>

<script lang="ts">
import {computed,reactive,watch,ref} from 'vue'
import Index from './components/index.vue'
export default{
  components:{
    Index
  },
  setup(){
    let a = ref('aaa')
    let user = reactive({
      name: '许永智',
      age: '18'
    })
    const getChildrenInfo = (value: string) => {
      // console.log(value);
    }
    //@ts-ignore  computed的简写
    // user.userInfo = computed(() => {
    //   return user.name + '-' + user.age
    // })
    // @ts-ignore  computed的完整写法
    user.userInfo = computed({
      get(){
        return user.name + '-' + user.age
      },
      set(value){
        console.log(value);
        // @ts-ignore
        let [n,a] = value.split('-')
        user.name = n,
        user.age = a
      }
    })
    // 监听ref的响应式数据
    watch(a,(newValue,oldValue) => {
      console.log(newValue,oldValue);
    },{immediate: true})
    // 监听reactive的响应式数据
    watch(user,(newValue,oldValue) =>{
      console.log('user变化了',newValue,oldValue);
    })
    // 监听reactive数据中的某个属性
    watch(()=>user.name,(newValue,oldValue) =>{
      console.log('user中的name变化了',newValue,oldValue);
    })
    // 监听reactive数据中的某些属性
    watch([()=>user.name,()=>user.age],(newValue,oldValue) =>{
      console.log('user中的name或者age变化了',newValue,oldValue);
    })
    return{
      getChildrenInfo,
      user,
      a
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
