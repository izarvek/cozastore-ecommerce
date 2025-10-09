// assets.js

// Main Images
import about01 from './about-01.jpg';
import about02 from './about-02.jpg';

import avatar01 from './avatar-01.jpg';

import banner01 from './banner-01.jpg';
import banner02 from './banner-02.jpg';
import banner03 from './banner-03.jpg';
import banner04 from './banner-04.jpg';
import banner05 from './banner-05.jpg';
import banner06 from './banner-06.jpg';
import banner07 from './banner-07.jpg';
import banner08 from './banner-08.jpg';
import banner09 from './banner-09.jpg';

import bg01 from './bg-01.jpg';
import bg02 from './bg-02.jpg';

import blog01 from './blog-01.jpg';
import blog02 from './blog-02.jpg';
import blog03 from './blog-03.jpg';
import blog04 from './blog-04.jpg';
import blog05 from './blog-05.jpg';
import blog06 from './blog-06.jpg';

import gallery01 from './gallery-01.jpg';
import gallery02 from './gallery-02.jpg';
import gallery03 from './gallery-03.jpg';
import gallery04 from './gallery-04.jpg';
import gallery05 from './gallery-05.jpg';
import gallery06 from './gallery-06.jpg';
import gallery07 from './gallery-07.jpg';
import gallery08 from './gallery-08.jpg';
import gallery09 from './gallery-09.jpg';

import itemCart01 from './item-cart-01.jpg';
import itemCart02 from './item-cart-02.jpg';
import itemCart03 from './item-cart-03.jpg';
import itemCart04 from './item-cart-04.jpg';
import itemCart05 from './item-cart-05.jpg';

import product01 from './product-01.jpg';
import product02 from './product-02.jpg';
import product03 from './product-03.jpg';
import product04 from './product-04.jpg';
import product05 from './product-05.jpg';
import product06 from './product-06.jpg';
import product07 from './product-07.jpg';
import product08 from './product-08.jpg';
import product09 from './product-09.jpg';
import product10 from './product-10.jpg';
import product11 from './product-11.jpg';
import product12 from './product-12.jpg';
import product13 from './product-13.jpg';
import product14 from './product-14.jpg';
import product15 from './product-15.jpg';
import product16 from './product-16.jpg';

import productDetail01 from './product-detail-01.jpg';
import productDetail02 from './product-detail-02.jpg';
import productDetail03 from './product-detail-03.jpg';

import productMin01 from './product-min-01.jpg';
import productMin02 from './product-min-02.jpg';
import productMin03 from './product-min-03.jpg';

import slide01 from './slide-01.jpg';
import slide02 from './slide-02.jpg';
import slide03 from './slide-03.jpg';
import slide04 from './slide-04.jpg';
import slide05 from './slide-05.jpg';
import slide06 from './slide-06.jpg';
import slide07 from './slide-07.jpg';

import thumb01 from './thumb-01.jpg';
import thumb02 from './thumb-02.jpg';
import thumb03 from './thumb-03.jpg';

// Icons Images
import favicon from './icons/favicon.png'
import iconClose from './icons/icon-close.png';
import iconClose2 from './icons/icon-close2.png';
import iconEmail from './icons/icon-email.png';
import iconHeart01 from './icons/icon-heart-01.png';
import iconHeart02 from './icons/icon-heart-02.png';
import iconNext from './icons/icon-next.png';
import iconPay01 from './icons/icon-pay-01.png';
import iconPay02 from './icons/icon-pay-02.png';
import iconPay03 from './icons/icon-pay-03.png';
import iconPay04 from './icons/icon-pay-04.png';
import iconPay05 from './icons/icon-pay-05.png';
import iconPrev from './icons/icon-prev.png';
import logo01 from './icons/logo-01.png';
import logo02 from './icons/logo-02.png';
import pin from './icons/pin.png';
import search from './icons/search.png'
import shoppingCart from './icons/shopping-cart.png'
import heart from './icons/heart.png'
import menu from './icons/menu.png'
// Export objects
export const assets = {
  about01,
  about02,
  avatar01,
  banner01,
  banner02,
  banner03,
  banner04,
  banner05,
  banner06,
  banner07,
  banner08,
  banner09,
  bg01,
  bg02,
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
  itemCart01,
  itemCart02,
  itemCart03,
  itemCart04,
  itemCart05,
  product01,
  product02,
  product03,
  product04,
  product05,
  product06,
  product07,
  product08,
  product09,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  productDetail01,
  productDetail02,
  productDetail03,
  productMin01,
  productMin02,
  productMin03,
  thumb01,
  thumb02,
  thumb03,
};
export const slider = {
  slide01,
  slide02,
  slide03,
  slide04,
  slide05,
  slide06,
  slide07,
}

export const icons = {
  favicon,
  iconClose,
  iconClose2,
  iconEmail,
  iconHeart01,
  iconHeart02,
  iconNext,
  iconPay01,
  iconPay02,
  iconPay03,
  iconPay04,
  iconPay05,
  iconPrev,
  logo01,
  logo02,
  pin,
  search,
  shoppingCart,
  heart,
  menu,
};

export const products = [
  {
    _id: 'aaa',
    name: 'Women T Shirt White Dress',
    price: 29.99,
    discountPrice: 19.99,
    rating: 4.5,
    reviews: 120,
    images: [product01],
    category: 'women',
    subCategory: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'], // Enhanced sizes
    trending: true,
    bestseller: false,
  },
  {
    _id: 'aab',
    name: 'Women Top Wear White Shirt',
    price: 39.99,
    discountPrice: 29.99,
    rating: 4.2,
    reviews: 85,
    images: [product02],
    category: 'women',
    subCategory: 'shirt',
    sizes: ['M', 'L', 'XL'], // Enhanced sizes
    trending: false,
    bestseller: true,
  },
  {
    _id: 'aac',
    name: 'Mens Top Wear Half Shirt',
    price: 19.99,
    discountPrice: 14.99,
    rating: 4.0,
    reviews: 60,
    images: [product03],
    category: 'mens',
    subCategory: 'shirt',
    sizes: ['S', 'M', 'L'], // Enhanced sizes
    trending: true,
    bestseller: true,
  },
  {
    _id: 'aad',
    name: 'Women Winter Wear Top Wear Suit',
    price: 49.99,
    discountPrice: 39.99,
    rating: 4.3,
    reviews: 45,
    images: [product04],
    category: 'women',
    subCategory: 'suit',
    sizes: ['L', 'XL', 'XXL'], // Added extra size
    trending: false,
    bestseller: false,
  },
  {
    _id: 'aae',
    name: 'Women Full Dress Shirt and Lower',
    price: 59.99,
    discountPrice: 49.99,
    rating: 4.6,
    reviews: 200,
    images: [product05],
    category: 'women',
    subCategory: 'full dress',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], // Expanded sizes
    trending: true,
    bestseller: false,
  },
  {
    _id: 'aaf',
    name: 'Watch Black with Golden Shade',
    price: 24.99,
    discountPrice: 19.99,
    rating: 4.4,
    reviews: 90,
    images: [product06],
    category: 'watches',
    subCategory: 'black',
    sizes: ['S', 'M'], // Watches may have limited sizes
    trending: false,
    bestseller: true,
  },
  {
    _id: 'aag',
    name: 'Women Blezer Gray Shine',
    price: 34.99,
    discountPrice: 29.99,
    rating: 4.7,
    reviews: 150,
    images: [product07],
    category: 'women',
    subCategory: 'blazer',
    sizes: ['L', 'XL', 'XXL'], // Added larger sizes
    trending: true,
    bestseller: true,
  },
  {
    _id: 'aah',
    name: 'Women White T Shirt',
    price: 44.99,
    discountPrice: 39.99,
    rating: 4.1,
    reviews: 70,
    images: [product08],
    category: 'women',
    subCategory: 'tshirt',
    sizes: ['M', 'L', 'XL'], // Enhanced sizes
    trending: false,
    bestseller: false,
  },
  {
    _id: 'aai',
    name: 'Black Shoes With White Shade',
    price: 9.99,
    discountPrice: 7.99,
    rating: 4.3,
    reviews: 50,
    images: [product09],
    category: 'shoes',
    subCategory: 'black shoes',
    sizes: ['S', 'M', 'L'], // Shoe sizes
    trending: true,
    bestseller: true,
  },
  {
    _id: 'aaj',
    name: 'Women Black T Shirt',
    price: 29.99,
    discountPrice: 24.99,
    rating: 3.9,
    reviews: 40,
    images: [product10],
    category: 'women',
    subCategory: 'tshirt',
    sizes: ['XL'], // Single size
    trending: false,
    bestseller: false,
  },
  {
    _id: 'aak',
    name: 'Mens Full Shirt Clear Shine',
    price: 35.99,
    discountPrice: 29.99,
    rating: 4.5,
    reviews: 110,
    images: [product11],
    category: 'mens',
    subCategory: 'shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    trending: true,
    bestseller: false,
  },
  {
    _id: 'aal',
    name: 'Leather Belt Strong Build Quality',
    price: 99.99,
    discountPrice: 89.99,
    rating: 4.8,
    reviews: 65,
    images: [product12],
    category: 'belt',
    subCategory: 'belt',
    sizes: ['M', 'L'], // Belt sizes
    trending: false,
    bestseller: true,
  },
  {
    _id: 'aam',
    name: 'Woment White T Shirt',
    price: 29.99,
    discountPrice: 24.99,
    rating: 4.0,
    reviews: 80,
    images: [product13],
    category: 'women',
    subCategory: 'tshirt',
    sizes: ['S', 'M', 'L'], // Expanded sizes
    trending: true,
    bestseller: false,
  },
  {
    _id: 'aan',
    name: 'Women Top Wear',
    price: 49.99,
    discountPrice: 39.99,
    rating: 4.2,
    reviews: 95,
    images: [product14],
    category: 'women',
    subCategory: 'tshirt',
    sizes: ['L', 'XL', 'XXL'], // Larger sizes
    trending: false,
    bestseller: true,
  },
  {
    _id: 'aao',
    name: 'Black Watch Women Wear',
    price: 39.99,
    discountPrice: 34.99,
    rating: 4.4,
    reviews: 88,
    images: [product15],
    category: 'watches',
    subCategory: 'watch',
    sizes: ['S', 'M', 'L'], // Watch sizes
    trending: true,
    bestseller: false,
  },
  {
    _id: 'aap',
    name: 'Women Gym T shirt',
    price: 14.99,
    discountPrice: 12.99,
    rating: 4.6,
    reviews: 130,
    images: [product16],
    category: 'women',
    subCategory: 'tshirt',
    sizes: ['XL'], // Single size
    trending: false,
    bestseller: true,
  },
  {
    _id:'aaq',
    name:'Men Full T Shirt',
    description: 'Description for Product AAQ',
    price:23.23,
    discountPrice:19.99,
    rating:4.2,
    reviews: 75,
    images: [productDetail01 , productDetail02 , productDetail03],
    category: 'men',
    subCategory: 'full tshirt',
    sizes: ['S', 'M', 'L'],
    trending: false,
    bestseller: true,
  }
];


export const reviews = [
  { _id: 1, user: "Alex J.", rating: 5, date: "2024-10-01", title: "Absolutely Perfect Blazer!", comment: "The oversize fit is exactly what I wanted. Material feels premium and the cut is fantastic. Highly recommend for a stylish, relaxed look." },
  { _id: 2, user: "Sam K.", rating: 4, date: "2024-09-28", title: "Great quality, slightly long", comment: "The quality is amazing for the price. Only complaint is the sleeve length is a bit long, but a quick tailoring fix made it perfect." },
  { _id: 3, user: "Chris L.", rating: 5, date: "2024-09-15", title: "My new favorite piece!", comment: "I wear this blazer everywhere. Dress it up, dress it down, it always looks great. Five stars!" },
  { _id: 4, user: "Taylor M.", rating: 3, date: "2024-09-10", title: "Good, but runs large", comment: "The size M felt closer to an L. Had to exchange it. The fabric is nice though." },
  { _id: 5, user: "Jordan P.", rating: 4, date: "2024-08-30", title: "Stylish and comfortable", comment: "Really comfortable material and the fit is sharp. Looks great with casual or formal outfits." },
  { _id: 6, user: "Morgan S.", rating: 2, date: "2024-08-20", title: "Not as expected", comment: "The blazer looked great online but felt a bit cheap in person. Wouldn't buy again." },
  { _id: 7, user: "Jamie R.", rating: 5, date: "2024-08-15", title: "Excellent purchase!", comment: "Super happy with this blazer. The fabric is soft and the fit is perfect. Definitely recommend." },
  { _id: 8, user: "Taylor N.", rating: 4, date: "2024-08-10", title: "Nice style", comment: "Really liked the style and quality. Just needs a little tailoring for perfect fit." },
  { _id: 9, user: "Casey T.", rating: 3, date: "2024-07-25", title: "Average experience", comment: "The blazer is okay, but I expected a bit more luxury feel for the price." },
  { _id: 10, user: "Riley D.", rating: 4, date: "2024-07-20", title: "Good value for money", comment: "Solid quality and great style. Worth the purchase." },
];

export const blogs = [
  {
    id: 1,
    images: [blog01],
    title: "8 Inspiring Ways To Wear Dresses in the Winter",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptate rem unde perspiciatis voluptatem totam dolor mollitia, numquam a sequi?",
    author: "By Admin",
    category: ["StreetStyle", "Fashion", "Couple"],
    commentsCount: 8
  },
  {
    id: 2,
    images: [blog02],
    title: "Summer Trends You Can't Miss",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    author: "By Jane Doe",
    category: ["Summer", "Trends", "Lifestyle"],
    commentsCount: 12
  },
  {
    id: 3,
    images: [blog03],
    title: "Top 10 Fashion Tips for Men",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
    author: "By John Smith",
    category: ["Fashion", "Men", "Tips"],
    commentsCount: 5
  },
  {
    id: 4,
    images: [blog04],
    title: "Healthy Living in the Modern Age",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    author: "By Alice Johnson",
    category: ["Health", "Lifestyle", "Wellness"],
    commentsCount: 20
  },
  {
    id: 5,
    images: [blog05],
    title: "Elegant Wedding Dress Ideas",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    author: "By Emily Clark",
    category: ["Weddings", "Fashion", "Ideas"],
    commentsCount: 15
  }
];