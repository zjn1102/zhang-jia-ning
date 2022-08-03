<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>{{ school }}</h1>
        <slot name="aaa"></slot><br>
        <slot></slot>
        <hr />
        <button @click="handleGetParent">触发子组件的信息</button>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    // props: ['msg','school'],
    setup(props,context){
        // console.log(props);
        // console.log(context);
        const handleGetParent = () =>{
            context.emit('handleClick','我是子组件')
            alert('我是子组件')
        }
        return {
            msg: context.attrs.msg,
            school: context.attrs.school,
            handleGetParent
        }
    }
})
</script>