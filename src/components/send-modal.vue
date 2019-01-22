
    <template>
  <div class="modal cabinet-modal" data-modal="send">
    <div class="modal-body">
      <div class="js-close-modal modal__close" @click="closeModal()"></div>
      <div class="cabinet-modal__title">
        <span>Send Bitcoins</span>
      </div>

      <div class="cabinet-modal__notitication" :class="{hidden: !notification}">
        <img src="img/info-white.svg" alt>
        You havn't amount BTC-coins
        <img
          src="img/cancel-white.svg"
          alt
          class="cabinet-modal__notitication_close"
          @click="notification= false"
        >
      </div>
      <form @submit.prevent="submit()" @change="validate()">
        <div class="input">
          <div class="input__label">Asset
            <app-info-tooltip>
              какакакаd
              окакоаз
            </app-info-tooltip>
          </div>
          <input
            type="text"
            v-model.number="form.asset"
            required="required"
            name="asset"
            placeholder="0.00 BTC"
            autocomplete="off"
          >
        </div>
        <div class="input">
          <div class="input__label">Recipient
            <app-info-tooltip>какакакаd</app-info-tooltip>
          </div>
          <input
            type="text"
            required="required"
            name="recipient"
            placeholder="Paste address"
            autocomplete="off"
          >
        </div>
        <div class="input">
          <div class="input__label">Amount</div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <input
              type="text"
              required="required"
              name="amount"
              autocomplete="off"
              placeholder="0.00 BTC"
            >
            <span>OR</span>
            <input
              type="text"
              required="required"
              name="amount"
              autocomplete="off"
              placeholder="0.00 USD"
            >
          </div>
        </div>
        <div class="input">
          <div class="input__label">Transaction Fee 0.0005 BTC</div>
        </div>

        <div class="input">
          <div class="input__label">Description</div>
          <textarea name="description" placeholder="Say hello!"></textarea>
        </div>
        <button class="btn" type="submit" :class="{'btn-green': valid}">SEND</button>
      </form>
    </div>
  </div>
</template>


    <script>
export default {
  data: function() {
    return {
      valid: false,
      form: {
        asset: "",
        recipient: "",
        amount: "",
        description: ""
      },
      errors: {
        asset: false,
        recipient: false,
        amount: false
      },
      dirty: {
        asset: false,
        recipient: false,
        amount: false
      },
      notification: true
    };
  },
  template: "#send-modal-template",
  mounted: function() {},
  methods: {
    submit: function() {
      if (this.valid) {
        alert(JSON.stringify(this.form));
        modalController.closeModal();
      }
    },
    validate: function() {}
  }
};
</script>
    