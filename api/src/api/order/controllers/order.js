// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_KEY, {
//     apiVersion: null,
// });

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//     async create(ctx) {
//         const { email, product } = ctx.response.body;

//         const lineItems = await Promise.all(
//         product.map(async (product) =>
//             {const item = await strapi.service("api:product.product").findOne(product.id)}
//         )
//         );
//         try {
//         const session = stripe.checkout.sessions.create({
//             mode: "payment",
//             success_url: `${process.env.CLIENT_URL}?success=true`,
//             cancel_url: `${process.env.CLIENT_URL}?cancel=false`,
//         });
//         } catch (error) {
//         ctx.response.status = 500;
//         return error;
//         }
//     },
// }));

module.exports = createCoreController("api::order.order")