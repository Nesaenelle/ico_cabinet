<template>
  <div class="modal" data-modal="sign-up">
    <div class="modal-body">
      <div class="js-close-modal modal__close" @click="closeModal()"></div>
      <div class="modal-logo">
        <img class="modal-logo" src="img/logo.svg">
      </div>
      <div class="modal-line-text">
        <span>Create your account now</span>
      </div>
      <form @submit.prevent="submit()" @input="validate()" @change="validate()">
        <!-- <div class="js-close-modal modal__close"></div> -->
        <div class="modal-label">Email</div>
        <div
          class="modal-input"
          :class="{invalid : dirty.email && errors.email, valid: dirty.email && !errors.email }"
        >
          <input
            type="email"
            name="login"
            placeholder="Provide an active address"
            required
            v-model="form.email"
            @input.once="dirty.email = true"
          >
        </div>
        <div class="modal-label">Password</div>
        <div
          class="modal-input"
          :class="{invalid : dirty.password && errors.password, valid: dirty.password && !errors.password }"
        >
          <input
            type="password"
            name="password"
            placeholder="Minimum 7 characters"
            required
            v-model="form.password"
            @input.once="dirty.password = true"
          >
        </div>
        <div class="modal-label">Confirm Password</div>
        <div
          class="modal-input"
          :class="{invalid : dirty.passwordConfirm && errors.passwordConfirm, valid: dirty.passwordConfirm &&  !errors.passwordConfirm }"
        >
          <input
            type="password"
            name="confirmPassword"
            placeholder="Passwords must match"
            required
            v-model="form.passwordConfirm"
            @input.once="dirty.passwordConfirm = true"
          >
        </div>
        <label
          class="modal-checkbox"
          :class="{invalid : dirty.agree && errors.agree, valid: dirty.agree &&  !errors.agree }"
        >
          <input
            type="checkbox"
            name="agree"
            data-pattern="checkbox"
            reuired
            value="true"
            v-model="form.agree"
            @change.once="dirty.agree = true"
          >
          <div class="modal-checkbox-icon"></div>I agree with service
          <a href="/tos.html">Terms &amp; Conditions</a>
        </label>
        <button class="btn" type="submit">REGISTER</button>
        <div class="modal-bottom-text">
          Already have an account?
          <span class="modal-link" @click="openModal('sign-in')">LOG IN</span>
        </div>
      </form>
    </div>
  </div>
</template>


    <script>
import { modalMixin } from "../mixins/modal.mixin";
let SERVER_NAME = "engine.exchange2.net";

export default {
  mixins: [modalMixin],
  data() {
    return {
      valid: false,
      form: {
        email: "",
        password: "",
        passwordConfirm: "",
        agree: false
      },
      errors: {
        email: false,
        password: false,
        passwordConfirm: false,
        agree: false
      },
      dirty: {
        email: false,
        password: false,
        passwordConfirm: false,
        agree: false
      }
    };
  },
  mounted: function() {},
  methods: {
    submit: function() {
      if (this.valid) {
        this.processRegistration();
      }
    },
    validate: function() {
      this.errors.email = !this.validEmail(this.form.email);
      this.errors.password = !this.validPassword(this.form.password);
      this.errors.passwordConfirm = this.validPasswordConfirm(
        this.form.password,
        this.form.passwordConfirm
      );
      this.errors.agree = !this.form.agree;

      if (
        this.errors.email ||
        this.errors.password ||
        this.errors.passwordConfirm ||
        this.errors.agree
      ) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    },
    validEmail: function(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword: function(password) {
      let re = /^([a-zA-Z0-9_]){7,30}$/;
      return re.test(password);
    },
    validPasswordConfirm: function(password, confirm) {
      return password === confirm ? false : true;
    },
    processRegistration() {
      let vm = this;
      let login = this.form.email;
      let password = this.form.password;

      let formData = [
        { name: "login", value: login },
        { name: "password", value: password }
      ];

      vm.closeModal();
      $.ajax({
        type: "POST",
        url: "http://" + SERVER_NAME + ":8008/reg",
        data: formData,
        success: data => {
          if (data == "-1") {
            alert("Registration error");
          } else {
            //session=data;
            // [session, userId] = data.split(",");
            // alert(data);
          }
          //alert(data);
        },
        error: function(data) {
          console.log("An error occurred.");
          console.log(data);
        }
      });
    }
  }
};
</script>