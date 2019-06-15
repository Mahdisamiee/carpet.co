<template>
    <main>
        <div id="dashboard">
            <div id="left">
                <div id="profile">
                    <!-- here we add an img tag with a src that get from backend -->
                    <img  :src="personalPic" alt="img">
                    <div id="setting">
                    <!-- here we make some setting to chabge color of site -->
                        <el-switch
                            style="display: block"
                            v-model="backColor"
                            active-color="#1B9DD7"
                            inactive-color="#555555"
                            active-text="light"
                            inactive-text="dark">
                        </el-switch>
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
                <el-tabs tab-position="top">
                    <el-tab-pane v-if="!admin" label="User">User
                        <div id="user" >
                            <h2>this is a place for manipulate personal information</h2>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane v-if="!admin" label="Config">Config</el-tab-pane>
                    <el-tab-pane v-if="!admin" label="Role">Role</el-tab-pane>

                    <!-- Admin page content -->
                    <el-tab-pane id="newcarpet" v-if="admin" label="NewCarpet">
                        <div id="newcarpet">
                            <div id="nodenumbersdiv">
                                <label>Node : </label>
                                <input v-model="maxNodeSize" type="number" placeholder="enter number of Node" min="0">
                            </div>
                            <div id="getnodesdiv">
                                <input v-model="firstinput" type="text" id="firstinput" maxlength="1" placeholder="Enter main node">
                                <input v-model="getstring" type="text" id="getstring" placeholder="Enter Neighbor Nodes">
                            </div>
                            <div id="submitdiv">
                                <button class="btn btn-add" v-if="!readytosend" @click.prevent="addNode(firstinput,getstring)">Add</button>
                                <button class="btn btn-send" v-if="readytosend" @click.prevent="sendingData">Send :)</button>
                            </div>
                            <div v-if="readytosend" id="information">
                                <h3>data to send is:</h3>
                                <p>{{sendingObject}}</p>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane v-if="admin" label="ChangeFilter">

                    </el-tab-pane>
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
            admin:true, // should get with getter from store
            backColor: true,
            // these are related to #newcarpet div that is for making carpet
            maxNodeSize : null,
            firstinput : '',
            getstring : "",
            count : 1,
            sendingObject : {},
            readytosend : false
        }
    },
    methods:{
        addNode:function(val,str){
            if(this.count <= this.maxNodeSize){
                if(this.count == this.maxNodeSize){
                    alert("ok! your graph is ready to send.");
                    this.readytosend = true;
                    
                    console.log(this.sendingObject)
                }
                let strarr = Array.from(str)
                this.sendingObject[val] = strarr;

                //after end the proccess
                this.firstinput = '';
                this.getstring = "";
                this.count++;
            }
            else{
                alert("this is not recognize");
                console.log(this.sendingObject);
            }
        }
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
    box-shadow: 9px 8px 30px -5px rgba(92,90,92,1);
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
    padding: 20px;
    letter-spacing: 3px;
    line-height: 25px;
}

/* HERE IS SEPRATE L_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌ_ٌiNE */
main #dashboard #right{
    width: 50%;
    height: 500px;
    padding: 40px;
}
.el-tabs{
    height: 100%;
    width: 100%;
    min-width: 760px;
    padding: 20px;
}

#newcarpet{
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
}
#newcarpet input{
    padding: 7px 5px;
    text-align: center;
    margin-left: 10px;
    border: 1px solid rgb(10, 141, 97);
}
#newcarpet #firstinput{
    width: 120px;
    margin-left:0px;
}
.btn{
    width: 80px;
    height: 30px;
    padding: 5px 10px;
    font-size: 18px;
    border: none;
    color: #fff;
}
.btn-add{
    background-color: rgb(10, 141, 97);
}
.btn-send{
    background-color: #409EFF;
}

/* classes */
.light{
    background-color: rgb(110, 110, 110);
    color: #fff;
}
</style>
