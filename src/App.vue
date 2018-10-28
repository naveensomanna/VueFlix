<template>
  <div class="hero">
    <router-view/>
    <div class="hero-foot">
    <div class="movie-list">
<div v-for="movie in movieChocies" :key="movie.id">
<router-link :to="`/${movie.id}`"><img :src="movie.smallImgSrc" class="movie-choice"/></router-link>
</div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  }
  ,
  computed:{
    movieChocies(){
      return this.$store.state.movieChocies;
    }
  }
}
</script>

<style >
html,body{
  height: 100%;
  background: linear-gradient(to bottom right,#7f3737,#2a2122);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.movie-list{
  padding: 15px;
text-align: center;
display: flex;  
}
.movie-list a{
  padding-right:.75rem; 
}
.hero-foot{
  background: linear-gradient(to bottom right,#7d1e24,#bb2d35);
}
.hero{
  max-width: 1021px;
  background: #1e1d1d;
  position: relative;
  box-shadow: 0 0 50px 5px rgba(0,0,0,.25);
}
.movie-choice{
opacity: 0.9;
}
</style>
