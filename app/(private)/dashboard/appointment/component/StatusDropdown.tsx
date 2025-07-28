import React, { useState, useRef, useEffect } from "react";

interface StatusOption {
  value: string;
  label: string;
  text: string;
  bg: string;
  border: string;
}

const statusOptions: StatusOption[] = [
  { value: "pending", label: "Pending", text: "#B45309", bg: "#FEF3C7", border: "#FCD34D" },
  { value: "confirmed", label: "Confirmed", text: "#166534", bg: "#DCFCE7", border: "#86EFAC" },
  { value: "cancelled", label: "Cancelled", text: "#B91C1C", bg: "#FEE2E2", border: "#FCA5A5" },
  { value: "completed", label: "Completed", text: "#065F46", bg: "#D1FAE5", border: "#6EE7B7" },
];

interface Props {
  value: string; // Current status value
  onChange: (newValue: string) => void; // Callback to update status
}

const StatusDropdown: React.FC<Props> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = statusOptions.find((o) => o.value === value);

  return (
    <div className="relative w-44" ref={dropdownRef}>
      {/* Toggle */}
      <div
        className="flex items-center justify-between px-3 py-2 border border-[#EAECF0] rounded-lg cursor-pointer bg-white"
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedOption ? (
          <span
            className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{
              color: selectedOption.text,
              backgroundColor: selectedOption.bg,
              border: `1px solid ${selectedOption.border}`,
            }}
          >
            {selectedOption.label}
          </span>
        ) : (
          <span className="text-gray-500 text-sm">All Status</span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-gray-500 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {statusOptions.map((opt) => (
            <div
              key={opt.value}
              className="flex justify-center px-3 py-2 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                onChange(opt.value); // ✅ Pass selected value to parent
                setOpen(false);
              }}
            >
              <span
                className="px-3 py-1 rounded-full text-sm font-semibold"
                style={{
                  color: opt.text,
                  backgroundColor: opt.bg,
                  border: `1px solid ${opt.border}`,
                }}
              >
                {opt.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
