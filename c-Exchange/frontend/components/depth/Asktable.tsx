
export const AskTable = ({ asks }: { asks: [string, string][] }) => {

    let currentTotal = 0;
    const relevantAsks = asks.slice(0, 13);
    relevantAsks.reverse();

    let asksWithTotal: [string, string, number][] = [];
    for (let i = relevantAsks.length - 1; i>=0; i--)  {
        const [price, quantity] = relevantAsks[i];
        asksWithTotal.push([price, quantity, currentTotal += Number(quantity)]);
    }
    const maxTotal = relevantAsks.reduce((acc, [_, quantity]) => acc + Number(quantity), 0);


    asksWithTotal.reverse();

    return <div className="p-3">
                {asksWithTotal.map(([price, quantity, total]) => <Ask maxTotal={maxTotal} key={price} price={price} quantity={quantity} total={total} />)}
           
        </div>
}

function Ask({price, quantity, total, maxTotal}: {price: string, quantity: string, total: number, maxTotal: number}) {
    return <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                backgroundColor: "transparent",
                overflow: "hidden",
                marginTop: "1px",
                padding: "2px"
            }}
        >
        <div
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${(90 * total) / maxTotal}%`,
            height: "100%",
            background: "rgba(228, 75, 68, 0.325)",
            transition: "width 0.2s ease-in-out",
            border: "#14151c solid 1px"
            }}
        ></div>
        <div className="flex justify-around text-sm w-full font-bold">
            <div>
                {price}
            </div>
            <div className="ml-10">
                {quantity}
            </div>
            <div className="ml-5">
                {total?.toFixed(2)}
            </div>
        </div>
    </div>
}