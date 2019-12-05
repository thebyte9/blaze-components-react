/// <reference types="react" />
interface IActions {
    textButton: string;
    callback: () => void;
    modifiers?: string[];
}
interface IModalFooterProps {
    footerClassNames: string;
    isAlert: boolean;
    actions: IActions[];
    closeModal: () => void;
}
declare const ModalFooter: ({ footerClassNames, closeModal, actions, isAlert }: IModalFooterProps) => JSX.Element;
export default ModalFooter;
