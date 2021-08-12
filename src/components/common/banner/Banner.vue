<template>
    <div class="about">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="~assets/img/banner/nav1.jpg" alt="" width="100%">
                </div>
                <div class="swiper-slide">
                    <img src="~assets/img/banner/nav2.jpg" alt="" width="100%">
                </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        name: "Banner",
        mounted() {
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',


            })
        }
    }
</script>

<style scoped>
.swiper-slide img{
    margin-top: 5px;
}
</style>