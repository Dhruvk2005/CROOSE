'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { getQr } from '@/app/Apis/publicapi';

interface ScanqrpageProps {
  setScanopen: (val: boolean) => void;
  space_id: string;
}

const Scanqrpage = ({ setScanopen, space_id }: ScanqrpageProps) => {
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLinked, setIsLinked] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

const fetchQrImage = async () => {
  if (!space_id) {
    setErrorMsg("Missing space ID.");
    return;
  }

  setLoading(true);

  try {
    const response = await getQr(space_id);

    // Detect if response is JSON (already linked) instead of Blob (QR image)
    const contentType = response?.headers?.['content-type'];

    if (contentType && contentType.includes('application/json')) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string);

          if (json.linked === true || json._whatsapp_linking_status_ === 1) {
            setIsLinked(true);
            setErrorMsg(null);
            setQrImage(null);
          } else {
            setErrorMsg("Unexpected response.");
          }
        } catch (parseError) {
          setErrorMsg("Failed to parse QR code response.");
        }
      };
      reader.readAsText(response.data);
      return;
    }

    // Otherwise assume it's a QR blob
    const imageUrl = URL.createObjectURL(response.data);

    if (qrImage) URL.revokeObjectURL(qrImage);
    setQrImage(imageUrl);
    setErrorMsg(null);
    setIsLinked(false);
  } catch (err: any) {
    console.error("Failed to fetch QR", err);
    setErrorMsg(err?.response?.data?.message || "Failed to fetch QR code.");
  } finally {
    setLoading(false);
  }
};

  const onRetry = () => {
    fetchQrImage();
  };

useEffect(() => {
  if (!space_id) return;
  fetchQrImage();
}, [space_id]);
useEffect(() => {
  if (isLinked) return;

  const interval = setInterval(() => {
    fetchQrImage();
  }, 20000);

  return () => {
    clearInterval(interval);
    if (qrImage) URL.revokeObjectURL(qrImage);
  };
}, [isLinked]);


  return (
    <div className='fixed inset-0 z-[70] flex justify-center items-center backdrop-blur-md bg-black/30 px-4'>
      <div
        ref={modalRef}
        className='w-full max-w-3xl bg-white rounded-2xl shadow-lg animate-slideUpFade transition-all duration-300'
      >
        {/* Header */}
        <div className='flex justify-end px-6 py-4 border-b border-gray-100'>
          <Icon
            onClick={() => setScanopen(false)}
            icon='charm:cross'
            width='26'
            height='26'
            className='cursor-pointer text-gray-600 hover:text-black transition'
          />
        </div>
        <div className='flex flex-col items-center gap-8 px-8 pb-8'>
          <div className='flex flex-col items-center gap-2'>
            <img src='/123.png' alt='Logo' className='w-24' />
            <h2 className='text-xl font-bold text-gray-900'>
              {isLinked ? 'Account Already Linked' : 'Scan QR Code'}
            </h2>
            <p className='text-sm text-gray-500 text-center max-w-sm'>
              {isLinked
                ? 'Your WhatsApp account is already linked successfully.'
                : 'Scan this code with WhatsApp on your phone to link your account to the Agent.'}
            </p>
          </div>

          <div className='bg-white border border-gray-200 rounded-xl p-6 w-[260px] h-[260px] flex items-center justify-center'>
            {loading ? (
              <div className='w-40 h-40 flex items-center justify-center text-gray-500 animate-pulse'>
                Loading...
              </div>
            ) : errorMsg ? (
              <div className='flex flex-col items-center text-center text-red-500'>
                <p className='mb-2'>{errorMsg}</p>
                <button
                  onClick={onRetry}
                  className='mt-2 text-sm text-blue-600 hover:underline'
                >
                  Retry
                </button>
              </div>
            ) : isLinked ? (
            <div className='text-green-600 font-semibold text-center px-4 leading-relaxed'>
              🤖 <span className="text-xl">Croose Assistant Linked!</span><br />
              Your WhatsApp is now connected. <br />
              ⏳ Hang tight — your AI assistant will be up and running in just a moment.
            </div>

            ) : (
              <img
                src={qrImage!}
                alt='QR Code'
                className='w-48 h-48 rounded-md shadow-sm'
              />
            )}
          </div>

          {/* WhatsApp Instructions */}
          {!isLinked && (
            <div className='w-full max-w-md p-4 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 leading-relaxed'>
              <p>• Open your <b>WhatsApp</b> on your phone.</p>
              <p>• Tap <b>Menu</b> on Android or <b>Settings</b> on iPhone.</p>
              <p>• Tap <b>Linked Devices</b> and then <b>Link a Device</b>.</p>
              <p>• Now scan the code shown above.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Scanqrpage;
