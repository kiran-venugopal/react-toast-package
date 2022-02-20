import { Component, useEffect, useRef, useState } from "react";
import "../toast-style.css";

export type PropType = {
  timeOutDuration?: number;
  autoClose?: boolean;
  position?: "top-right" | "bottom-right";
};

export function ToastRoot({
  timeOutDuration = 3000,
  autoClose = true,
  position = "top-right",
}: PropType) {
  const [toastMessages, setToastMessages] = useState<any[]>([]);
  const timeOutRefs = useRef<{ timeoutId: NodeJS.Timeout; id: string }[]>([]);

  useEffect(() => {
    const handler = (e: CustomEventInit<{ component: Component }>) => {
      const component = e.detail?.component;
      const id = Math.random().toString(20);

      setToastMessages((prev) => [
        ...prev,
        {
          id,
          component,
        },
      ]);

      if (autoClose) {
        let timeoutId = setTimeout(() => {
          setToastMessages((prev) => {
            let messages = prev.filter((message) => message.id !== id);
            return messages;
          });
        }, timeOutDuration || 3000);

        timeOutRefs.current.push({ timeoutId, id });
      }
    };

    document.addEventListener("toast-component", handler);
    return () => {
      document.removeEventListener("toast-component", handler);
    };
  }, []);

  const handleClose = (message: any) => () =>
    setToastMessages((prev) => prev.filter((mesg) => mesg.id !== message.id));

  return (
    <div className={`toast-container  ${position}`}>
      {toastMessages.map((message) => (
        <div className="toast-message" key={message.id}>
          <message.component onClose={handleClose(message)} />
        </div>
      ))}
    </div>
  );
}
