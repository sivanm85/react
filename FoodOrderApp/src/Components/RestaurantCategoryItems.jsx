import ItemList from "./ItemList";

const RestaurantCategoryItems = ({ data, showItems, setShowIndex }) => {
  const categories = data.card.itemCards;
  const title = data.card.title;
  //const [showItems, setShowItems] = useState(false);
  const onhandleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={onhandleClick}
        >
          <span className="font-bold text-lg">
            {title} ({categories.length})
          </span>
          {showItems ? <span>-</span> : <span>+</span>}
        </div>
        {showItems && <ItemList items={categories} />}
      </div>
    </div>
  );
};
export default RestaurantCategoryItems;
