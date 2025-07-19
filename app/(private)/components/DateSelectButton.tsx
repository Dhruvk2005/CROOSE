import React, { useRef } from "react";
import { Calendar } from "lucide-react"; // Or your own icon

type DateSelectButtonProps = {
  appointmentTime: string;
  setDate: React.Dispatch<React.SetStateAction<{ appointmentTime: string }>>;
};

export const DateSelectButton: React.FC<DateSelectButtonProps> = ({
  appointmentTime,
  setDate,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      // @ts-ignore — showPicker may not be in type definitions yet
      inputRef.current.showPicker
        ? 
          // @ts-ignore
          inputRef.current.showPicker()
        : inputRef.current.click();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-1.5 border rounded text-sm text-gray-700 hover:bg-gray-100"
        onClick={handleButtonClick}
        aria-label="Select appointment date"
      >
        <Calendar className="w-4 h-4" />
        Select date
      </button>

      <input
        ref={inputRef}
        type="date" 
        required
        className="sr-only"
        onChange={e =>
          setDate(prev => ({
            ...prev,
            appointmentTime: e.target.value,
          }))
        }
        value={appointmentTime}
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  );
};
