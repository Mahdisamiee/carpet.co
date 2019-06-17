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
                    <!-- <h3>Hi {{userInfo.name}} {{userInfo.lastname}}</h3> -->
                    <p>Welcome to Dashboard</p>
                    <p>here you can access the new world :)</p>
                </div>
            </div>

            <div id="right">

                
                <el-tabs tab-position="top">

                    <!-- Users Page -->
                    <el-tab-pane v-if="!is_admin" label="User">User
                        <div id="user" >
                            <h2>this is a place for manipulate personal information</h2>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane v-if="!is_admin" id="newcarpet" label="MapsMe">
                        <div id="newcarpet">
                            <div>
                                <h3>Where Are You?</h3>
                                <input class="mapsme" v-model="mapsme" type="number" placeholder="enter your location" >
                                <button style="marginLeft:10px" class="btn btn-send" @click.prevent="mapsMe(mapsme)">Find</button>
                            </div>
                            <div>
                                <h3>{{nearestway}}</h3>
                            </div>
                        </div>
                    </el-tab-pane>


                    <el-tab-pane v-if="!is_admin" id="newcarpet" label="our Suggestion">
                        <div id="newcarpet">
                            <div>
                                <h4>our suggestion to you :)</h4>
                                <input v-model="suggestionval" type="number" min="0" placeholder="enter your money">
                                <button style="marginLeft:10px" class="btn btn-send" @click.prevent="suggestion(suggestionval)">Find</button>
                            </div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Name:</td>
                                            <td>Count:</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{suggestiondata[0]}}</td>
                                            <td>{{suggestiondataval[suggestiondata[0]]}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane id="newcarpet" v-if="!is_admin" label="NewCarpet">
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
                            <div id="count_price">
                                <input v-model="carpetName" type="text" id="firstinput" placeholder="Enter Name">
                                <input v-model="carpetCount" type="number" id="getstring" placeholder="Number of Count">
                                <input v-model="carpetPrice" type="number" id="getstring" placeholder="Price of this">
                            </div>
                            <div v-if="readytosend" id="information">
                                <h3>data to send is:</h3>
                                <p>{{sendingObject}}</p>
                            </div>
                        </div>
                    </el-tab-pane>

                    
                    <!-- Admin page content -->
                    <el-tab-pane v-if="is_admin" label="ChangeFilter">

                    </el-tab-pane>

                    <el-tab-pane id="fluid" v-if="is_admin" label="FluidMap">
                        <div id="newway">
                            <div id="nodenumbersdiv">
                                <label>Node : </label>
                                <input v-model="maxNodeSize2" type="number" placeholder="enter number of Node" min="0">
                            </div>
                            <div id="storenodes">
                                <label>Store Node : </label>
                                <input v-model="storenodes" type="text" id="storenode" placeholder="Enter Stores">
                            </div>
                            <div id="getnodesdiv">
                                <input v-model="firstnode" type="number" id="firstnode" maxlength="1" placeholder="Enter Start Node">
                                <input v-model="secondnode" type="number" id="secondnode" maxlength="1" placeholder="Enter Destination Node">
                                <input v-model="distance" type="number" id="distance" placeholder="Enter Distance">
                            </div>
                            <div id="submitdiv">
                                <button class="btn btn-add" v-if="!readytosend2" @click.prevent="addWay(distance)">Add</button>
                                <button class="btn btn-send" v-if="readytosend2" @click.prevent="sendingData2">Send :)</button>
                            </div>
                            <div v-if="readytosend2" id="information">
                                <h3>data to send is:</h3>
                                <p>{{sendingObject2}}</p>
                            </div>
                        </div>
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
            //is_admin:true, // should get with getter from store
            backColor: true,
            // these are related to #newcarpet div that is for making carpet
            maxNodeSize : null,
            firstinput : '',
            getstring : "",
            count : 1,
            sendingObject : {},
            readytosend : false,
            carpetName: "",
            carpetCount : null,
            carpetPrice : null,
            //these are related to suggestion
            suggestionval: null,
            suggestiondata : [],
            suggestiondataval : "",
            //these are related to MapsMe
            mapsme: null,
            mapsmedata: [],
            nearestway : "",
            //these are related to #newway div that is for making way
            maxNodeSize2 : null,
            firstnode : null,
            secondnode : null,
            distance : null,
            count2 : 1,
            readytosend2 : false,
            sendingObject2 : {
                matrix :'',
                count : null,
                stores : ''
            },
            arrayforsob2 : [],
            storenodes : '',
        }
    },
    methods:{
        suggestion:function(suggestionval){
            if(this.suggestionval != null){
                this.$store.dispatch('suggestion' , suggestionval)
                .then((result) => {
                    //this.suggestiondata = result.answer;//to show this on page
                    this.suggestiondata = Object.keys(result.answer)
                    this.suggestiondataval = result.answer
                    console.log("=====")
                    console.log(this.suggestiondata[0])
                    console.log(result.answer)
                }).catch((err) => {
                    console.log(err)
                });
            }
        },
        mapsMe:function(mapsme){
            if(this.mapsme != null){
                this.$store.dispatch('mapsMe' , mapsme)
                .then((result) => {
                    this.mapsmedata = result.router;
                    console.log(result.router);
                    this.nearestway = this.mapsmedata.join(" ==> ")
                }).catch((err) => {
                    console.log(err)
                });
            }
        },
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
        },
        addWay:function(dist){
            if(this.storenodes != ''){
                if(this.count2 <= this.maxNodeSize2*this.maxNodeSize2){
                    if(this.count2 == this.maxNodeSize2*this.maxNodeSize2){
                        alert("Ok! your Map Is ready to send.")
                        this.readytosend2 = true;
                        //initialize object to send ->
                        this.sendingObject2.matrix = this.arrayforsob2.join(".")+".0";
                        this.sendingObject2.count = this.maxNodeSize2;
                        let str = "";
                        for (let i = 0; i < this.storenodes.length; i++) {
                            str += this.storenodes[i]+'.';
                        }
                        str = str.substring(0, str.length - 1);
                        this.sendingObject2.stores = str;
                        //for debugging->
                        console.log(this.sendingObject2);
                        console.log(this.arrayforsob2);
                    }
                    this.arrayforsob2.push(dist);

                    //after end proccess
                    this.firstnode = '';
                    this.secondnode = '';
                    this.distance = null;
                    this.count2++;
                
                }else{
                    alert("this is not Recognize");
                }

            }
        },
        sendingData:function(){
            let data = {
                name : this.carpetName,
                count : this.carpetCount,
                price : this.carpetPrice,
                matrix : this.sendingObject
            }
            if(this.carpetName == ''){
                alert("please fill the name.")
            }else{
                this.$store.dispatch('makeCarpet' , data)
                .then((result) => {
                    console.log(result)
                    this.maxNodeSize = null
                    this.firstinput = ''
                    this.getstring = ''
                    this.carpetName = ''
                    this.carpetCount = null
                    this.carpetPrice = null
                }).catch((err) => {
                    console.log(err)
                });
            }
            
        },
        sendingData2:function(){
            this.$store.dispatch('makeMap' , this.sendingObject2)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
        }
    },
    computed:{
        userInfo(){
            return this.$store.getters.personalInfo;
        },
        is_admin(){
            return this.$store.getters.isAdmin;
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

#newway{
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
}
#newway input{
    padding: 7px 5px;
    text-align: center;
    margin-left: 10px;
    border: 1px solid rgb(10, 141, 97);
}
#newway #firstnode{
    width: 120px;
    margin-left:0px;
}


.btn{
    width: 80px;
    height: 32px;
    padding: 5px 10px;
    font-size: 18px;
    border: none;
    color: #fff;
    transition: all 0.3s;
}
.btn-add{
    background-color: rgb(10, 141, 97);
}
.btn-send{
    background-color: #409EFF;
    
}
.btn-send:active{
    transform: scale(0.8);
}

/* classes */
.light{
    background-color: rgb(110, 110, 110);
    color: #fff;
}
</style>
