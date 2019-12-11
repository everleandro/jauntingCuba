<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">About this tour</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <!--FORM-->
                <v-form v-model="valid">
                  <!--NAME-->
                  <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    prepend-icon="mdi-account"
                    label="Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                  <!--EMAIL-->
                  <v-text-field
                    v-model="email"
                    prepend-icon="mdi-email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                  <!--AMOUNT PEOPLE AND DATE PICKER-->
                  <v-row>
                    <v-col cols="12" sm="6">
                      <!--AMOUNT PEOPLE-->
                      <v-text-field
                        v-model="amount"
                        type="number"
                        label="Cantidad de personas"
                        required
                        :error-messages="amountErrors"
                        @click:append-outer="amount++"
                        @click:prepend="amount--"
                        @input="$v.amount.$touch()"
                        @blur="$v.amount.$touch()"
                      >
                        <v-icon slot="append" @click="amount++">
                          mdi-plus
                        </v-icon>
                        <v-icon slot="prepend" @click="amount--">
                          mdi-minus
                        </v-icon>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <!--DATE-->
                      <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="date"
                            label="date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="modal = false"
                            >Cancel</v-btn
                          >
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                            >OK</v-btn
                          >
                        </v-date-picker>
                      </v-dialog>
                    </v-col>
                  </v-row>
                  <!--MESSAGE-->
                  <v-textarea
                    v-model="text"
                    label="message"
                    :error-messages="textErrors"
                    required
                    auto-grow
                    @input="$v.text.$touch()"
                    @blur="$v.text.$touch()"
                  ></v-textarea>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('update:dialog', false)"
            >Close</v-btn
          >
          <v-btn
            color="blue darken-1"
            text
            :loading="sending"
            @click="validate"
          >
            send
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar v-model="showSnackbar" top :color="snackbarOptions.color">
        {{ snackbarOptions.message }}
        <v-btn text @click="showSnackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-dialog>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { email, required, between } from 'vuelidate/lib/validators'
export default {
  name: 'DialogForm',
  mixins: [validationMixin],
  validations: {
    text: { required },
    name: { required },
    amount: { required, between: between(1, 500) },
    email: { required, email }
  },
  props: {
    dialog: {
      type: Boolean,
      default() {
        return false
      }
    },
    tour: {
      type: String,
      default() {
        return false
      }
    }
  },
  data: () => ({
    name: '',
    email: '',
    modal: '',
    text: '',
    date: new Date().toISOString().substr(0, 10),
    amount: 1,
    sending: false,
    showSnackbar: false,
    snackbarOptions: {
      message: '',
      color: 'info'
    },
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
    amountErrors() {
      const errors = []
      if (!this.$v.amount.$dirty) return errors
      !this.$v.amount.between &&
        errors.push('Amount people must be a valid number')
      !this.$v.amount.required && errors.push('Amount people is required.')
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
        this.snackbarOptions = await this.$store.dispatch(
          'sendEmail',
          emailData
        )

        this.email = ''
        this.text = ''
        this.name = ''
        this.$v.$reset()
        this.showSnackbar = true
        this.sending = false
        // this.$emit('update:dialog', false)
      } else {
        this.$v.$touch()
      }
    },
    bodyText() {
      return `<p><b>${this.name}</b> se ha interesado por el tour <b>${this.tour}</b></p></br><p>Fecha del tour: <b>${this.date}</b></p></br> <p>email: <b>${this.email}</b></p> </br> <p>Cantidad de personas: <b>${this.amount}</b></p> </br> <h4>Message: </h4><p>${this.text}</p> `
    }
  }
}
</script>

<style scoped></style>
