<template>
   <div>
    <header>
    <section class="section-1 d-flex justify-content-center align-items-center">
        <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text- text-xs font-bold mb-2" for="grid-first-name">
                    Nombre
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                    Apellido
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    E-mail
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="doe@gmail.com">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    Mensaje
                </label>
                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                <button class="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Enviar
                </button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
            </form>
        </section>
    </header>
   </div>
</template>


<script>

export default {
    name:'Contacto'
    
}
</script>

<style scoped>
    .section-1 {
        min-height: 100vh;
        min-width: 100%;
        background-image: url('https://s3.amazonaws.com/beatstarsdata/proweb/2.0/user-styles/uploads/published/2876769/main_bg_mobile.jpg?_=1622162090');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
    }


    @media (min-width: 768px) { 
        .section-1 {
            background-image: url('https://s3.amazonaws.com/beatstarsdata/proweb/2.0/user-styles/uploads/published/2876769/main_bg.jpg?_=1622162034');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>