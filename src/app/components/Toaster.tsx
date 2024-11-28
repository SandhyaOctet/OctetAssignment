import { notification } from 'antd';

export const showToast = (type: 'success' | 'info' | 'warning' | 'error', message: string, description?: string) => {
  notification[type]({
    message,
    description,
  });
};
