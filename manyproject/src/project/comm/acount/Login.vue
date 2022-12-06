<template>
    <div id="login">
        <Navbar></Navbar>
        <PageTitle></PageTitle>
        <UsernameType></UsernameType>
        <div class="blank-10-5"></div>
        <Username></Username>
        <Code></Code>
        <Password ></Password>
        <Password :inLineStyle="{marginBottom:0}"></Password>
        <div class="blank-102"></div>
        <Submit ></Submit>
    </div>
</template>
<script>
import Navbar from "@c/Navbar"
import PageTitle from "./components/PageTitle"
import UsernameType from "./components/UsernameType"
import Username from "@c/form/Username"
import Code from "@c/form/Code"
import Password from "@c/form/Password"
import Submit from "@c/form/Submit"
export default{
    name:"Login",
    components:{
        Navbar,
        PageTitle,
        UsernameType,
        Username,
        Code,
        Password,
        Submit
    }
};
</script>
<style lang="scss">
</style>