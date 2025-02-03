'use client'
import React, { useRef } from "react";

interface AddNewButtonProps {
    handleButtonClick: () => void;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    fileInputRef: any;
}

export default function AddNewButton({
    handleButtonClick,
    handleFileChange,
    fileInputRef,
}: AddNewButtonProps) {
    return (
        <div>
            <button
                onClick={handleButtonClick}
                className="w-[50px] h-[50px] text-xl text-white bg-blue-400 rounded-full flex items-center justify-center cursor-pointer"
            >
                +
            </button>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" // Oculta o input
            />
        </div>
    );
}