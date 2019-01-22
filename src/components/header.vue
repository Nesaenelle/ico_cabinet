<template>
  <div class="dashboard-header dashboard-block">
    <div class="dashboard-header__left">
      <div class="dashboard-status">
        <div class="dashboard-logo">
          <img src="img/logo.svg" alt>
        </div>
        <div class="dashboard-status__right">
          <button class="btn btn-small btn-green" disabled>OPEN TRADE</button>
          <!-- <button class="btn btn-small btn-red" disabled>TRADE CLOSED</button> -->
          <app-clock></app-clock>
        </div>
      </div>
    </div>
    <div class="dashboard-header__right">
      <div class="dashboard-auth">
        <div class="dashboard-theme">
          <label class="checkbox" data-theme-switcher>
            <input type="checkbox">
            <div class="checkbox__left-img"></div>
            <div class="checkbox__bg">
              <div class="checkbox__inner"></div>
            </div>
            <div class="checkbox__right-img"></div>
          </label>
        </div>
        <div class="dashboard-auth__buttons">
          <div class="dashboard-auth__unauthorized">
            <button class="btn btn-grey btn-small" @click.stop="openModal('sign-in')">LOG IN</button>
            <button class="btn btn-green btn-small" @click.stop="openModal('sign-up')">REGISTER</button>
          </div>
          <div class="dashboard-auth__authorized">
            <span class="dashboard-auth__email">xkjhcdihbce@gmail.com</span>
            <button class="btn btn-grey btn-small" id="logOutButton">LOG OUT</button>
          </div>
        </div>
        <div class="dropdown dropdown-dark-grey dropdown-small" data-dropdown>
          <div class="dropdown-value" data-dropdown-value>Eng</div>
          <div class="dropdown-content" data-dropdown-content>
            <ul>
              <li data-dropdown-item>Eng</li>
              <li data-dropdown-item>Rus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Clock from "./clock.vue";
import { modalMixin } from "../mixins/modal.mixin";

export default {
  mixins: [modalMixin],
  components: {
    "app-clock": Clock
  },
  mounted() {
    var checkbox = $("[data-theme-switcher] input");
    checkbox.on("change", function() {
      if (checkbox[0].checked) {
        $(document.body).removeClass("light-theme");
      } else {
        $(document.body).addClass("light-theme");
      }
    });
  }
};
</script>
