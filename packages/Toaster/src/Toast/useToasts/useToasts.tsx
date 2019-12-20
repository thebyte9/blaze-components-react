import { useContext } from "react";
import ToastContext from "../ToastContext/ToastContext";

const useToasts = () => {
  const ctx: any = useContext(ToastContext);

  if (!ctx) {
    throw Error(
      "The `useToasts` hook must be called from a descendent of the `ToastProvider`."
    );
  }

  return {
    addToast: ctx.add,
    removeAllToasts: ctx.removeAll,
    removeToast: ctx.remove,
    toastStack: ctx.toasts,
    updateToast: ctx.update
  };
};

export default useToasts;
