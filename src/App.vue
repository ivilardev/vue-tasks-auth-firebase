<template>
  <div id="app" class="container mt-2">
    <div class="mb-4">
      <router-link to="/" v-if="existeUsuario" class="btn btn-primary mr-2"
        >Inicio</router-link
      >
      <router-link to="/acceso" v-if="!existeUsuario" class="btn btn-info mr-2"
        >Acceso</router-link
      >
      <router-link
        to="/registro"
        v-if="!existeUsuario"
        class="btn btn-secondary"
        >Registro</router-link
      >

      <button
        @click="cerrarSesion"
        v-if="existeUsuario"
        class="btn btn-secondary mr-2 float-right"
      >
        Cerrar Sesión
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['cerrarSesion']),
  },
  computed: {
    ...mapGetters(['existeUsuario']),
  },
};
</script>

<style>
body {
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
