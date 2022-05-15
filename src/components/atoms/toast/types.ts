export type MessageType = 'success' | 'warning' | 'error' | 'default';

export type Message = {
  type?: MessageType;
  key: string;
  content: string;
};

export type ToastProps = {
  message: Message;
  removeToast: (key: string) => void;
};

export type ToastContainerProps = {
  fadeOut?: boolean;
  type: MessageType;
};
