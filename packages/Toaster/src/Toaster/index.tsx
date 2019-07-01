import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ToastList from "../ToastList";
import { IMessage } from "../types";
interface IToasterProps {
  toastMessage: IMessage;
  containerId?: string;
  autoClose?: boolean;
}

const getContainer = (containerId: string) => {
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("ul");
    container.id = containerId;
    document.body.appendChild(container);
  }
  return container;
};

const Toaster = ({
  toastMessage,
  containerId = "toasterRoot",
  autoClose = true
}: IToasterProps): JSX.Element => {
  const [memory, setMemory] = useState<IMessage[]>([
    { id: "1", message: "esto", messageType: "error" },
    { id: "2", message: "esta", messageType: "error" },
    { id: "3", message: "chevere", messageType: "warning" }
  ]);

  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        closeToast(toastMessage.id);
      }, 300); // TODO: HANDLE WITH CSS ANIMATION
    }

    console.log(memory, "MEMORY");
    const checkMessage = memory.find(
      (message: IMessage) => message.id === toastMessage.id
    );
    console.log(checkMessage, "ACTUALIZA MEMORY");
    if (!checkMessage) {
      setMemory([...memory, toastMessage]);
    }
  }, [toastMessage]);

  // useEffect(() => {
  //   if (!memory.includes(toastMessage)) {
  //     const updatedMemory = [...memory, toastMessage];
  //     setMemory(updatedMemory);
  //   }
  // }, [toastMessage]);
  const closeToast = (id: string): void => {
    const updatedMemory = memory.filter((toast: IMessage) => toast.id !== id);
    setMemory(updatedMemory);
  };

  return createPortal(
    <ToastList closeToast={closeToast} toastList={memory} />,
    getContainer(containerId)
  );
};

Toaster.defaultProps = {};

// Toaster.displayToast = displayToast;

export default Toaster;

// const displayToast = ({ toastMessage }: IToasterProps) => {
//   return createPortal(<Toaster toastMessage={toastMessage} />, container);
// };

{
  /* <Toaster></Toaster>
Toaster.display() */
}
