"use client";
import React, { useEffect, useState } from 'react';

import PrievewModal from '@/components/ui/preview-modal'

const ModalProvider = () => {
    const[isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

  return (
    <>
        <PrievewModal />
    </>
  )
}

export default ModalProvider