import { toast } from 'react-toastify';

const getToast = (type, message) => {
  toast(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    type,
    style: { fontFamily: 'revert', fontSize: 20 },
  });
};

export default getToast;
