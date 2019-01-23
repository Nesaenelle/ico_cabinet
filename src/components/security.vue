<template>
  <div class="dashboard-block security">
    <div class="cabinet-block__title">Security</div>
    <div class="input__label">Authentication</div>
    <form @submit.prevent="submit()" @change="validate()">
      <div>
        <label class="checkbox">
          <input type="checkbox" name="sms" reuired v-model="form.smsAuth">
          <div class="checkbox__icon"></div>

          <div class="checkbox__label">SMS Authentication</div>
        </label>
        <label class="checkbox">
          <input type="checkbox" name="google" reuired v-model="form.googleAuth">
          <div class="checkbox__icon"></div>
          <div class="checkbox__label">Google Authentication</div>
        </label>
      </div>

      <button
        class="btn btn-big"
        type="submit"
        :disabled="!changed"
        :class="{'btn-green': changed}"
      >Change</button>
    </form>

    <div class="input__label">Device Managment</div>
    <div class="table col-4">
      <div class="table-head filled">
        <div class="table-head__col">Device</div>
        <div class="table-head__col">Location</div>
        <div class="table-head__col">Recent activity</div>
        <div class="table-head__col">IP Address</div>
      </div>
      <div class="table-body filled" ref="device">
        <div class="table-empty" v-if="!deviceCollection.length">Empty</div>
        <div
          class="table-body__row"
          v-for="(item, key) in deviceCollection" :key="key"
        >
          <div class="table-body__col">{{item.device}}</div>
          <div class="table-body__col">{{item.location}}</div>
          <div class="table-body__col">{{item.activity}}</div>
          <div class="table-body__col">{{item.ip}}</div>
        </div>
      </div>
    </div>

    <div class="input__label">Location Managment</div>
    <div class="table col-3">
      <div class="table-head filled">
        <div class="table-head__col">Location</div>
        <div class="table-head__col">Recent activity</div>
        <div class="table-head__col">IP Address</div>
      </div>
      <div class="table-body filled" ref="location">
        <div class="table-empty" v-if="!locationCollection.length">Empty</div>
        <div
          class="table-body__row"
          v-for="(item, key) in locationCollection" :key="key"
        >
          <div class="table-body__col">{{item.location}}</div>
          <div class="table-body__col">{{item.activity}}</div>
          <div class="table-body__col">{{item.ip}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-security",
  data: function() {
    return {
      deviceCollection: [],
      locationCollection: [],
      changed: false,
      cached: null,
      form: {
        smsAuth: false,
        googleAuth: false
      }
    };
  },
  template: "#security-template",
  mounted: function() {
    var self = this;
    this.cached = JSON.stringify(this.form);
    setTimeout(function() {
      for (var i = 0; i <= 20; i++) {
        self.deviceCollection.push({
          device: "device",
          location: "location",
          activity: "activity",
          ip: "ip"
        });
        self.locationCollection.push({
          location: "location",
          activity: "activity",
          ip: "ip"
        });
      }

      setTimeout(function() {
        new SimpleBar(self.$refs["device"], {
          autoHide: false
        });
        new SimpleBar(self.$refs["location"], {
          autoHide: false
        });
      }, 0);
    }, 1000);
  },
  methods: {
    submit: function() {
      alert(JSON.stringify(this.form));
      this.changed = false;
      this.cached = JSON.stringify(this.form);
    },

    validate: function() {
      if (this.cached === JSON.stringify(this.form)) {
        this.changed = false;
      } else {
        this.changed = true;
      }
    }
  }
};
</script>
