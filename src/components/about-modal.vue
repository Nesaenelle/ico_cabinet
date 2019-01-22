<template>
  <div class="modal cabinet-modal" data-modal="about">
    <div class="modal-body">
      <div class="js-close-modal modal__close" @click="closeModal()"></div>
      <div class="cabinet-wallets__item_name">
        <img src="img/coins/BTC.svg" alt class="cabinet-wallets__item_logo">
        Bitcoin
        <br>BTC
        <div class="icon-star" @click="addToFavorite()" :class="{active: favorite}"></div>
      </div>

      <div class="input__section">Balance</div>

      <div class="table col-3">
        <div class="table-body">
          <div class="table-body__row">
            <div class="table-body__col">Total</div>
            <div class="table-body__col">1,100.999999999</div>
            <div class="table-body__col">USD 999,999.99</div>
          </div>
          <div class="table-body__row">
            <div class="table-body__col">In Orders</div>
            <div class="table-body__col">1,100.999999999</div>
            <div class="table-body__col">USD 999,999.99</div>
          </div>
        </div>
      </div>

      <div class="input__section">Transactipons</div>

      <div class="table col-4">
        <div class="table-head">
          <div class="table-head__col">Date/time</div>
          <div class="table-head__col">Amount</div>
          <div class="table-head__col">Fee</div>
          <div class="table-head__col">Total</div>
        </div>
        <div class="table-body">
          <div class="table-body__row">
            <div class="table-body__col">22-01-2019 13:56</div>
            <div class="table-body__col red">-0.999999999</div>
            <div class="table-body__col red">-0.99</div>
            <div class="table-body__col">1,100.000000001</div>
          </div>
          <div class="table-body__row">
            <div class="table-body__col">22-01-2019 13:56</div>
            <div class="table-body__col">1.999999999</div>
            <div class="table-body__col">1.99</div>
            <div class="table-body__col">1,100.000000001</div>
          </div>
        </div>
      </div>
      <div class="modal-buttons">
        <button class="btn" @click="openModal('send')">Send</button>
        <button class="btn" @click="openModal('receive')">Receive</button>
      </div>
    </div>
  </div>
</template>


<script>
import { modalMixin } from "../mixins/modal.mixin";
export default {
  mixins: [modalMixin],
  data() {
    return {
      msg: "Hello world!111"
    };
  },
  mounted() {},

  methods: {
    addToFavorite: function() {}
  }
};
</script>