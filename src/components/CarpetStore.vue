<template>
    <main>
        <div class="main">
            <div v-for="carpet in carpetsFirstInfo" :key="carpet._id" class="cube-wrapper">
                <div class="cube">
                    <div class="cube-top">
                        <div id="hoverdiv">        
                            <h2>{{carpet.detail}}</h2>
                            <p>Buy for just {{carpet.price}} $</p>
                            <a href="#" @click.prevent="addOverlay(carpet._id)" class="btn">READ MORE</a>
                        </div>
                    </div>
                    <div class="cube-front">
                        <img v-bind:src="carpet.path" alt=""><!--pay Attention to here ==>>"carpet.path was carpet.imgsrc"-->
                    </div>
                </div>
            </div>
        </div>
        <transition name="overlay-anim">
        <div v-if="overlaybool"  id="overlay">
            <a id="exit" href="#" @click="deleteOverlay()"><i class="fas fa-times fa-2x"></i></a>
            <div id="content">
                <div id="topdiv">
                    <div id="one">
                        <img :src="carpetCompleteDetail.path" alt="image"><!--pay attention to here ==>> the "path"-->
                    </div>
                    <div id="two">
                        <h3>MODEL: {{carpetCompleteDetail.name}}</h3>
                        <h4>PRICE: {{carpetCompleteDetail.price}}$</h4>
                        <h4>Count: {{carpetCompleteDetail.count}}</h4>
                        <div class="block">
                            <span class="demonstration">Please rate to this carpet :</span>
                            <div @click.prevent="rateAlert">
                                <el-rate v-model="carpetCompleteDetail.rate"></el-rate>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <!-- <h2>{{carpetCompleteDetail.detail}}<br></h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, omnis? 
                    dignissimos dolorem eos facere perferendis temporibus error non quisquam fugit libero?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, omnis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, omnis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus 
                    dignissimos dolorem eos facere perferendis temporibus error non quisquam fugit libero?
                    </p>
                    <a href="#" @click.prevent="alert()" class="btn">click</a> -->
                    <h3>Count : </h3>
                    <input v-model="changedcount" type="number" placeholder="Enter count"><br>
                    <button @click="changeCount(changedcount)" class="btn-success">Change</button>
                </div>
                
            </div>
        </div>
        </transition>
    </main>
</template>

<script>

export default {
    
    data(){
        return{
            //now i just add an array of carpet.and then i get them from back
            //notice to that imgsrc not work now and i looking for a way to bind that fuggy
            carpetsFirstInfo:[
                {
                    price: 1300,
                    detail: 'great carpet from me',
                    _id: 1,
                    path: require('../assets/back3.jpeg')
                },
                {
                    price: 1200,
                    detail: 'great carpet from me',
                    _id: 2,
                    path: require('../assets/back2.jpeg')
                },
                {
                    price: 1200,
                    detail: 'great carpet from me',
                    _id: 3,
                    path: require('../assets/back5.jpeg')
                },
                {
                    price: 1200,
                    detail: 'great carpet from me',
                    _id: 4,
                    path: require('../assets/back8.jpeg')
                },
                {
                    price: 1200,
                    detail: 'great carpet from me',
                    _id: 5,
                    path: require('../assets/back7.jpeg')
                }
            ],
            carpetCompleteDetail:{
                
            },
            overlaybool:false,
            //for change count
            changedcount: null,
        }
    },
    methods:{
        fetch:function(){//fetch the data of carpets for show them
    
            this.$store.dispatch('fetchCarpets')
            .then((result) => {
                this.carpetsFirstInfo = result.carpets
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
        },
        addOverlay:function(id){
            this.overlaybool = true;
            console.log(id)
            //here we just show more details and just fetching an item.its mean we need one object to use here
            this.$store.dispatch('fetchCarpetComplete',id)
            .then((result) => {
                this.carpetCompleteDetail = result.data.carpet
                console.log(result.data.carpet)
            }).catch((err) => {
                console.log(err)
            });
        },
        deleteOverlay:function(){
            this.overlaybool = false;
            //clear all data that fetched before
            //this.carpetCompleteDetail = {}
        },
        alert:function(){
            alert("im here")
        },
        rateAlert:function(){
            let rate = this.carpetCompleteDetail.rate;
            let _id = this.carpetCompleteDetail._id
            this.$store.dispatch('sendRate',{rate,_id})
            .then((result) => {
                alert("Thanks For Your Choose");
            }).catch((err) => {
                alert('ooops! we have some mistake with '+err)
            })
        },
        changeCount:function(count){
            let _id = this.carpetCompleteDetail._id
            this.$store.dispatch('changeCount',{_id,count})
            .then((result) => {
                this.overlaybool = false;
                alert("change wasmaked");
            }).catch((err) => {
                this.overlaybool = false;
                alert('ooops! we have some mistake with '+err)
            })
        }
    },
    created(){
        this.fetch();
    }
}
</script>

<style>
*{
    box-sizing: border-box; 
}
.main{
    height: 100%;
    padding: 1.5em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 300px;
    grid-gap: 2.5em;
}

.cube-wrapper{
    background-color: brown;
    box-shadow: 10px 10px 51px -7px rgba(0, 0, 0, 0.75);
    position: relative;/*just this fuggy code make everything worth.*/
}

.cube , .cube div{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in;
}
.cube-front{
    
    background: url("../assets/back7.jpeg") rgb(255, 255, 255) no-repeat center;
    background-size: cover;
    background-position: center;
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
    color: #fff;

    /*background-color: brown;*/
}
/* .cube-front h2{
    background-color: rgba(0, 255, 179, 0.507);
    padding: 10px 16px;
    border-radius: 5px;
    z-index: 2
} */
.cube-front img{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}
.cube-top{
    /* background: url("../assets/back3.jpeg") rgb(255, 255, 255) no-repeat center; */
    background-size: 100%;
    background-color: #fff;
    transform: translate(0 , -100%) rotateX(90deg);
    transform-origin: bottom;
}

.cube:hover{
    transform: translate(0 , 50%) rotateX(-90deg);
}

.cube-top #hoverdiv{
    position: relative;
    width: inherit;
    height: inherit;
    opacity: .8;
    padding: 20px 10px;
    background-color: rgb(248, 85, 9);
    text-align: center;
    color: #fff;
}
.cube-top #hoverdiv h2{
    margin: 0;
    margin-bottom: 50px;
    padding: 0;
}
.cube-top #hoverdiv p{
    margin-bottom: 50px;
}
.cube-top #hoverdiv a{
    text-decoration: none;
    color: #fff;
    opacity: 0;
    border: 1px solid #fff;
    padding: 9px;   
    transition-property: all;
    transition-duration: 0.5s;
}
.cube-top #hoverdiv:hover a{
    opacity: 1;
}
.cube-top #hoverdiv a:hover{
    box-shadow: -1px 1px 2px #fff;
}


/* OVERLAY and its CONTENT*/
#overlay{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(62, 60, 70, 0.685);
    z-index: 2;
    padding: 30px;
}
#overlay #content{
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 50%;
    min-height: 600px;
    height: auto;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    padding: 20px 20px;
    color: #888;
    letter-spacing: 1.5px;
    line-height: 1.6rem;
    z-index: 10;
}

#overlay #content #topdiv{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
}
#overlay #content #topdiv #one img{
    width: 100%;
    border-radius: 10px 0 50% 0;
}

#overlay #exit{
    position: absolute;
    top: 20px;
    left: 20px;
    color: #174b09;
    padding: 10px;
    border-radius: 3px;
    transition: all;
    transition-duration: .4s;
}
#overlay #exit:hover{
    color: #aaa;
    background-color: #fff;
}

/* Transition for Overlay page */
.overlay-anim-enter-active{
    animation: coming 1s;
    animation-delay: 0.3s; 
    opacity: 0;
}
.overlay-anim-leave-active{
    animation: going 1s;
}

@keyframes coming {
    from{
        transform: scale(1.2);
    }
    to{
        transform: scale(1);
        opacity: 1;
    }
    }
@keyframes going {
    from{
        transform: scale(1)
    }
    to{
        transform: scale(0.85);
        opacity: 0;
    }
}
</style>
