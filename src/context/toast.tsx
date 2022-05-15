import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer } from '../components';

import { Message } from '../components/atoms/toast/types';

type ToastContextType = {
  addToast: (message: Omit<Message, 'key'>) => void;
  removeToast: (key: string) => void;
};

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const addToast = useCallback((message: Omit<Message, 'key'>) => {
    const newMessage = {
      key: uuidv4(),
      ...message,
    };

    setMessages((currentMessages) => {
      return [...currentMessages, newMessage];
    });
  }, []);

  const removeToast = useCallback((key: string) => {
    setMessages((currentMessages) =>
      currentMessages.filter((message) => message.key !== key),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => useContext(ToastContext);
