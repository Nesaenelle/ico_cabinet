class ModalService {
    constructor() {
        $(window).on('click', (e) => {
            var modal = $('.modal.opened');

            if (modal && e.target.contains(modal[0])) {
                this.closeModal();
            }
        });
    }

    openModal(name) {
        $('[data-modal]').removeClass('opened');
        $('[data-modal=' + name + ']').addClass('opened');
        $('.modal-overlay').addClass('opened');
    }
    closeModal() {
        $('[data-modal]').removeClass('opened');
        $('.modal-overlay').removeClass('opened');
    }
}

export default new ModalService();