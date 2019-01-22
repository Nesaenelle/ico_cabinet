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
      <form @submit.prevent="submit()" @input="validate()">
        <div
          class="input"
          :class="{invalid : dirty.address && errors.address, valid: dirty.address && !errors.address }"
        >
          <div class="input__label">Your wallet address
            <app-info-tooltip>какакакаd</app-info-tooltip>
          </div>
          <input
            type="text"
            required="required"
            name="asset"
            placeholder="Paste address"
            autocomplete="off"
            v-model.number="form.address"
            @input.once="dirty.address = true"
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
          <div
            style="    display: flex; margin-top: 14px;margin-bottom: 20px;
    align-items: flex-end; justify-content: space-between;"
          >
            <div class="input" style="width: 80%">
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
            </div>
            <button
              class="btn btn-green"
              type="button"
              style="margin: 0 0 3px 0; width: 72px;
  height: 30px;"
            >Copy</button>
          </div>
        </div>
        <div v-if="activeTab === 2">
          <div class="input">
            <div class="input__label">Amount your pay
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input type="text" name="recipient" placeholder="0.00 USD" autocomplete="off">
          </div>
          <div class="input">
            <div class="input__label">Approximately yoy will get
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input type="text" name="recipient" placeholder="0.00 BTC" autocomplete="off">
          </div>
          <div class="input">
            <div class="input__label">Payment service</div>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="payment" value="paypal" v-model.number="form.payment">
              <div class="radio__icon"></div>
              <img src="img/icons/Paypal.svg" alt>
            </label>
            
            <label>
              <input type="radio" name="payment" value="visa" v-model.number="form.payment">
              <div class="radio__icon"></div>
              <img src="img/icons/Visa.svg" alt>
              <img src="img/icons/mastercard.svg" alt>
            </label>
          </div>
          <button class="btn" :class="{'btn-green': valid}" type="submit">Continue</button>
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
      activeTab: 1,
      valid: false,
      form: {
        address: "",
        payment: "paypal"
      },
      errors: {
        address: false,
        payment: false
      },
      dirty: {
        address: false,
        payment: false
      }
    };
  },
  mounted: function() {},
  methods: {
    changeTab: function(i) {
      this.activeTab = i;
    },
    submit: function() {
      if (this.valid) {
        this.closeModal();
      }
    },
    validate: function() {
      this.errors.address = !this.form.address;
      this.errors.payment = !this.form.payment;
      // this.errors.amount = !this.form.amount;

      if (this.errors.address || this.errors.payment) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    }
  }
};
</script>
    