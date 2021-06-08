<template>
    <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <router-link class="navbar-brand" to='/'>Sky coffeshop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="bars"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                    <router-link to='/' class="nav-link active" aria-current="active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/' class="nav-link active" aria-current="active">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/' class="nav-link active" aria-current="active">Contact</router-link>
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
        background-color: #0D0D0D;
    }

    .navbar-brand {
        color: #8E24AA;
        font-weight: bold;
        font-size: 2em;
    }

    .navbar-toggler {
        background-color: white;
    }

    .nav-link {
        color: #04FFBB;
        font-weight: 500;
        transition: .2s ease-out;
    }

    .nav-link:hover {
        color: #8E24AA;
        transform: scale(1.2);
    }

    .nav-item {
        margin-right: 0.75rem;
        margin-left: 0.75rem;
    }
</style>