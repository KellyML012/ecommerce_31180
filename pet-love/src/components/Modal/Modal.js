import { Dialog, DialogContent, DialogTitle } from "@mui/material"

const Modal = ({handleClose, open, children}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                {children}
            </DialogContent>            
        </Dialog>
    )
}

export default Modal