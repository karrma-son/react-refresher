import classes from './Modal.module.css'

function Modal({children, onClose, onOpen}) {
    return(
    <>
        <div className={classes.backdrop} onClick={onClose} />
        <dialog open className={classes.modal}>
            {children}
        </dialog>

    </>);
}

export default Modal;