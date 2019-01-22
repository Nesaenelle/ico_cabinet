




// function ModalController() {
//     var self = this;
//     $(window).on('click', function(e){
//         var modal = $('.modal.opened');

//         if(modal && e.target.contains(modal[0])){
//             self.closeModal();
//         }
//     });
// }

// ModalController.prototype.openModal = function(name) {
//     $('[data-modal]').removeClass('opened');
//     $('[data-modal='+name+']').addClass('opened');
//     $('.modal-overlay').addClass('opened');
// }
// ModalController.prototype.closeModal = function() {
//     $('[data-modal]').removeClass('opened');
//     $('.modal-overlay').removeClass('opened');
// }



// var modalController = new ModalController();



// Vue.component('app-clock', {
//     data: function() {
//         return {
//             monthNames: ["January", "February", "March", "April", "May", "June",
//                 "July", "August", "September", "October", "November", "December"
//             ],
//             date: '',
//             time: ''
//         }
//     },
//     template: '#clock-template',
//     mounted: function() {
//         var self = this;

//         this.update();
//         setInterval(function() {
//             self.update();
//         }, 1000);
//     },
//     methods: {
//         update: function() {
//             var date = new Date();
//             this.date = this.monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
//             this.time = date.toTimeString().split(' ')[0];
//         }
//     }
// });


// Vue.component('app-account', {
//     data: function() {
//         return {
//             valid: false,
//             form: {
//                 email: '',
//                 password: '',
//                 passwordConfirm: ''
//             },
//             errors: {
//                 email: false,
//                 password: false,
//                 passwordConfirm: false
//             },
//             dirty: {
//                 email: false,
//                 password: false,
//                 passwordConfirm: false
//             }
//         }
//     },
//     template: '#account-template',
//     mounted: function() {

//     },
//     methods: {
//         submit: function() {
//             if (this.valid) {
//                 alert(JSON.stringify(this.form));
//                 console.log(JSON.stringify(this.form));
//             }
//         },
//         validate: function() {
//             this.errors.email = !this.validEmail(this.form.email);
//             this.errors.password = !this.validPassword(this.form.password);
//             this.errors.passwordConfirm = this.validPasswordConfirm(this.form.password, this.form.passwordConfirm);

//             if (this.errors.email || this.errors.password || this.errors.passwordConfirm) {
//                 this.valid = false;
//             } else {
//                 this.valid = true;
//             }
//         },
//         validEmail: function(email) {
//             var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return re.test(email);
//         },
//         validPassword: function(password) {
//             var re = /^([a-zA-Z0-9_]){8,30}$/;
//             return re.test(password);
//         },
//         validPasswordConfirm: function(password, confirm) {
//             return (password === confirm) ? false : true;
//         }
//     }
// });

// Vue.component('app-security', {
//     data: function() {
//         return {
//             deviceCollection: [],
//             locationCollection: [],
//             changed: false,
//             cached: null,
//             form: {
//                 smsAuth: false,
//                 googleAuth: false
//             }
//         }
//     },
//     template: '#security-template',
//     mounted: function() {
//         var self = this;
//         this.cached = JSON.stringify(this.form);
//         setTimeout(function() {
//             for (var i = 0; i <= 20; i++) {
//                 self.deviceCollection.push({
//                     device: 'device',
//                     location: 'location',
//                     activity: 'activity',
//                     ip: 'ip'
//                 });
//                 self.locationCollection.push({
//                     location: 'location',
//                     activity: 'activity',
//                     ip: 'ip'
//                 });
//             }

//             setTimeout(function() {
//                 new SimpleBar(self.$refs['device'], {
//                     autoHide: false
//                 });
//                 new SimpleBar(self.$refs['location'], {
//                     autoHide: false
//                 });
//             }, 0);
//         }, 1000);
//     },
//     methods: {
//         submit: function() {
//             alert(JSON.stringify(this.form));
//             this.changed = false;
//             this.cached = JSON.stringify(this.form);
//         },

//         validate: function() {
//             if (this.cached === JSON.stringify(this.form)) {
//                 this.changed = false;
//             } else {
//                 this.changed = true;
//             }
//         }
//     }
// });


// Vue.component('app-wallets', {
//     data: function() {
//         return {
//             tabs: ['Favorite wallets', 'All wallets', 'Transactions'],
//             activeTab: 0,
//             all: walletsCollection,
//             // favorite: [],
//             transactions: transactionsCollection
//         }
//     },
//     template: '#wallets-template',
//     mounted: function() {
//         var self = this;
//         setTimeout(function() {

//             new SimpleBar(self.$refs['favorite'], {
//                 autoHide: false
//             });

//         }, 0);
//     },
//     computed: {
//         favorite() {
//             return this.all.filter(item => {
//                 return item.favorite;
//             })
//         }
//     },
//     methods: {
//         add: function() {
        
//         },
//         send: function() {
//             modalController.openModal('send')
//         },
//         receive: function() {
//             modalController.openModal('receive')
//         },
//         showInfo: function() {
//             modalController.openModal('about')
//         },
//         changeTab: function(i) {
//             var self = this;
//             this.activeTab = i;

//             setTimeout(function() {
//                 if (i === 0) {
//                     new SimpleBar(self.$refs['favorite'], {
//                         autoHide: false
//                     });
//                 }
//                 if (i === 1) {
//                     new SimpleBar(self.$refs['all'], {
//                         autoHide: false
//                     });
//                 }
//                 if (i === 2) {
//                     new SimpleBar(self.$refs['transactions'], {
//                         autoHide: false
//                     });
//                 }
//             }, 0);
//         },
//         addToFavorite: function(item) {
//             item.favorite = !item.favorite;
//         }
//     }
// });


// Vue.component('app-statistic', {
//     data: function() {
//         return {
//             collection: []
//         }
//     },
//     template: '#statistic-info-template',
//     mounted: function() {
//         var self = this;
//         setTimeout(function() {
//             self.collection = statisticCollection;
//             setTimeout(function() {
//                 new SimpleBar(self.$refs['scroll'], {
//                     autoHide: false
//                 });
//             }, 0);
//         }, 1000);
//     },
//     methods: {

//     }
// });
// Vue.component('app-info-tooltip', {
//     data: function() {
//         return {

//         }
//     },
//     template: '#info-tooltip-template',
//     mounted: function() {

//         var checkbox = $('[data-theme-switcher] input');
//         checkbox.on('change', function() {
//             if (checkbox[0].checked) {
//                 $(document.body).removeClass('light-theme');
//             } else {
//                 $(document.body).addClass('light-theme');
//             }
//         });

//     },
//     methods: {

//     }
// });



var modalMixin = {
    methods: {
        openModal: function(name) {
            modalController.openModal(name);
        },
        closeModal: function() {
            modalController.closeModal();
        }
    }
  }

// Vue.component('app-send-modal', {
//     mixins: [modalMixin],
//     data: function() {
//         return {
//             valid: false,
//             form: {
//                 asset: '',
//                 recipient: '',
//                 amount: '',
//                 description: ''
//             },
//             errors: {
//                 asset: false,
//                 recipient: false,
//                 amount: false,
//             },
//             dirty: {
//                 asset: false,
//                 recipient: false,
//                 amount: false,
//             },
//             notification: true
//         }
//     },
//     template: '#send-modal-template',
//     mounted: function() {

//     },
//     methods: {
//         submit: function() {
//            if(this.valid) {
//             alert(JSON.stringify(this.form));
//             modalController.closeModal();
//            }
//         },
//         validate: function() {

//         }
//     }
// });


// Vue.component('app-receive-modal', {
//     mixins: [modalMixin],
//     data: function() {
//         return {
//             activeTab: 1
//         }
//     },
//     template: '#receive-modal-template',
//     mounted: function() {

//     },
//     methods: {
//         changeTab: function(i) {
//             this.activeTab = i;
//         },
//         submit: function() {
//             if(this.valid) {
//              alert(JSON.stringify(this.form));
//              modalController.closeModal();
//             }
//          },
//          validate: function() {
 
//          }
//     }
// });


// Vue.component('app-about-modal', {
//     mixins: [modalMixin],
//     data: function() {
//         return {
//             favorite: true
//         }
//     },
//     template: '#about-modal-template',
//     mounted: function() {

//     },
//     methods: {
//         addToFavorite: function() {
            
//         }
//     }
// });




// var app = new Vue({
//     el: '#app',
//     data: {

//     },
//     methods: {
//         openModal: function(name) {
//             modalController.openModal(name);
//         },
//         closeModal: function() {
//             modalController.closeModal();
//         }
//     }
// });