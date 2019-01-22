    <template>
  <div class="dashboard-block statistic">
    <div class="cabinet-block__title">Statistic Info</div>
    <div class="table col-5">
      <div class="table-filter">
        <div class="table-filter__input">
           <input type="text" class="search-input" maxlength="40">
          <img src="img/search.svg" alt="">
        </div>
       
      </div>
      <div class="table-head filled">
        <div class="table-head__col">Tokens</div>
        <div class="table-head__col">Balance</div>
        <div class="table-head__col">In Orders</div>
        <div class="table-head__col">Price, USD</div>
        <div class="table-head__col">Fee, USD</div>
      </div>
      <div class="table-body filled" ref="scroll">
        <div class="table-empty" v-if="!collection.length">Empty</div>
        <div class="table-body__row" v-if="collection.length" v-for="item in collection">
          <div class="table-body__col">
            <img :src="item.icon">
            {{item.name}}
          </div>
          <div class="table-body__col">{{item.balance}}</div>
          <div class="table-body__col">{{item.inOrders}}</div>
          <div class="table-body__col">{{item.price}}</div>
          <div class="table-body__col">{{item.fee}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
var statisticCollection = [
  {
    icon: "img/coins/BTC.svg",
    name: "Bitcoin",
    balance: "9,999.999999999",
    inOrders: "9,999.999999999",
    price: "999,999.99 USD",
    fee: "999,999.99 USD"
  },
  {
    icon: "img/coins/ETH.svg",
    name: "Litecoin",
    balance: "9,999.999999999",
    inOrders: "9,999.999999999",
    price: "999,999.99 USD",
    fee: "999,999.99 USD"
  },
  {
    icon: "img/coins/BCH.svg",
    name: "Bitcoin Cash",
    balance: "9,999.999999999",
    inOrders: "9,999.999999999",
    price: "999,999.99 USD",
    fee: "999,999.99 USD"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    balance: "9,999.999999999",
    inOrders: "9,999.999999999",
    price: "999,999.99 USD",
    fee: "999,999.99 USD"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    balance: "9,999.999999999",
    inOrders: "9,999.999999999",
    price: "999,999.99 USD",
    fee: "999,999.99 USD"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    balance: "9,999.999999999",
    inOrders: "9,999.999999999",
    price: "999,999.99 USD",
    fee: "999,999.99 USD"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    balance: "9,999.999999999",
    inOrders: "9,999.999999999",
    price: "999,999.99 USD",
    fee: "999,999.99 USD"
  },
  {
    icon: "img/coins/DASH.svg",
    name: "Dash",
    balance: "9,999.999999999",
    inOrders: "9,999.999999999",
    price: "999,999.99 USD",
    fee: "999,999.99 USD"
  }
];

export default {
  name: "app-statistic",
  data: function() {
    return {
      collection: []
    };
  },
  template: "#statistic-info-template",
  mounted: function() {
    var self = this;
    setTimeout(function() {
      self.collection = statisticCollection;
      setTimeout(function() {
        new SimpleBar(self.$refs["scroll"], {
          autoHide: false
        });
      }, 0);
    }, 1000);
  },
  methods: {}
};
</script>
    