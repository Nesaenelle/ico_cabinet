    <template id="wallets-template" type="text/x-template">
  <div class="dashboard-block wallets">
    <div class="cabinet-tabs">
      <div
        class="cabinet-tabs__item"
        @click="changeTab(index)"
        :class="{active: index == activeTab}"
        v-for="(tab, index) in tabs"
        :key="index"
      >{{tab}}</div>
    </div>
    <div class="cabinet-tabs-content" :class="{active: activeTab === 0}">
      <div class="scroll-y" ref="favorite">
        <div class="cabinet-wallets">
          <div v-if="!favorite.length" class="table-empty">Empty</div>

          <div class="cabinet-wallets__item" v-for="(item, key) in favorite" :key="key">
            <div class="cabinet-wallets__item_info">
              <div class="cabinet-wallets__item_name" @click="showInfo(item)">
                <img class="cabinet-wallets__item_logo" :src="item.icon" alt>
                {{item.name}}
                <br>
                {{item.abbr}}
              </div>
              <div class="cabinet-wallets__item_money">
                <div>
                  <div class="cabinet-wallets__item_value">{{item.value}}</div>
                  <div class="cabinet-wallets__item_usd">{{item.usd}}</div>
                </div>

                <div
                  class="icon-star"
                  @click="addToFavorite(item)"
                  :class="{active: item.favorite}"
                ></div>
              </div>
            </div>
            <div class="cabinet-wallets__item_buttons" v-if="!item.inactive">
              <button type="button" class="btn" @click="send()">Send</button>
              <button type="button" class="btn" @click="receive()">Receive</button>
            </div>
            <div class="cabinet-wallets__item_buttons" v-if="item.inactive">
              <button type="button" class="btn" @click="add()">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cabinet-tabs-content" :class="{active: activeTab === 1}">
      <div class="scroll-y" ref="all">
        <div class="cabinet-wallets">
          <div class="cabinet-wallets__item" v-for="(item, key) in all" :key="key">
            <div class="cabinet-wallets__item_info">
              <div class="cabinet-wallets__item_name" @click="showInfo(item)">
                <img class="cabinet-wallets__item_logo" :src="item.icon" alt>
                {{item.name}}
                <br>
                {{item.abbr}}
              </div>
              <div class="cabinet-wallets__item_money">
                <div>
                  <div class="cabinet-wallets__item_value">{{item.value}}</div>
                  <div class="cabinet-wallets__item_usd">{{item.usd}}</div>
                </div>

                <div
                  class="icon-star"
                  @click="addToFavorite(item)"
                  :class="{active: item.favorite}"
                ></div>
              </div>
            </div>
            <div class="cabinet-wallets__item_buttons" v-if="!item.inactive">
              <button type="button" class="btn" @click="send()">Send</button>
              <button type="button" class="btn" @click="receive()">Receive</button>
            </div>
            <div class="cabinet-wallets__item_buttons" v-if="item.inactive">
              <button type="button" class="btn" @click="add()">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cabinet-tabs-content" :class="{active: activeTab === 2}" style="margin-top: 4px;">
      <div class="table col-6">
        <div class="table-filter">
          <div class="table-filter__text">View on</div>
          <app-dropdown :items="['Coins', 'USD']"></app-dropdown>
        </div>
        <div class="table-head filled">
          <div class="table-head__col">Tokens</div>
          <div class="table-head__col">Date</div>
          <div class="table-head__col">Status</div>
          <div class="table-head__col">Amount</div>
          <div class="table-head__col">Fee</div>
          <div class="table-head__col">Total Balance</div>
        </div>
        <div class="table-body filled" ref="transactions">
          <div class="table-empty" v-if="!transactions.length">Empty</div>
          <div class="table-body__row" v-for="(item, key) in transactions" :key="key">
            <div class="table-body__col">
              <img :src="item.icon">
              {{item.name}}
            </div>
            <div class="table-body__col">{{item.date}}</div>
            <div class="table-body__col">{{item.status}}</div>
            <div class="table-body__col">{{item.amount}}</div>
            <div class="table-body__col">{{item.fee}}</div>
            <div class="table-body__col">{{item.totalBalance}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var walletsCollection = [
  {
    icon: "img/coins/BTC.svg",
    name: "Bitcoin",
    abbr: "BTC",
    value: "1,100.999999999",
    usd: "USD 999,999.99 ",
    favorite: true
  },
  {
    icon: "img/coins/BCH.svg",
    name: "Bitcoin Cash",
    abbr: "BCH",
    value: "1,100.999999999",
    usd: "USD 999,999.99 ",
    favorite: false
  },
  {
    icon: "img/coins/ADX1.svg",
    name: "AdEx",
    abbr: "ADX",
    value: "1,100.999999999",
    usd: "USD 999,999.99 ",
    favorite: false
  },
  {
    icon: "img/coins/ARDR.svg",
    name: "Ardor",
    abbr: "ARDR",
    value: "1,100.999999999",
    usd: "USD 999,999.99 ",
    favorite: false
  },
  {
    icon: "img/coins/BCN.svg",
    name: "Bytecoin",
    abbr: "BCN",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/BCC.svg",
    name: "BitConnect",
    abbr: "BCC",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/BAT.svg",
    name: "BatCoin",
    abbr: "BAT",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/DGB.svg",
    name: "DigiByte",
    abbr: "DGB",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/ETH.svg",
    name: "Ethereum",
    abbr: "ETH",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/BNT.svg",
    name: "Bancor",
    abbr: "BTN",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/BNT.svg",
    name: "Bancor",
    abbr: "BTN",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/BNT.svg",
    name: "Bancor",
    abbr: "BTN",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/BNT.svg",
    name: "Bancor",
    abbr: "BTN",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  },
  {
    icon: "img/coins/BNT.svg",
    name: "Bancor",
    abbr: "BTN",
    value: "0.00",
    usd: "USD 0.00",
    favorite: false,
    inactive: true
  }
];

var transactionsCollection = [
  {
    icon: "img/coins/BTC.svg",
    name: "Bitcoin",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/ETH.svg",
    name: "Litecoin",
    date: "24-01-2018   13:45",
    status: "receive",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/BCH.svg",
    name: "Bitcoin Cash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    date: "24-01-2018   13:45",
    status: "send",
    amount: "999,999.99",
    fee: "999,999.99",
    totalBalance: "999,999.99"
  }
];

import ModalService from "../shared.service.js";
import Dropdown from "./dropdown.vue";

export default {
  components: {
    "app-dropdown": Dropdown
  },
  data: function() {
    return {
      tabs: ["Favorite wallets", "All wallets", "Transactions"],
      activeTab: 0,
      all: walletsCollection,
      // favorite: [],
      transactions: transactionsCollection
    };
  },
  template: "#wallets-template",
  mounted: function() {
    var self = this;
    setTimeout(function() {
      new SimpleBar(self.$refs["favorite"], {
        autoHide: false
      });
    }, 0);
  },
  computed: {
    favorite() {
      return this.all.filter(item => {
        return item.favorite;
      });
    }
  },
  methods: {
    add: function() {
      ModalService.openModal("receive");
    },
    send: function() {
      ModalService.openModal("send");
    },
    receive: function() {
      ModalService.openModal("receive");
    },
    showInfo: function() {
      ModalService.openModal("about");
    },
    changeTab: function(i) {
      var self = this;
      this.activeTab = i;

      setTimeout(function() {
        if (i === 0) {
          new SimpleBar(self.$refs["favorite"], {
            autoHide: false
          });
        }
        if (i === 1) {
          new SimpleBar(self.$refs["all"], {
            autoHide: false
          });
        }
        if (i === 2) {
          new SimpleBar(self.$refs["transactions"], {
            autoHide: false
          });
        }
      }, 0);
    },
    addToFavorite: function(item) {
      item.favorite = !item.favorite;
    }
  }
};
</script>
