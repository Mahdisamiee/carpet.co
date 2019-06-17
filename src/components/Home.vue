<template>
    <main>
        
        <div class="pimg1">
            <div class="ptext">
                <span class="border">
                    Welcome to Carpet Store.
                </span>
            </div>
        </div>

        <section class="section section-blue">
            <h2>Persian carpet</h2>
            <p>
                A Persian carpet (Persian: فرش ايرانى‎ farsh, meaning "to spread") or Persian rug (Persian: قالی ايرانى qālī-ye īranī),[1] also known as Iranian carpet, is a heavy textile made for a wide variety of utilitarian and symbolic purposes and produced in Iran (historically known as Persia), for home use, local sale, and export. Carpet weaving is an essential part of Persian culture and Iranian art. Within the group of Oriental rugs produced by the countries of the so-called "rug belt", the Persian carpet stands out by the variety and elaborateness of its manifold designs.
Persian carpets and rugs of various types were woven in parallel by nomadic tribes, in village and town workshops, and by royal court manufactories alike. As such, they represent different, simultaneous lines of tradition, and reflect the history of Iran and its various peoples. The carpets woven in the Safavid court manufactories of Isfahan during the sixteenth century are famous for their elaborate colours and artistical design, and are treasured in museums and private collections all over the world today. Their patterns and designs have set an artistic tradition for court manufactories which was kept alive during the entire duration of the Persian Empire up to the last royal dynasty of Iran.
            </p>
        </section>

        <div class="pimg2">
            <div class="ptext">
                <span class="border trans">
                    For Every One  
                </span>
            </div>
        </div>

        <section class="section section-dark">
            <h2>Tools</h2>
            <p>
                The weaver needs a number of essential tools: a knife for cutting the yarn as the knots are tied;
                a heavy comb-like instrument with a handle for packing down the wefts; and a pair of shears for 
                trimming the pile after a row of knots, or a small number of rows, have been woven. In Tabriz the 
                knife is combined with a hook to tie the knots, which speeds up work. A small steel comb is sometimes 
                used to comb out the yarn after each row of knots is completed.
                A variety of additional instruments are used for packing the weft. Some weaving areas in Iran known for 
                producing very fine pieces use additional tools. In Kerman, a saber like instrument is used horizontally 
                inside the shed. In Bijar, a nail-like tool is inserted between the warps, and beaten on in order to compact 
                the fabric even more. Bijar is also famous for their wet loom technique, which consists of wetting the warp, 
                weft, and yarn with water throughout the weaving process to compact the wool and allow for a particularly heavy 
                compression of the pile, warps, and wefts. When the rug is complete and dried, the wool and cotton expand, which 
                results in a very heavy and stiff texture. Bijar rugs are not easily pliable without damaging the fabric.
                A number of different tools may be used to shear the wool depending on how the rug is trimmed as the weaving 
                progresses or when the rug is complete. Often in Chinese rugs the yarn is trimmed after completion and the trimming 
                is slanted where the color changes, giving an embossed three-dimensional effect.
            </p>
        </section>

        <div class="pimg3">
            <div class="ptext">
                <span class="border trans">
                    We Work Together
                </span>
            </div>
        </div>

        <section id="imggallery" class="section section-dark">
            <div>
                <el-carousel type="card" height="300px">
                    <el-carousel-item v-for="item in imges" :key="item">
                        <img :src='require("../assets/"+item)' alt="hello">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </section>
        

        <div class="pimg1">
            <div class="ptext">
                <span class="border">
                    Join Us :)
                </span>
            </div>
        </div>

        <footer>
            <div>
                <p>this site designed by <span id="teamname">AtripleM</span>. All rights are reserved for <span id="projectname">Carpet.co</span></p>
            </div>
        </footer>
    </main>
</template>

<script>
export default {
    data(){
        return{
            imges:[
                'persianc1.jpg',
                'persianc2.jpg',
                'back5.jpeg',
                'persianc3.jpg',
            ]
        }
    }
}
</script>

<style scoped>
main{
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8em;
    color: #444;
}
.pimg1, .pimg2, .pimg3{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-attachment: fixed;
}
.pimg1{
    background-image: url("../assets/back8.jpeg");
    min-height: 550px;
}
.pimg2{
    background-image: url("../assets/back4.jpg");
    min-height: 400px;
}
.pimg3{
    background-image: url("../assets/back7.jpeg");
    min-height: 400px;
}
.section{
    text-align: center;
    padding: 50px 80px;
    border:2px solid #4286f4;
    border-right: none;
    border-left: none;
}

.section-blue{
    background-color: #ebebeb;
    color: rgb(85, 84, 84);
}

.section-dark{
    background-color: #282e34;
    color: #ddd;
}
#imggallery{
    padding: 50px 200px;
}

/* this are for element-elem*/
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    
    background-color: rgb(221, 221, 221);
}

.el-carousel__item:nth-child(2n+1) {
    background-color: rgb(153, 153, 153);
}

.el-carousel__item img{
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
}


.ptext{
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #4286f4;
    font-size: 27px;
    text-transform: uppercase;
    letter-spacing: 8px;
    opacity: 1;
}
.ptext .border{
    background-color: #353030;
    color: #fff;
    padding: 20px;
    font-size: 28px;
    font-weight: bold;
    border-radius: 5px;
}

.ptext .trans{
    background-color: transparent;
}

footer{
    min-height: 100px;
    background-color: #4286f4;
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 5px 0 0;
}
footer #teamname,#projectname{
    color: crimson;
    font-weight: bold;
}


@media (max-width:760px){
    .pimg1, .pimg2, .pimg3{
        background-attachment: scroll;
        opacity: 1;
    }
}
</style>
