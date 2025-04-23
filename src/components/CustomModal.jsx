import React from 'react';

const CustomModal = ({
  visible,
  onDismiss,
  onConfirm,
  title,
  message,
  buttonText,
  buttonStyle,
  buttonTextStyle,
  cancelButtonText,
  cancelButtonStyle,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 w-11/12 max-w-md shadow-lg">
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        {message && <p className="text-base text-center mb-6">{message}</p>}
        <div className="flex justify-between">
          {cancelButtonText && (
            <button
              onClick={onDismiss}
              className={`w-5/12 py-2 rounded-lg text-white bg-gray-500 hover:bg-gray-600 ${cancelButtonStyle || ''}`}
            >
              {cancelButtonText}
            </button>
          )}
          {buttonText && (
            <button
              onClick={onConfirm}
              className={`w-5/12 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 ${buttonStyle || ''}`}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
