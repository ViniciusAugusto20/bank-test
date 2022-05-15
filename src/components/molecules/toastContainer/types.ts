import { Message } from '../../atoms/toast/types';

export type ToastContainerProps = {
  messages: Message[];
  removeToast: (key: string) => void;
};
