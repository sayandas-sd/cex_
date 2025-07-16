
export const BidTable = ({ bids }: {bids: [string, string][]}) => {
    let currentTotal = 0; 
    const relevantBids = bids.slice(0, 12);
    console.log(relevantBids)
    const bidsWithTotal: [string, string, number][] = relevantBids.map(([price, quantity]) => [price, quantity, currentTotal += Number(quantity)]);
    const maxTotal = relevantBids.reduce((acc, [_, quantity]) => acc + Number(quantity), 0);

    return <div className="p-3">
        {bidsWithTotal?.map(([price, quantity, total]) => <Bid maxTotal={maxTotal} total={total} key={price} price={price} quantity={quantity} />)}
    </div>
}

function Bid({ price, quantity, total, maxTotal }: { price: string, quantity: string, total: number, maxTotal: number }) {
    return (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                backgroundColor: "transparent",
                overflow: "hidden",
                padding: "2px"
            }}
        >
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${(100 * total) / maxTotal}%`,
                height: "100%",
                background: "rgba(1, 167, 129, 0.325)",
                transition: "width 0.3s ease-in-out",
                border: "#14151c solid 1px"
            }}
        ></div>
            <div className={`flex justify-around text-sm w-full font-bold`}>
                <div>
                    {price}
                </div>
                <div className="ml-10">
                    {quantity}
                </div>
                <div className="ml-5">
                    {total.toFixed(2)}
                </div>
            </div>
        </div>
    );
}