import React, {ReactElement} from 'react';
import './modal.scss';
interface IModalProps {
	children: ReactElement;
	modalVisible: (modal: boolean) => void;
}

const Modal = ({children, modalVisible}: IModalProps) => {
	return (
		<div onClick={() => modalVisible(false)} className='modal'>
			<div onClick={(e) => e.stopPropagation()} className='modal__container'>
				{children}
			</div>
		</div>
	);
};

export default Modal;
