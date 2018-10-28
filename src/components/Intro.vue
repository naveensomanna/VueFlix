<template>
 <div class="hero-body" style="background-color:#1e1d1d">
   <div class="container">
<h1>VueFlix</h1>
<p>
  Select a movie below from the list of critically acclaimed Christopher Nolan films.
</p>
   </div>

   </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-body{
  background-size: cover;
    background-color: rgba(0,0,0,0.7);
    background-blend-mode: multiply;
      
  padding-bottom: 4rem !important;
      padding-top: 4.5rem !important;
}
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{
  color: red;
}
p{
  color:#fff;
  font-size: 18px;
}
</style>
