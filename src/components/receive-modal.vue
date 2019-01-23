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
      <form @submit.prevent="submit()" @input="validate()" novalidate>
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
            v-model="form.address"
            @focus.once="dirty.address = true"
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
          <div
            class="input"
            :class="{invalid : dirty.invoiceValue && errors.invoiceValue, valid: dirty.invoiceValue && !errors.invoiceValue }"
          >
            <div class="input__label">Amount Invoice
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input
              type="text"
              required="required"
              v-model="form.invoiceValue"
              name="recipient"
              placeholder="Value"
              @focus.once="dirty.invoiceValue = true"
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
                name="link"
                readonly
                placeholder
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
          <div
            class="input"
            :class="{invalid : dirty.amount && errors.amount, valid: dirty.amount && !errors.amount }"
          >
            <div class="input__label">Amount your pay
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input
              type="text"
              required="required"
              maxlength="15"
              v-model.lazy="form.amount"
              v-money="moneyUSD"
              @focus.once="dirty.amount = true"
            >
          </div>
          <div class="input">
            <div class="input__label">Approximately yoy will get
              <app-info-tooltip>какакакаd</app-info-tooltip>
            </div>
            <input
              type="text"
              readonly
              :value="btc"
              v-money="moneyBTC"
              maxlength="15"
              required="required"
              @focus.once="dirty.btc = true"
            >
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
import { VMoney } from "v-money";
import {
  moneyBTC,
  moneyUSD,
  toMoney,
  recipientValidate,
  amountValidate
} from "../utils";

export default {
  mixins: [modalMixin],
  directives: { money: VMoney },
  data() {
    return {
      moneyBTC: moneyBTC,
      moneyUSD: moneyUSD,
      activeTab: 1,
      valid: false,
      form: {
        address: "",
        payment: "paypal",
        amount: "",
        invoiceValue: ""
      },
      errors: {
        address: false,
        payment: false,
        amount: false,
        invoiceValue: false
      },
      dirty: {
        address: false,
        payment: false,
        amount: false,
        invoiceValue: false
      }
    };
  },
  mounted() {
    this.validate();
  },
  computed: {
    btc() {
      return (toMoney(this.form.amount) * 2).toFixed(2);
    }
  },
  methods: {
    changeTab(i) {
      this.activeTab = i;
    },
    submit() {
      if (this.valid) {
        this.closeModal();
      } else {
        this.dirty = {
          address: true,
          payment: true,
          amount: true
        };

        this.validate();

        setTimeout(() => {
          this.$el.querySelector(".invalid input").focus();
        }, 0);
      }
    },
    validate() {
      this.errors.address = !recipientValidate(this.form.address);
      this.errors.payment = !this.form.payment;
      this.errors.amount =
        !amountValidate(this.form.amount) || toMoney(this.form.amount) < 30;
      this.errors.invoiceValue = !this.form.invoiceValue;

      if (this.errors.address || this.errors.payment || this.errors.amount) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    }
  }
};
</script>
    