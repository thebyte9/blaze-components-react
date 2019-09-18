/// <reference types="react" />
interface IModalHeaderProps {
    headerClassNames: string;
    title?: string;
    closeModal: () => void;
}
declare const ModalHeader: ({ headerClassNames, title, closeModal }: IModalHeaderProps) => JSX.Element;
export default ModalHeader;
