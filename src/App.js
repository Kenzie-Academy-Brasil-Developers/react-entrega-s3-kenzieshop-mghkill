import "./App.css";
import ProductList from "./components/ProductList";
import CartItems from "./components/CartItems";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-conteiner">
          <Button onClick={handleOpen}>Open modal</Button>
          <ProductList />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modal">
              <Typography className="modal-left" id="modal-modal-title">
                <CartItems />
              </Typography>
              <Typography className="modal-right" id="modal-modal-description">
                teste
              </Typography>
            </Box>
          </Modal>
        </div>
      </header>
    </div>
  );
}

export default App;
