<template>
    <ul id="partners-contents">
        <li v-for="logo in logos" :key="logo.src">
            <img v-bind:src="logo.src">
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            logos: [
                // { src: '../../assets/2020corporation-logo/accenture.png' }, 相対パスではなさげ
                { src: require('@/assets/2020corporation-logo/accenture.png') }, //これでいけるかと思ったができなかった
            ]
        }
    }
};

</script>

<style scoped lang="scss">

</style>
