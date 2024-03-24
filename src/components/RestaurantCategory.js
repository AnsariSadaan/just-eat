import ItemLists from "./ItemLists";

const RestaurantCategory = ({ data, showItems, onClick, Dummy }) => {
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
            <div className="flex justify-between" onClick={onClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>{showItems ? "🔼" : "🔽"}</span>
            </div>
            {showItems && <ItemLists items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;
