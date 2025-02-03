'use client'
import { useEffect, useRef, useState } from "react";
import AddNewButton from "../addNewButton/addNewButton";
import TableComponent from "../tableComponent/tableComponent";
import * as XLSX from "xlsx";

interface SheetData {
    name:  string,
    date: Date,
    size: string,
    content: string[][];
}
export default function SheetsVisualizer() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [sheetData, setSheetData] = useState<SheetData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];  

        if (!file) return;
        const reader = new FileReader();

        reader.onload = (e) => {
            const binaryStr = e.target?.result;

            if (binaryStr) {
                const workbook = XLSX.read(binaryStr, { type: "binary" });

                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                const sheetContent = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                const newSheetData: SheetData = {
                    name: file.name,
                    date: new Date(file.lastModified),
                    size: (file.size / 1024).toFixed(2) + ' KB',
                    content: sheetContent as string[][],
                };

                setSheetData(newSheetData);
            }
        };

        reader.readAsArrayBuffer(file);

    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(()=>{
        if(sheetData)console.log('sheet', sheetData)
    },[sheetData]);

    return (
        <div className="flex flex-col w-3/5 gap-4 bg-white text-black rounded p-8 shadow-2xs">
            <div className="font-extrabold text-xl">Visualizar Planilhas</div>
            <div>
                <TableComponent 
                    sheetData={sheetData}
                    openModal={openModal}
                />
            </div>
            <div className="self-end">
                <AddNewButton
                    handleButtonClick={handleButtonClick}
                    handleFileChange={handleFileChange}
                    fileInputRef={fileInputRef}
                />
            </div>
            {isModalOpen ? <Modal isOpen={isModalOpen} onClose={closeModal} sheetData={sheetData}/> : null}
        </div>
    );
}
// modal

interface ModalProps {
    isOpen: boolean,    
    onClose: ()=> void,
    sheetData: SheetData | null,
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, sheetData }) =>{
    if (!isOpen || !sheetData) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-3/4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Conteúdo da Planilha</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    {sheetData.content[0]?.map((header, index) => (
                      <th
                        key={index}
                        className="border border-gray-300 px-4 py-2 bg-gray-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sheetData.content.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-gray-300 px-4 py-2"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      );
}