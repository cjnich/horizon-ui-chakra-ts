import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const DisplayModal = (
    props: { 
        size?: string;
        displayModal: boolean;
        onModalClose: () => void;
        [x: string]: any 
    },
) => {
    const { size, displayModal, onModalClose, ...rest } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()

    React.useEffect(() => {
        if (displayModal) {
            isOpen ? onClose() : onOpen()
        }
    }, [displayModal])

    const handleModalClose = () : void => {   
        onClose();
        onModalClose();
    }

    return (
        <Modal 
            onClose={handleModalClose} 
            size={size || 'full'} 
            isOpen={isOpen}
            {...rest}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
                {props.children}
            </ModalBody>
          </ModalContent>
        </Modal>
    )
  }

export default DisplayModal;