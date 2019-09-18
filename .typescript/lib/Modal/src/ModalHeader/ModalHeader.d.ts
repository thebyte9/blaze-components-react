/// <reference types="react" />
interface IModalHeaderProps {
    title?: string;
    closeModal: () => void;
}
declare const ModalHeader: ({ title, closeModal }: IModalHeaderProps) => JSX.Element;
export default ModalHeader;
