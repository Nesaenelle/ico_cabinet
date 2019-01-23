<template>
  <div class="dashboard-block account">
    <div class="cabinet-block__title">Account</div>

    <form @submit.prevent="submit()" @input="validate()" novalidate>
      <div
        class="input"
        :class="{invalid : dirty.email && errors.email, valid: dirty.email && !errors.email }"
      >
        <div class="input__label">Login email</div>

        <input
          type="email"
          required
          v-model="form.email"
          name="email"
          placeholder="your@email.com"
          @focus.once="dirty.email = true"
        >
      </div>

      <div
        class="input"
        :class="{invalid : dirty.password && errors.password, valid: dirty.password && !errors.password }"
      >
        <div class="input__label">Password</div>

        <app-info-tooltip>какакакаd окакоаз шкашкёqw ertyuiopokjhgfdsd fghjkjhgfdsfghjkoijuhygt fdfghjkloiuytgf</app-info-tooltip>

        <input
          type="password"
          maxlength="30"
          name="password"
          required
          v-model="form.password"
          placeholder="***********"
          @focus.once="dirty.password = true"
        >
      </div>

      <div
        class="input"
        :class="{hidden: !showConfirm, invalid : dirty.passwordConfirm && errors.passwordConfirm, valid: dirty.passwordConfirm &&  !errors.passwordConfirm }"
      >
        <div class="input__label">Password Again</div>

        <app-info-tooltip>Title</app-info-tooltip>

        <input
          type="password"
          maxlength="30"
          required
          name="passwordConfirm"
          v-model="form.passwordConfirm"
          placeholder="***********"
          @focus.once="dirty.passwordConfirm = true"
        >
      </div>

      <div class="account-buttons">
        <button class="btn btn-big" type="button" @click="showConfirm = true" v-if="!showConfirm">Change</button>
        <button class="btn btn-big" type="submit" :class="{'btn-green': valid}" v-if="showConfirm">Change</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "app-account",
  data() {
    return {
      showConfirm: false,
      valid: false,
      form: {
        email: "",
        password: "",
        passwordConfirm: ""
      },
      errors: {
        email: false,
        password: false,
        passwordConfirm: false
      },
      dirty: {
        email: false,
        password: false,
        passwordConfirm: false
      }
    };
  },
  mounted() {},
  methods: {
    submit() {
      if (this.valid) {
             alert(JSON.stringify(this.form));
      } else {
        this.dirty = {
          email: true,
          password: true,
          passwordConfirm: true
        };

        this.validate();

        setTimeout(() => {
          this.$el.querySelector(".invalid input").focus();
        }, 0);
      }
    },
    validate: function() {
      this.errors.email = !this.validEmail(this.form.email);
      this.errors.password = !this.validPassword(this.form.password);
      this.errors.passwordConfirm = this.validPasswordConfirm(
        this.form.password,
        this.form.passwordConfirm
      );

      if (
        this.errors.email ||
        this.errors.password ||
        this.errors.passwordConfirm
      ) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword: function(password) {
      var re = /^([a-zA-Z0-9_]){8,30}$/;
      return re.test(password);
    },
    validPasswordConfirm: function(password, confirm) {
      return password === confirm ? false : true;
    }
  }
};
</script>
