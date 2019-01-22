    <template>
  <div class="modal cabinet-modal" data-modal="receive">
    <div class="modal-body">
      <div class="js-close-modal modal__close" @click="closeModal()"></div>
      <div class="cabinet-modal__title">
        <span>Receive Bitcoins</span>
      </div>
      <div class="cabinet-modal__tabs">
        <div
          class="cabinet-modal__tabs_item"
          @click="changeTab(1)"
          :class="{active: activeTab === 1}"
        >Cryptocurrency</div>
        <div
          class="cabinet-modal__tabs_item"
          @click="changeTab(2)"
          :class="{active: activeTab === 2}"
        >Card</div>
      </div>
      <form @submit.prevent="submit()" @change="validate()">
        <div class="input">
          <div class="input__label">Your wallet address
            <app-info-tooltip>какакакаd</app-info-tooltip>
          </div>
          <input
            type="text"
            required="required"
            name="asset"
            placeholder="Paste address"
            autocomplete="off"
          >
        </div>

        <div class="input__attention">
          <img src="img/info.svg" alt>
          Не отправляйте ETH со смарт-контрактов! Не отправляйте ERC20-токены!
          Проверьте, не использует ли ваш кошелёк или биржа смарт-контракты для
          отправки ETH. Мы не принимаем такие переводы и не можем возместить их.
          Вы потеряете эти деньги.
        </div>
        <div v-if="activeTab === 1">
          <div class="input__section">Invoice</div>
          <div class="input">
            <div class="input__label">Amount Invoice
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input
              type="text"
              required="required"
              name="recipient"
              placeholder="Value"
              autocomplete="off"
            >
          </div>
          <div class="input">
            <div class="input__label">Link to an Invoice
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input
              type="text"
              value="http://exchange2.net/dfgyhhnm,l;lkjhgc"
              required="required"
              name="recipient"
              placeholder
              autocomplete="off"
            >
            <button class="btn btn-green">Copy</button>
          </div>
        </div>
        <div v-if="activeTab === 2">
          <div class="input">
            <div class="input__label">Amount your pay
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input
              type="text"
              required="required"
              name="recipient"
              placeholder="0.00 USD"
              autocomplete="off"
            >
          </div>
          <div class="input">
            <div class="input__label">Approximately yoy will get
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input
              type="text"
              required="required"
              name="recipient"
              placeholder="0.00 BTC"
              autocomplete="off"
            >
          </div>
          <div class="input">
            <div class="input__label">Payment service</div>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="payment" value="paypal">
              <div class="radio__icon"></div>
              <img src="img/icons/Paypal.svg" alt>
            </label>
            
            <label>
              <input type="radio" name="payment" value="visa">
              <div class="radio__icon"></div>
              <img src="img/icons/Visa.svg" alt>
            </label>
          </div>
          <button class="btn">Continue</button>
        </div>
      </form>
    </div>
  </div>
</template>

    <script>
import { modalMixin } from "../mixins/modal.mixin";
export default {
  mixins: [modalMixin],
  data() {
    return {
      activeTab: 1
    };
  },
  mounted: function() {},
  methods: {
    changeTab: function(i) {
      this.activeTab = i;
    },
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
    