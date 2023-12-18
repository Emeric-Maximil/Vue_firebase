<template>
  <div id="app">
    <div class="app">
      <nav>
        <router-link to="/"><a href="#"> Home - </a></router-link>
        <router-link to="/articles"><a href="#"> Articles - </a></router-link>
        <router-link to="/add"><a href="#"> Ajouter </a></router-link>

        <router-view />
      </nav>
    </div>
  </div>
</template>
