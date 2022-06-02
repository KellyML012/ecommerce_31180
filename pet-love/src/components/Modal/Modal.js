import { Dialog, DialogContent } from "@mui/material"

const Modal = ({handleClose, open, children}) => {
    return(
        <Dialog maxWidth="100%" onClose={handleClose} open={open}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal