<template>
  <div>
    <app-header></app-header>

    <main>
      <div class="cabinet-container">
        <div class="cabinet-container__left">
          <app-account></app-account>
          <app-security></app-security>
        </div>
        <div class="cabinet-container__right">
          <app-wallets></app-wallets>
          <app-statistic></app-statistic>
        </div>
      </div>
    </main>
    <div class="modal-overlay" id="modal-overlay"></div>
    <!-- <div class="modal" data-modal="sign-in">
      <div class="modal-body">
        <div class="modal-logo">
          <img class="modal-logo" src="img/logo.svg">
        </div>
        <div class="js-close-modal modal__close" @click="closeModal()"></div>
        <div class="modal-line-text">
          <span>LOG IN</span>
        </div>
        <form novalidate>
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

        <form method="POST" id="sign-in-form" action=":8008/auth">
          <div class="modal-label">Email</div>
          <div class="modal-input">
            <input type="text" name="login" placeholder="login" required>
          </div>
          <div class="modal-label">Password</div>
          <div class="modal-input">
            <input type="password" name="password" placeholder="Password" required>
          </div>
          <div class="modal-link">forgot password?</div>
          <button class="btn" type="submit">LOG IN</button>
          <div class="modal-bottom-text">
            Not on Exchange#2 yet?
            <span
              class="modal-link js-popup"
              data-modal-open="sign-up"
            >register</span>
          </div>
        </form>
      </div>
    </div>
    <div class="modal" data-modal="sign-up">
      <div class="modal-body">
        <div class="js-close-modal modal__close" @click="closeModal()"></div>
        <div class="modal-logo">
          <img class="modal-logo" src="img/logo.svg">
        </div>
        <div class="modal-line-text">
          <span>Create your account now</span>
        </div>
        <form id="registration-form" method="POST">
          <div class="js-close-modal modal__close"></div>
          <div class="modal-label">Email</div>
          <div class="modal-input">
            <input
              type="text"
              name="login"
              placeholder="Provide an active address"
              required
              data-pattern="email"
            >
          </div>
          <div class="modal-label">Password</div>
          <div class="modal-input">
            <input
              type="password"
              name="password"
              placeholder="Minimum 7 characters"
              required
              data-pattern="password"
            >
          </div>
          <div class="modal-label">Confirm Password</div>
          <div class="modal-input">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Passwords must match"
              required
              data-pass-confirm="true"
            >
          </div>
          <label class="modal-checkbox">
            <input type="checkbox" name="agree" data-pattern="checkbox" reuired>
            <div class="modal-checkbox-icon"></div>I agree with service
            <a href="/tos.html">Terms &amp; Conditions</a>
          </label>
          <button class="btn" id="signUpButton">REGISTER</button>
          <div class="modal-bottom-text">
            Already have an account?
            <span
              class="modal-link js-popup"
              data-modal-open="sign-in"
            >LOG IN</span>
          </div>
        </form>
      </div>
    </div> -->

    <app-send-modal></app-send-modal>
    <app-receive-modal></app-receive-modal>
    <app-about-modal></app-about-modal>
  </div>
</template>


<script>
import Vue from "vue";

import Header from "./components/header.vue";

import Account from "./components/account.vue";
import Security from "./components/security.vue";
import Statistic from "./components/statistic-info.vue";
import Tooltip from "./components/tooltip.vue";
import Wallets from "./components/wallets.vue";
import SendModal from "./components/send-modal.vue";
import ReceiveModal from "./components/receive-modal.vue";
import AboutModal from "./components/about-modal.vue";

Vue.component('app-info-tooltip', Tooltip);
export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-account": Account,
    "app-security": Security,
    "app-statistic": Statistic,
    "app-wallets": Wallets,
    "app-send-modal": SendModal,
    "app-receive-modal": ReceiveModal,
    "app-about-modal": AboutModal
  }
};
</script>
