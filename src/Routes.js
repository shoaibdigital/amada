import Homepage from "./Pages/Homepage"
import NewsAndEvents from "./Pages/NewsAndEvents"
import NewsDetailsPage from "./Pages/NewsDetailsPage"
import VocationalCentre from "./Pages/VocationalCentre"
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import CareerPage from "./Pages/CareerPage";


const routes = [
    {
        path:"/vocationalcentre",
        component:VocationalCentre,
    },
    {
        path:"/news",
        component:NewsAndEvents
    },
    {
        path:"/home",
        component:Homepage
    },
    {
        path:"/newsdetails",
        component:NewsDetailsPage
    },
    {
        path:"/career",
        component:CareerPage,
        exact:true
    },
    {
        path:"/:slug/:id",
        component:ProductDetails,
         exact:true
      },
    {
        path:"/:slug",
        component:ProductListing,
        exact:true
    }

]

export default routes






























// import React from "react";
// import ProductListing from "./Pages/ProductListing";
// import ProductDetails from "./Pages/ProductDetails";

// const routes = [
//     {
//         path:"/list/:id",
//         component:ProductListing,
//         exact:true
//     },
//     {
//       path:"/product/:id",
//       component:ProductListing,
//        exact:true
//     }
// ]

// export default routes;