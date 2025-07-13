
export const BuyButton = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: any }) => {
    return <div className={`flex flex-col mb-[-2px] flex-1 cursor-pointer justify-center border-b-2 p-4 ${activeTab === 'buy' ? 'bg-[#222d2d] text-green-400' : 'text-gray-400 hover:text-green-400'}`} onClick={() => setActiveTab('buy')}>
        <p className="text-center text-sm font-semibold">
            Buy
        </p>
    </div>
}

export const SellButton = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: any}) => {
    return <div className={`flex flex-col mb-[-2px] flex-1 cursor-pointer justify-center border-b-2 p-4 ${activeTab === 'sell' ? 'bg-[#39252a] text-red-400 ' : 'text-gray-400 hover:text-red-400'}`} onClick={() => setActiveTab('sell')}>
        <p className="text-center text-sm font-semibold ">
            Sell
        </p>
    </div>
}


interface OrderTabProps {
  label: string;
  value: string;
  activeType: string;
  setType: (type: string) => void;
}

export const OrderTab = ({ label, value, activeType, setType }: OrderTabProps) => {
  const isActive = activeType === value;

  return (
    <button
      onClick={() => setType(value)}
      className={`flex-1 text-sm font-semibold rounded-lg py-1 px-3 h-8 cursor-pointer transition
        ${
          isActive
            ? "bg-[#202126] text-white border-b-2 border-gray-500"
            : "text-gray-400 hover:border-b-2 hover:border-gray-500 hover:text-white"
        }`}
    >
      {label}
    </button>
  );
};
