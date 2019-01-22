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

    <app-login-modal></app-login-modal>
    <app-registration-modal></app-registration-modal>

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

import LoginModal from "./components/login-modal.vue";
import RegistrationModal from "./components/registration-modal.vue";

Vue.component("app-info-tooltip", Tooltip);
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
    "app-about-modal": AboutModal,

    "app-login-modal": LoginModal,
    "app-registration-modal": RegistrationModal
  }
};
</script>
