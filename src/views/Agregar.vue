<template>
  <div>
    <h1>Agregar</h1>
    <form
      @submit.prevent="agregarTarea($v.nombre.$model)"
      class="form-inline mt-4"
    >
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre</div>
        </div>
        <input
          type="text"
          v-model="$v.nombre.$model"
          class="form-control"
          placeholder="Ingrese Tarea"
        />
      </div>
      <button
        type="submit"
        class="btn btn-success mb-2"
        :disabled="$v.$invalid || carga"
      >
        Agregar
      </button>
    </form>
    <small class="text-danger d-block" v-if="!$v.nombre.required">
      Campo requerido
    </small>
    <small class="text-danger d-block" v-if="!$v.nombre.minLength">
      Min. 5 carácteres
    </small>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'Agregar',
  data() {
    return {
      nombre: '',
    };
  },
  methods: {
    ...mapActions(['agregarTarea']),
  },
  validations: {
    nombre: {
      required,
      minLength: minLength(5),
    },
  },
  computed: {
    ...mapState(['carga']),
  },
};
</script>
