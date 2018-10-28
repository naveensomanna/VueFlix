<template>
    <div :style="{'background-image':movie.largeImgSrc}" class="movie">
        <header class="nav">
        <div class="container">
            <div class="nav-left">
                <router-link to="/">Home</router-link>
                <a class="nav-item is-active">
                    Films
                </a>
                <a class="nav-item">
                    Shows
                </a>
                <a class="nav-item">
                    Music
                </a>
            </div>
            <div class="nav-right">
<span class="nav-item">
    <router-link to="/" class="title-flix">vueflix</router-link>
</span>
            </div>
        </div>
        </header>
        <div class="content">
            <h1 class="title">{{movie.title}}</h1>
            <h4 class="subtitle">
                <p class="subtitle-tag">{{movie.duration}} | <p class="subtitle-tag">{{movie.genre}} | </p>
                <p class="subtitle-tag">{{movie.releaseDate}}</p> </p>
            </h4>
            <div class="description">
<p>{{movie.description}}</p>
            </div>
            <div class="links">
                <router-link :to="{path:'/'+$route.params.id+'/trailer'}" class="play">Play</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Movie',
    computed:{  
        movie(){
            return this.$store.state.movieChocies[this.$route.params.id]
        
    }
}
}
</script>
<style scoped>
.movie{
    background-size: cover;
    background-color: rgba(0,0,0,0.7);
    background-blend-mode: multiply;
      
  padding-bottom: 4rem !important;
      padding-top: 4.5rem !important;
      }
.nav{
    position: absolute;
    top:10px;
    width: 100%;
    box-shadow: 0 0 0;
}
.nav-left >a{
    text-decoration: none;
    color: #FFF;
    padding: 10px;
}
.container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.content{
    padding-left: 50px;
    min-height: 264px;
}
.title{
    color: #fff;
margin: 0;
padding: 0;
}
.subtitle{
    font-size: 15px;
    font-weight: 600;
    color:red;
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
}
.is-active{
    background: #FFF;
    border:0;
    border-radius: 14px;
    color:#000 !important;
    
}
.subtitle-tag{
    display: inline;
}
.description{
    font-size: 15px;
    color:#fff;
    max-width: 450px;
    margin-bottom: 24px;
    letter-spacing: .9px;
}
.links{
margin-top: 40px;
}
.nav-right{
    float: right;
margin-left: auto;
}
.title-flix{
color: red;
font-size: 20px;
font-weight: 600;
text-transform: uppercase;
text-decoration: none;
text-align: center;
}
.play{
    color: #fff;
    border:0;
    border-radius: 15px;
    background-color: #ce2424;
    padding: 12px;
    text-decoration: none;
}
</style>
