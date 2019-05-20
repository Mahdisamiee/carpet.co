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
            <h2>Section One</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sit error possimus quis quisquam similique ratione eaque 
                quaerat voluptatibus, fugiat, beatae perferendis sint pariatur 
                commodi? Optio dolores exercitationem pariatur voluptatem earum 
                expedita tempore magnam cumque facere nihil ipsum sit tenetur 
                repudiandae ducimus sequi, quasi libero perferendis quidem 
                quisquam deleniti suscipit eos non quis? Iusto quidem cupiditate 
                cum beatae voluptatem. Omnis consectetur nulla est fugit non 
                ullam ab ipsa deserunt officiis voluptas, dicta, deleniti, 
                suscipit nemo commodi ipsum aperiam obcaecati numquam veniam 
                laudantium reprehenderit vitae asperiores sapiente ipsam quidem? 
                Deserunt, quae! Consectetur perspiciatis quos quasi soluta temporibus 
                numquam porro totam asperiores ducimus.
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
            <h2>Section two</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sit error possimus quis quisquam similique ratione eaque 
                quaerat voluptatibus, fugiat, beatae perferendis sint pariatur 
                commodi? Optio dolores exercitationem pariatur voluptatem earum 
                expedita tempore magnam cumque facere nihil ipsum sit tenetur 
                repudiandae ducimus sequi, quasi libero perferendis quidem 
                quisquam deleniti suscipit eos non quis? Iusto quidem cupiditate 
                cum beatae voluptatem. Omnis consectetur nulla est fugit non 
                ullam ab ipsa deserunt officiis voluptas,
            </p>
        </section>

        <div class="pimg3">
            <div class="ptext">
                <span class="border trans">
                    We Work To Ghether
                </span>
            </div>
        </div>

        <section class="section section-dark">
            <h2>Section three</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sit error possimus quis quisquam similique ratione eaque 
                quaerat voluptatibus, fugiat, beatae perferendis sint pariatur 
                commodi? Optio dolores exercitationem pariatur voluptatem earum 
                expedita tempore magnam cumque facere nihil ipsum sit tenetur 
                repudiandae ducimus sequi, quasi libero perferendis quidem 
                quisquam deleniti suscipit eos non quis? Iusto quidem cupiditate 
                cum beatae voluptatem. Omnis consectetur nulla est fugit non 
                ullam ab ipsa deserunt officiis voluptas,
            </p>
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
    background-image: url("../assets/back6.jpeg");
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
