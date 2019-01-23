
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
      <form @submit.prevent="submit()" @input="validate()" novalidate>
        <div
          class="input"
          :class="{invalid : dirty.asset && errors.asset, valid: dirty.asset && !errors.asset }"
        >
          <div class="input__label">Asset
            <app-info-tooltip>
              какакакаd
              окакоаз
            </app-info-tooltip>
          </div>

          <input
            maxlength="15"
            required="required"
            v-model.lazy="form.asset"
            v-money="moneyBTC"
            @focus.once="dirty.asset = true"
          >
        </div>
        <div
          class="input"
          :class="{invalid : dirty.recipient && errors.recipient, valid: dirty.recipient && !errors.recipient }"
        >
          <div class="input__label">Recipient
            <app-info-tooltip>какакакаd</app-info-tooltip>
          </div>
          <input
            type="text"
            v-model="form.recipient"
            required="required"
            name="recipient"
            placeholder="Paste address"
            autocomplete="off"
            @focus.once="dirty.recipient = true"
            maxlength="30"
          >
        </div>
        <div
          class="input"
          :class="{invalid : dirty.amount && errors.amount, valid: dirty.amount && !errors.amount }"
        >
          <div class="input__label">Amount</div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <input
              required="required"
              type="text"
              maxlength="15"
              v-model.lazy="form.amount"
              v-money="moneyBTC"
              @focus.once="dirty.amount = true"
            >
            
            <span>OR</span>
            <input
              required="required"
              type="text"
              readonly
              :value="usd"
              v-money="moneyUSD"
              @focus.once="dirty.usd = true"
            >
          </div>
        </div>
        <div class="input">
          <div class="input__label">Transaction Fee 0.0005 BTC</div>
        </div>

        <div class="input">
          <div class="input__label">Description</div>
          <textarea name="description" placeholder="Say hello!" maxlength="300"></textarea>
        </div>
        <button class="btn" type="submit" :class="{'btn-green': valid}">SEND</button>
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
  data: function() {
    return {
      moneyBTC: moneyBTC,
      moneyUSD: moneyUSD,
      valid: false,
      form: {
        asset: "",
        recipient: "",
        amount: "",
        usd: "",
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
  mounted() {},
  computed: {
    usd() {
      return (toMoney(this.form.amount) / 3).toFixed(2);
    }
  },
  methods: {
    submit() {
      if (this.valid) {
        this.closeModal();
      } else {
        this.dirty = {
          asset: true,
          recipient: true,
          amount: true
        };

        this.validate();

        setTimeout(() => {
          this.$el.querySelector(".invalid input").focus();
        }, 0);
      }
    },
    validate() {
      this.errors.asset = !amountValidate(this.form.asset);
      this.errors.recipient = !recipientValidate(this.form.recipient);
      this.errors.amount = !amountValidate(this.form.amount);

      if (this.errors.asset || this.errors.recipient || this.errors.amount) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    }
  }
};
</script>
    