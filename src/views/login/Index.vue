<template>
   <div class="login-container">

      <el-form :model="form" class="login-form">
         <h3 class="title">代理後台</h3>
         <el-form-item>
            <span class="svg-container">
               <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                  <path fill="currentColor"
                     d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z">
                  </path>
               </svg>
            </span>
            <el-input v-model="form.username" />
         </el-form-item>
         <el-form-item>
            <span class="svg-container">
               <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                  <path fill="currentColor"
                     d="M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z">
                  </path>
                  <path fill="currentColor"
                     d="M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z">
                  </path>
               </svg> </span>
            <el-input v-model="form.password" />
         </el-form-item>
         <el-button size="default" type="primary" style="width: 100%; margin-bottom: 30px">登入</el-button>
      </el-form>
   </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue'
const form = reactive({
   username: '',
   password: ''
})


</script>

<style lang="scss" scoped>
$bg: #2D3A4B;
$dark_gray: #889aa4;
$light_gray: #fff;
$cursor: #fff;


.svg-container {
   color: $dark_gray;
   vertical-align: middle;
   width: 20px;
   height: 20px;
   padding: 7px 5px;
   border-top: 1px  solid #3F4958;
   border-bottom: 1px  solid #3F4958;
   border-left: 1px  solid #3F4958;


   display: inline-block;
}

body,
html {
   overflow: hidden;
}

.el-form-item {
   display: flex;

}


.el-form {
   margin-right: 30px;
}

.login-container {

   width: 100%;
   height: 100%;
   background-color: $bg;
   overflow: hidden;

   .title {
      color: white;
      text-align: center;
   }



   .login-form {
      width: 420px;
      height: 220px;
      margin: 0 auto;
      overflow: hidden;
      margin-top: 200px;
      background-color: $bg;

   }

   .el-input {
      height: 36px;
      width: 388px;
      outline: none;

      .el-input__wrapper {
         padding: 0;
         background: transparent;
         box-shadow: none;

         .el-input__inner {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            color: $light_gray;
            height: 36px;
            caret-color: $cursor;

            &:-webkit-autofill {
               box-shadow: 0 0 0px 1000px $bg inset !important;
               -webkit-text-fill-color: $cursor !important;
            }
         }
      }
   }

   :deep(.el-input__wrapper){
      background-color: $bg;
      border-radius: 0%;
      box-shadow: none;
            color: white;

                  border: 1px solid #3F4958;

   }

   :deep(.is-focus){
            box-shadow: none;
            border: 1px solid #3F4958;

   } 

   :deep(.el-input__inner){
      color: white;
   }



}
</style>