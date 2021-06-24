<template>
   <div class="about flex flex-col justify-content-center items-center p-24 space-y-5">
        <h1 class="text-5xl font-semibold">About</h1> 
        <img src="https://s3.amazonaws.com/beatstarsdata/proweb/2.0/user-styles/uploads/published/2876769/main_bg_mobile.jpg?_=1622162090" alt="foto-perfil" class="img-circle">
        <h2 class="text-2xl font-semibold">Biography</h2>
        <p class="text-xs">Argentine Beatmaker, Rapper and visual artist.</p>
   </div>
</template>


<script>    
export default {
    name:'about'
}
</script>


<style scoped>
.about {
    height: 100%;
    width: 100%;
}

.img-circle {
    border-radius: 50%;
    width:200px;
    display:block;
}
</style>