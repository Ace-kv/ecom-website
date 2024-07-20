'use client'

import { toast } from 'react-toastify';

const ToastSuccessAlert = ({ text, succId }: { text: string, succId: string }) => {
        toast.success(text, {
        position: 'top-center',
        toastId: succId
    })
    return null
}

export const toastSuccessAlert = (text: string, succId: string ) => {
    toast.success(text, {
    position: 'top-center',
    toastId: succId
    })
    return null
}

export default ToastSuccessAlert