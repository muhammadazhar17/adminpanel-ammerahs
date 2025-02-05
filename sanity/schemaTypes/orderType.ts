import { BasketIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stripeCheckoutSessionId',
      title: 'Stripe Checkout Session ID',
      type: 'string',
    }),
    defineField({
      name: 'stripeCustomerId',
      title: 'Stripe Customer ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'clerkUserId',
      title: 'Clerk User ID',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stripePaymentIntentId',
      title: 'Stripe Payment Intent ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }],
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity Purchased',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              title: 'product.name',
              quantity: 'quantity',
              image: 'product.image',
              price: 'product.price',
              currency: 'product.currency',
            },
            prepare({ title, quantity, price, currency, image }) {
              return {
                title,
                subtitle: `${quantity} x ${price} ${currency}`,
                media: image,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discountAmount',
      title: 'Discount Amount',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Canceled', value: 'canceled' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'totalPrice',
      currency: 'currency',
    },
    prepare({ title, subtitle, currency }) {
      return {
        title,
        subtitle: `${subtitle} ${currency}`,
      };
    },
  },
});






// export default {
//     name : 'order',
//     type : 'document',
//     title : 'Order',
//     fields : [
//         {
//             name : 'firstName',
//             title : 'First Name',
//             type :'string'
//         },
//         {
//             name : 'lastName',
//             title : 'Last Name',
//             type :'string'
//         },
//         {
//             name : 'address',
//             title : 'Address',
//             type :'string'
//         },
//         {
//             name : 'city',
//             title : 'City',
//             type :'string'
//         },
//         {
//             name : 'zipCode',
//             title : 'Zip Code',
//             type :'string'
//         },
//         {
//             name : 'phone',
//             title : 'Phone',
//             type :'string'
//         },
//         {
//             name : 'email',
//             title : 'Email',
//             type :'string'
//         },
//         {
//             name : 'discount',
//             type : 'number', 
//             title : 'Discount',
//            },
//         {
//             name : 'cartItems',
//             title : 'Cart Items',
//             type : 'array',
//             of : [{ type : 'reference', to : { type : 'product' } }]
//         },
//         {
//             name : 'total',
//             title : 'Total',
//             type : 'number'
//         },
//         {
//             name : 'status',
//             title : 'Order Status',
//             type :'string',
//             options : {
//                 list : [
//                     { title : 'Pending', value : 'pending' },
//                     { title : 'Success', value :'success' },
//                     { title : 'Dispatch', value : 'dispatch' },
//                 ],
//                 layout : 'radio' // Optionally, change to 'dropdown' if you prefer a dropdown
//             },
//             initialValue : 'pending' // Default value
//         }
//     ]
// }