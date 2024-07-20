'use client'

import { toast } from 'react-toastify';

export const emptyCartAlert = (text: string) => {
    toast.error(text, {
        position: 'top-right',
        toastId: 'empty-cart-err'
    });
};

