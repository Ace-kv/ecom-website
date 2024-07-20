'use client'

import { toast } from 'react-toastify';

const ToastErrorAlert = ({ text, errId }: { text: string, errId: string }) => {
        toast.error(text, {
        position: 'top-right',
        toastId: errId
    })
    return null
}

export default ToastErrorAlert