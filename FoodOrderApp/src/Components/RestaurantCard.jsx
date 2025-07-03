const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName } =
    resData?.info;

  return (
    <div className="restaurant-card">
      <img
        src={
          `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
          `${cloudinaryImageId}`
        }
        alt="Restaurant"
        className="restaurant-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating} </h4>
      <h4>Locality: {areaName} </h4>
      <button className="order-button">Order Now</button>
    </div>
  );
};
export default RestaurantCard;
// This component displays a restaurant card with an image, name, cuisines, average rating, and an "Order Now" button.
// It uses the `resData` prop to access the restaurant information and displays it accordingly.
// The image is constructed using the `cloudinaryImageId` to fetch the restaurant's image from Swiggy's media assets.
// The component is styled with CSS classes for better presentation.
// The `Order Now` button currently does not have any functionality attached to it, but it can be enhanced later to handle order actions.
// The component is exported for use in other parts of the application, such as in the main content area where multiple restaurant cards are displayed.
// The component is designed to be reusable, allowing it to be used for different restaurant data passed as props.
// The `cuisines` are displayed as a comma-separated list, providing a quick overview of the types of food offered by the restaurant.
// The average rating is displayed to give users an idea of the restaurant's quality based on customer reviews.
// The component is part of a larger food order application, which includes a header, main content area, and footer.
// It is designed to be responsive and visually appealing, enhancing the user experience when browsing through different restaurants.
// The component can be easily modified or extended to include additional features, such as displaying the restaurant's address, delivery time, or special offers.
// It follows best practices for React components, including using functional components and destructuring props for cleaner code.
// The component can be integrated with state management solutions like Redux or Context API if needed, to manage the state of the restaurant data or user interactions.
// It can also be tested using testing libraries like Jest or React Testing Library to ensure its functionality and appearance remain consistent as the application evolves.
// The component is a key part of the food order application, providing users with a visually appealing and informative way to explore different restaurants and their offerings.
// The component can be further enhanced with features like hover effects, animations, or additional information displayed on hover or click events.
// It can also be integrated with a backend service to fetch real-time restaurant data, allowing for dynamic updates as new restaurants are added or existing ones are modified.
// The component is designed to be modular and maintainable, making it easy for developers to work on and extend its functionality
// as the application grows or changes over time.
// The component can be styled using CSS or CSS-in-JS libraries like styled-components or Emotion, allowing for more dynamic and theme-based styling options.
// It can also be optimized for performance by using techniques like lazy loading images, memoization, or code splitting to reduce the initial load time of the
