import { useState } from 'react';
import Modal from '@mui/material/Modal';
import CustomButton from '../../components-shared/CustomButton';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const myColor = {
  color: '#f06292',
  hover: '#f48fb1',
};

const MyModal = ({ open, handleOpen, handleClose }: any) => {
  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <div>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <CustomButton mycolor={myColor} onClick={handleClose}>
            Close Child Modal
          </CustomButton>
        </div>
      </Modal>
    </>
  );
};

export default MyModal;
