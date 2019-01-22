import ModalService from '../shared.service.js';

export const modalMixin = {
    methods: {
        openModal: (name)=> {
            ModalService.openModal(name);
        },
        closeModal: ()=> {
            ModalService.closeModal();
        }
    }
}