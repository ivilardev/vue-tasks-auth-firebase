<template>
  <div>
    <h1>Registro de usuarios</h1>
    <form
      @submit.prevent="
        crearUsuario({ email: $v.email.$model, password: $v.pass1.$model })
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
            placeholder="Ingrese email"
            v-model="$v.email.$model"
            class="form-control"
          />
        </div>
        <small class="text-danger d-block" v-if="!$v.email.email">
          Email no válido
        </small>
      </div>
      <div class="mb-2">
        <div class="input-group">
          <div class="input-group-prepend mb-2">
            <div class="input-group-text text-danger" v-if="!$v.pass1.required">
              *
            </div>
          </div>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            v-model="$v.pass1.$model"
            class="form-control"
          />
        </div>
        <small class="text-danger d-block " v-if="!$v.pass1.minLength">
          Min. 6 carácteres
        </small>
      </div>

      <div class="mb-2">
        <div class="input-group">
          <div class="input-group-prepend mb-2">
            <div class="input-group-text text-danger" v-if="!$v.pass2.required">
              *
            </div>
          </div>
          <input
            type="password"
            placeholder="Repita contraseña"
            v-model="$v.pass2.$model"
            class="form-control"
          />
        </div>
        <small class="text-danger d-block " v-if="!$v.pass2.sameAs">
          Contraseña no coincide
        </small>
      </div>
      <button type="submit" :disabled="!desactivar" class="btn btn-primary">
        Registrar
      </button>
    </form>
    <p v-if="error === 'auth/email-already-in-use'" class="mt-2">
      Email ya registrado!
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';

export default {
  name: 'Registro',
  data() {
    return {
      email: '',
      pass1: '',
      pass2: '',
    };
  },
  created() {},
  methods: {
    ...mapActions(['crearUsuario']),
  },
  computed: {
    ...mapState(['error']),
    desactivar() {
      return (
        this.pass1 === this.pass2 &&
        this.pass1.trim() !== '' &&
        this.pass1.length > 5
      );
    },
  },
  validations: {
    email: { email, required },
    pass1: { minLength: minLength(6), required },
    pass2: { sameAs: sameAs('pass1'), required },
  },
};
</script>
