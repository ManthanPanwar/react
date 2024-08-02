import React from "react";
import ReactDOM from "react-dom/client";
import foodVillaImage from "./images/foodVilla.png";
import burgerKingImage from "./images/burgerKing.png";

/*
      Header
        - logo
        - Nav items(right side)
      
      Body
        - Search Bar
        - RestrauntList
          - RestrauntCard
            - images
            - name
            - rating
            - cusines
      Footer
        - links
        - copyright
      */

const Title = () => {
  return (
    <>
      <a href="/">
        <img id="logo" src={foodVillaImage} alt="logo" />
      </a>

      <h1 id="title" key="h1">
        Food Villa
      </h1>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul style={{ color: "green" }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    info: {
      id: "636894",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Ellis Bridge",
      areaName: "CG Road",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-03 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "2.8",
          ratingCount: "20+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chinese-wok-ellis-bridge-cg-road-ahmedabad-636894",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "81814",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_81814.JPG",
      locality: "3rd Eye II,CG Road",
      areaName: "Ellisbridge",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American", "Salads", "Beverages", "Chaat"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-03 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-3rd-eye-ii-cg-road-ellisbridge-ahmedabad-81814",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "304796",
      name: "Havmor Havfunn Ice Cream",
      cloudinaryImageId: "49845b494b1e637209b7bd1c7ca184ad",
      locality: "Aalishan Complex",
      areaName: "Naranpura",
      costForTwo: "₹400 for two",
      cuisines: ["Ice Cream", "Ice Cream Cakes", "Desserts", "Beverages"],
      avgRating: 4.8,
      veg: true,
      parentId: "94570",
      avgRatingString: "4.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-02 20:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-aalishan-complex-naranpura-ahmedabad-304796",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "70279",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fedaee6f-c5e9-4f19-8188-93627e6d6776_70279.JPG",
      locality: "Kankaria",
      areaName: "Kankaria",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-03 01:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-kankaria-ahmedabad-70279",
      type: "WEBLINK",
    },
  },
];

// React wraps up all the properties in props and you can access it
// const RestaurantCard = (props) => {

// you can destructure the props object
// const RestaurantCard = ({ restaurant }) => {
//   // we can destructure restaurant also
//   const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.info;

// we can destructure on the fly using spread operator
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="nothing"
      />
      {/* <h2>{restaurant?.info?.name}</h2>
      <h3>{restaurant?.info?.cuisines.join(",")}</h3>
      <h4>{restaurant?.info?.avgRating} stars</h4> */}
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

// const Body = () => {
//   return (
//     <div className="restaur">
//       {/* whatever you pass as an attribute is called 'props' in React (people generally say 'pass props') -> passing some properties into my component */}
//       {/* <RestaurantCard restaurant={restaurantList[0]} /> */}
//       <RestaurantCard {...restaurantList[0].info} />

//       <RestaurantCard {...restaurantList[1].info} />
//       <RestaurantCard {...restaurantList[2].info} />
//       <RestaurantCard {...restaurantList[3].info} />
//     </div>
//   );
// };

// instead of calling each RestaurantCard again and again, we will use loop(we will use Array.map() which is the best way to do functional programming)
const Body = () => {
  return (
    <div className="restaur">
      {restaurantList.map((rest) => {
        return <RestaurantCard {...rest.info} key={rest.info.id} />;
      })}
    </div>
  );
};
const Footer = () => <h3>footer</h3>;

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());

// no key is not acceptable is a not acceptable thing.
