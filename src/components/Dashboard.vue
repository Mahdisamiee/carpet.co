<template>
    <main>
        <div id="dashboard">
            <div id="left">
                <div id="profile">
                    <!-- here we add an img tag with a src that get from backend -->
                    <img  :src="personalPic" alt="img">
                    <div id="setting">
                    <!-- here we make some setting to chabge color of site -->
                        <!-- <a href="#">d</a>
                        <a href="#">d</a>
                        <a href="#">a</a> -->
                    </div>
                </div>
                <div id="user">
                    <!-- we should add name and last nam here -->
                    <h3>Hi {{userInfo.name}} {{userInfo.lastname}}</h3>
                    <p>Welcome to Dashboard</p>
                    <p>here you can access to an amazing world</p>
                </div>
            </div>
            <div id="right">
                <el-tabs :tab-position="tabPosition" style="height: 100%;width:100%;">
                    <el-tab-pane label="User">User

                    </el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane v-if="admin" label="Task">Task</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    
    data(){
        return{
            personalPic:require('../assets/avatar.jpg'),
            tabPosition:'top',
            admin:false            
        }
    },
    methods:{
        
    },
    computed:{
        userInfo(){
            return this.$store.getters.personalInfo;
        }
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
main{
    width: 100%;
    min-height: 600px;
    height: auto;
    background-color: rgb(230, 230, 230);
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
}
main #dashboard{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50% , -20%);
    background-color: #fff;
    width: 70%;
    min-height: 500px;
    height: auto;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr 4fr;
}
main #dashboard #left{
    background-color: rgb(247, 247, 247);
    display: grid;
    justify-items: center;
}
main #dashboard #left #profile{
    display: grid;
    grid-template-rows: 4fr 1fr; 
    align-items: center;
}
main #dashboard #left #profile img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0;
}
main #dashboard #left #profile #setting>a {
    /* here we need some css to  */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: red;
    text-decoration: none;
    margin: auto;
}
main #dashboard #left  #user{
    padding: 10px;
}

/* HERE IS SEPRATE L_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌiNE */
main #dashboard #right{
    width: 50%;
    height: 500px;
    padding: 40px;
}

</style>
