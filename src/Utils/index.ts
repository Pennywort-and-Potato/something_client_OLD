import { message } from 'antd'
const [ messageApi, contextHolder ] = message.useMessage();

export const success = (message: string) => {
  messageApi.open({
    type: 'success',
    content: message,
  });
};

export const error = (message: string) => {
  messageApi.open({
    type: 'error',
    content: message,
  });
};

export const warning = (message: string) => {
  messageApi.open({
    type: 'warning',
    content: message,
  });
};