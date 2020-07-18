<template>
  <div>
    <h1>Acceso de usuarios</h1>
    <form
      @submit.prevent="
        ingresoUsuario({ email: $v.email.$model, password: $v.pass.$model })
      "
    >
      <div class="mb-2">
        <div class="input-group mb-2">
          <div class="input-group-prepend mb-2">
            <div class="input-group-text text-danger" v-if="!$v.email.required">
              *
            </div>
          </div>
          <input
            type="email"
            placeholder="Ingrese Email"
            v-model="$v.email.$model"
            class="form-control"
          />
        </div>
        <small class="text-danger d-block" v-if="!$v.email.email">
          Email no válido
        </small>
      </div>
      <div class="mb-2">
        <div class="input-group mb-2">
          <div class="input-group-prepend mb-2">
            <div class="input-group-text text-danger" v-if="!$v.pass.required">
              *
            </div>
          </div>
          <input
            type="password"
            placeholder="Ingrese Contraseña"
            v-model="$v.pass.$model"
            class="form-control"
          />
        </div>
        <small class="text-danger d-block " v-if="!$v.pass.minLength">
          Min. 6 carácteres
        </small>
      </div>
      <button
        type="submit"
        class="btn btn-primary mt-2"
        :disabled="$v.$invalid"
      >
        Acceder
      </button>
    </form>
    <p class="mt-2" v-if="error === 'auth/user-not-found'">
      Usuario incorrecto
    </p>
    <p class="mt-2" v-if="error === 'auth/wrong-password'">
      Contraseña incorrecta
    </p>
    <!-- <p class="mt-2" v-if="error">Usuario o constraseña incorracta</p> -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'Acceso',
  data() {
    return {
      email: '',
      pass: '',
    };
  },
  methods: {
    ...mapActions(['ingresoUsuario']),
  },
  computed: {
    ...mapState(['error']),
  },
  validations: {
    email: { required, email },
    pass: { required, minLength: minLength(6) },
  },
};
</script>
