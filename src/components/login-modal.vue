<template>
  <div class="modal" data-modal="sign-in">
    <div class="modal-body">
      <div class="modal-logo">
        <img class="modal-logo" src="img/logo.svg">
      </div>
      <div class="modal__close" @click="closeModal()"></div>
      <div class="modal-line-text">
        <span>LOG IN</span>
      </div>
      <form>
        <div class="modal-text">
          Please check that you are visiting
          <a href>https://exchange2.net</a>
        </div>
        <div class="modal-input-link">
          <div class="modal-input-link-icon">
            <img src="img/padlock.svg" alt>
          </div>
          <span>
            <b>https:</b>//www.exchange2.net
          </span>
        </div>
      </form>
      <div class="modal-line-text"></div>

      <form @submit.prevent="submit()" @input="validate()">
        <div class="modal-label">Email</div>
        <div
          class="modal-input"
          :class="{invalid : dirty.login && errors.login, valid: dirty.login && !errors.login }"
        >
          <input
            type="text"
            name="login"
            placeholder="login"
            required
            v-model="form.login"
            @input.once="dirty.login = true"
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
            placeholder="Password"
            required
            v-model="form.password"
            @input.once="dirty.password = true"
          >
        </div>
        <div class="modal-link">forgot password?</div>
        <button class="btn" type="submit">LOG IN</button>
        <div class="modal-bottom-text">
          Not on Exchange#2 yet?
          <span
            class="modal-link js-popup"
            @click="openModal('sign-up')"
          >register</span>
        </div>
      </form>
    </div>
  </div>
</template>

    <script>
import { modalMixin } from "../mixins/modal.mixin";
import { SHA256 } from "../sha";

var SERVER_NAME = "engine.exchange2.net";
export default {
  mixins: [modalMixin],
  data() {
    return {
      valid: false,
      form: {
        login: "",
        password: ""
      },
      errors: {
        login: "",
        password: ""
      },
      dirty: {
        login: "",
        password: ""
      }
    };
  },
  mounted: function() {},
  methods: {
    submit() {
      if (this.valid) {
        this.processLogin();
      }
    },
    validate() {
      this.errors.login = !this.form.login;
      this.errors.password = !this.form.password;

      if (this.errors.login || this.errors.password) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    },
    processLogin() {
      let vm = this;
      let login = this.form.login;
      let password = this.form.password;
      let formData = [{ name: "auth", value: SHA256(login + " " + password) }];

      vm.closeModal();
      $.ajax({
        type: "POST",
        url: "http://" + SERVER_NAME + ":8008/auth",
        data: formData,
        success: function(data) {
          if (data == "-1") {
            alert("Login error");
          } else {
            let results = data.split(",");
            let session = results[0],
              userId = results[1],
              BTCWallet = results[2];

            document.getElementsByClassName(
              "dashboard-auth__email"
            )[0].innerHTML = login + "(" + userId + ")";
            $(".dashboard-auth").addClass("authorized");

            $(".dashboard-orders-table").show();
            $(".logInButton").hide();
          }
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