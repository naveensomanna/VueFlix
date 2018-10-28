<template>
    <div class="trailer-body" style="background:#1e1d1d">
<iframe allowfullscreen frameborder="0" height="376" :src="trailerPath" style="width:100%;min-width:536px"></iframe>
    </div>
</template>
<script>
export default {
    computed:{
        trailerPath(){
            return this.$store.state.movieChocies[this.$route.params.id].trailerPath;
        }
    }
}
</script>
<style scoped>

</style>


