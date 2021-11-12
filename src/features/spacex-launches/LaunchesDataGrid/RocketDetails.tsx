import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function RocketDetails(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} data-testid="view-rocket-details-btn">View Rocket Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span data-testid="rocket-title">{props.rocket_name}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <label><b>Rocket ID: </b></label>{props.rocket_id}<br />
            <label><b>Rocket Type: </b></label> {props.rocket_type}<br />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
