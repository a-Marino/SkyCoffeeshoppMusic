<template>
    <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <router-link class="navbar-brand" to='/'>Sky coffeshop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="bars" class="text-black"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                    <router-link to='/' class="nav-link active" aria-current="active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'about'}" class="nav-link active" aria-current="active">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'contacto'}" class="nav-link active" aria-current="active">Contact</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style scoped>
    .navbar {
        background-color: var(--negro-fondo);
        position: fixed;
        width: 100vw;
        height: 60px;
    }

    .navbar-collapse {
        background-color: var(--negro-fondo);
        border-radius: 5px;
    }

    .navbar-brand {
        color: var(--violeta);
        font-weight: bold;
        font-size: 1.5em;
    }

    .navbar-toggler {
        background-color: white;
    }

    .nav-link {
        color: var(--verde-agua);
        font-weight: 500;
        transition: .2s ease-out;
        font-size: 0.75em;
    }

    .nav-link:hover {
        color: var(--violeta);
    }

    .nav-item {
        margin-right: 0.75rem;
        margin-left: 0.75rem;
    }

    @media (min-width: 1024px) { 
        .nav-link:hover {
            transform: scale(1.2);
        }
     }
</style>