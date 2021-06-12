<template>
    <img 
        :src="src"
        :alt="alt"
        :url="url"
    >
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: false
        }
    }
}
</script>