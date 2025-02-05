
interface SheetData {
    name:  string,
    date: Date,
    size: string
}

interface TableComponentProps {
    sheetData: SheetData | null;
    openModal: () => void;
  }
  
const TableComponent: React.FC<TableComponentProps> = ({
    sheetData,
    openModal,
  }) => {
   
    return (
        <div>
            <div className="border rounded-lg">
                <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div className="font-semibold">Nome</div>
                    <div className="font-semibold">Data</div>
                    <div className="font-semibold">Tamanho</div>
                    <div className="font-semibold">Ações</div>
                </div>
                <div id="spreadsheetList" className="divide-y">
                    {sheetData ? (
                        <div className="grid grid-cols-4 gap-4 p-4">
                            <div>{sheetData.name}</div>
                            <div>{sheetData.date?.toLocaleString()}</div> 
                            <div>{sheetData.size}</div>
                            <div><button onClick={openModal}>Visualizar</button></div> 
                        </div>
                    ) : (
                        <div className="p-4">Nenhum dado de planilha disponível.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TableComponent;