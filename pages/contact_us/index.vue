<template>
  <v-content>
    <v-layout fill-height>
      <v-row align="center" justify="center" class="mx-0">
        <v-col class="d-none d-md-block" md="4" lg="4">
          <v-img :src="require('assets/contact/envelope.svg')"></v-img>
        </v-col>
        <v-divider
          inset
          class="mx-8 my-8 d-none d-md-block"
          vertical
        ></v-divider>
        <v-col cols="10" sm="6" md="5" lg="4">
          <v-card-title class="display-1 mb-10 text-center d-block">
            we'd love to hear from you.
          </v-card-title>
          <v-form v-model="valid">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-textarea
              v-model="text"
              label="message"
              :error-messages="textErrors"
              required
              auto-grow
              @input="$v.text.$touch()"
              @blur="$v.text.$touch()"
            ></v-textarea>
            <v-btn
              :loading="sending"
              color="primary"
              :disabled="!valid"
              class="mr-8 px-12 mt-8"
              rounded
              elevation="12"
              large
              @click="validate"
            >
              send
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-layout>
  </v-content>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators'

export default {
  name: 'Index',
  mixins: [validationMixin],

  validations: {
    text: { required },
    name: { required },
    email: { required, email }
  },
  data: () => ({
    text: '',
    name: '',
    email: '',
    sending: false,
    showMessage: false,
    valid: true
  }),
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    textErrors() {
      const errors = []
      if (!this.$v.text.$dirty) return errors
      !this.$v.text.required && errors.push('Message is required.')
      return errors
    }
  },
  methods: {
    async validate() {
      if (this.$v.$dirty && this.valid) {
        this.sending = true
        const emailData = {
          email: this.email,
          message: this.bodyText(),
          name: this.name
        }
        const snackbarOptions = await this.$store.dispatch(
          'sendEmail',
          emailData
        )

        this.email = ''
        this.text = ''
        this.name = ''
        this.$v.$reset()
        this.$flash(snackbarOptions)
        this.sending = false
      } else {
        this.$v.$touch()
      }
    },
    bodyText() {
      return `<p><b>${this.name}</b> se ha comunicado a travez de "CONTACT US"</p> <p>email: <b>${this.email}</b></p><p><b>Mensaje:</b></p><p> ${this.text}</p>`
    }
  }
}
</script>
