<template>
  <div>
    <h1>Ruta protegida</h1>
    <router-link to="/agregar">
      <button class="btn btn-success mb-4 btn-block">Agregar</button>
    </router-link>

    <form @submit.prevent="buscador(texto)">
      <input
        type="text"
        placeholder="Buscar..."
        class="form-control my-4"
        v-model="texto"
        v-on:keyup="buscador(texto)"
      />
    </form>

    <div v-if="carga" class="text-center mt-5">
      <h4>Cargando contenido...</h4>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>

    <ul class="list-group ">
      <li
        class="list-group-item list-group-item-action"
        v-for="(item, index) in arrayFiltrado"
        :key="index"
      >
        {{ item.nombre }}
        <button
          class="btn btn-danger float-right btn-sm"
          @click="eliminarTarea(item.id)"
        >
          Eliminar
        </button>
        <router-link
          :to="{ name: 'Editar', params: { id: item.id } }"
          class="float-right mr-2"
        >
          <button class="btn btn-warning btn-sm">Editar</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'Inicio',
  data() {
    return {
      texto: '',
    };
  },
  computed: {
    ...mapState(['usuario', 'tareas', 'carga']),
    ...mapGetters(['arrayFiltrado']),
  },
  methods: {
    ...mapActions(['getTareas', 'eliminarTarea', 'buscador']),
  },
  created() {
    this.getTareas();
  },
  components: {
    PulseLoader,
  },
};
</script>
