import React from 'react';
import Modal from 'react-modal';
import NewProject from '../../pages/newProject/NewProject' // Your project form component
import NewBlogPost from '../../pages/newBlogPost/NewBlogPost';// Your blog form component
import './formModal.css';
import CloseIcon from '@mui/icons-material/Close';

Modal.setAppElement('#root'); // Set the root element

const FormModal = ({ isOpen, closeModal, formType }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Form Modal"
      className={`custom-modal ${formType === 'project' ? 'project-modal' : 'blog-modal'}`}
    >
      {formType === 'project' ? <NewProject /> : <NewBlogPost />}
      <button onClick={closeModal} className='close-button'>
        <CloseIcon />
      </button>
    </Modal>
  );
};

export default FormModal;
