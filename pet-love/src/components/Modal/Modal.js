import { Dialog, DialogTitle, DialogContent } from "@mui/material"

const Modal = ({handleClose, open, children, title}) => {
    return(
        <Dialog maxWidth="100%" onClose={handleClose} open={open}>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal