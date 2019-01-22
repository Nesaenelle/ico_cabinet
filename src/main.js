

let app = new Vue({
    el: '#app',
    data: {

    },
    methods: {
        openModal: function(name) {
            modalController.openModal(name);
        },
        closeModal: function() {
            modalController.closeModal();
        }
    }
});