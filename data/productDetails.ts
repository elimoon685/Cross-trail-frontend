import { ProductDetails } from "@/interface/productList"
export const ProductData:ProductDetails[]=[
{
  id: "prod_10001",
  handle: "nike-pegasus-41",
  title: "Stretch shell",
  brand: { "id": "brand_nike", "name": "Nike" },

  categories: [
    { "id": "cat_shoes", "name": "hoodies" },
    { "id": "cat_running", "name": "Running" }
  ],

  tags: ["new", "running", "men"],
  descriptionHtml: "<p>...</p>",
  options: {
    color: [
      { value: "red", label: "Red", swatch: "#FF3B30"},
    ],
    size: ["S", "M", "L", "XL"]
  },
  reviews: null,
  reviewsCount:null,
  mediaByColor: {
    red: ["stretch shell_1.png", "stretch shell_2.png"],
  },
  variants: [
    { id: "47531001", color: "red",  size: "S", price: 199, compareAtAmount:"330",  stock: 3 },
    { id: "47541002", color: "red",  size: "M", price: 199, compareAtAmount:"255", stock: 0 },
    { id: "47551003", color: "red",  size: "L", price: 199, compareAtAmount:"255", stock: 8 },
    { id: "47551004", color: "red",  size: "XL", price: 199, compareAtAmount:"255", stock: 8 },
    
  ],
features:["a", "b", "c","d","e","f"],

techspecs:{weight:"", material:"", fit:""},

  seo: {
    "title": "Nike Pegasus 41 | Running Shoe",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  




},
{
  id: "prod_10002",
  handle: "nike-pegasus-41",
  title: "Fleece Hoodies men's",
  brand: { "id": "brand_nike", "name": "Nike" },

  categories: [
    { "id": "cat_shoes", "name": "Shoes" },
    { "id": "cat_running", "name": "Running" }
  ],

  tags: ["new", "running", "men"],
  descriptionHtml: "<p>...</p>",
  options: {
    color: [
      { value: "purple", label: "Purple", swatch: "#8E44AD"},
    
    ],
    size: ["S", "M", "L", "XL"]
  },
  reviews: 4.2,
  reviewsCount:14,
  mediaByColor: {
    purple: ["Fleece Hoodies men's_1.png", "Fleece Hoodies men's_2.png"],
    
  },
  variants: [
    { id: "48531001", color: "purple",  size: "S", price: 213, compareAtAmount:"330",  stock: 3 },
    { id: "48541002", color: "purple",  size: "M", price: 213, compareAtAmount:"255", stock: 0 },
    { id: "48551003", color: "purple",  size: "L", price: 213, compareAtAmount:"255", stock: 8 },
    { id: "48551004", color: "purple",  size: "XL", price: 213, compareAtAmount:"255", stock: 8 },
    
    

    
  ],
features:["a", "b", "c","d","e","f"],

techspecs:{weight:"", material:"", fit:""},

  seo: {
    "title": "Nike Pegasus 41 | Running Shoe",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  




},
{
  id: "prod_10003",
  handle: "nike-pegasus-41",
  title: "Rain coat Waterproof GXT",
  brand: { "id": "brand_nike", "name": "Nike" },

  categories: [
    { "id": "cat_shoes", "name": "Shoes" },
    { "id": "cat_running", "name": "Running" }
  ],

  tags: ["new", "running", "men"],
  descriptionHtml: "<p>...</p>",
  options: {
    color: [
      { value: "red", label: "Red", swatch: "#FF3B30"},
      { value: "brown", label: "Brown", swatch: "#5D4037" },
     
    ],
    size: ["S", "M", "L", "XL"]
  },
  reviews: 5,
  reviewsCount:37,
  mediaByColor: {
    red: ["Rain coat Waterproof GXT_1.png", "Rain coat Waterproof GXT_2.png"],
    brown: ["Rain coat Waterproof GXT_3.png", "Rain coat Waterproof GXT_4.png"],
   
  },
  variants: [
    { id: "45931001", color: "red",  size: "S", price: 199, compareAtAmount:"330",  stock: 3 },
    { id: "45941002", color: "red",  size: "M", price: 199, compareAtAmount:"255", stock: 0 },
    { id: "45951003", color: "red",  size: "L", price: 199, compareAtAmount:"255", stock: 8 },
    { id: "45951004", color: "red",  size: "XL", price: 199, compareAtAmount:"255", stock: 8 },

    { id: "46601001", color: "brown", size: "S", price: 199, compareAtAmount:"255", stock: 5 },
    { id: "46611002", color: "brown", size: "M", price: 199, compareAtAmount:"255", stock: 2 },
    { id: "46621003", color: "brown", size: "L", price: 199, compareAtAmount:"255", stock: 9 },
    { id: "46631004", color: "brown", size: "XL", price: 199, compareAtAmount:"255", stock: 0},
    
    
  ],
features:["a", "b", "c","d","e","f"],

techspecs:{weight:"", material:"", fit:""},

  seo: {
    "title": "Nike Pegasus 41 | Running Shoe",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  




},
{
  id: "prod_10004",
  handle: "nike-pegasus-41",
  title: "Hiking shoes Men's 626",
  brand: { "id": "brand_nike", "name": "Nike" },

  categories: [
    { "id": "cat_shoes", "name": "Shoes" },
    { "id": "cat_running", "name": "Running" }
  ],

  tags: ["new", "running", "men"],
  descriptionHtml: "<p>...</p>",
  options: {
    color: [
      { value: "red", label: "Red", swatch: "#FF3B30"},
      { value: "orange", label: "Orange", swatch: "#F97316" },
      { value: "green", label: "Green", swatch: "#5D9787" },
    ],
    size: ["40", "41", "42", "43"]
  },
  reviews: 3.7,
  reviewsCount:21,
  mediaByColor: {
    red: ["Hiking shoes_1.png", "Hiking shoes_2.png"],
    orange: ["Hiking shoes_3.png", "Hiking shoes_4.png"],
    green: ["Hiking shoes_5.png","Hiking shoes_6.png"],
  },
  variants: [
    { id: "45531001", color: "red",  size: "40", price: 199, compareAtAmount:"330",  stock: 3 },
    { id: "45541002", color: "red",  size: "41", price: 199, compareAtAmount:"255", stock: 0 },
    { id: "45551003", color: "red",  size: "42", price: 199, compareAtAmount:"255", stock: 8 },
    { id: "45551004", color: "red",  size: "43", price: 199, compareAtAmount:"255", stock: 8 },
    
    

    { id: "45601001", color: "orange", size: "40", price: 199, compareAtAmount:"255", stock: 5 },
    { id: "45611002", color: "orange", size: "41", price: 199, compareAtAmount:"255", stock: 2 },
    { id: "45621003", color: "orange", size: "42", price: 199, compareAtAmount:"255", stock: 9 },
    { id: "45631004", color: "orange", size: "43", price: 199, compareAtAmount:"255", stock: 5},
    { id: "45701001", color: "green", size: "40", price: 199, compareAtAmount:null, stock: 5 },
    { id: "45711002", color: "green", size: "41", price: 199, compareAtAmount:"255", stock: 2 },
    { id: "45721003", color: "green", size: "42", price: 199, compareAtAmount:"300", stock: 9 },
    { id: "45731004", color: "green", size: "43", price: 199, compareAtAmount:"255", stock: 0 },

    
  ],
features:["a", "b", "c","d","e","f"],

techspecs:{weight:"", material:"", fit:""},

  seo: {
    "title": "Nike Pegasus 41 | Running Shoe",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  




},{
  id: "prod_10005",
  handle: "nike-pegasus-41",
  title: "Trekking poles",
  brand: { "id": "brand_nike", "name": "Nike" },

  categories: [
    { "id": "cat_shoes", "name": "Shoes" },
    { "id": "cat_running", "name": "Running" }
  ],

  tags: ["new", "running", "men"],
  descriptionHtml: "<p>...</p>",
  options: {
    color: [
      { value: "red", label: "Red", swatch: "#FF3B30"},
      { value: "organe", label: "Orange", swatch: "#F97316" },
    ],
    size: ["S/M", "M/L"]
  },
  reviews: null,
  reviewsCount:null,
  mediaByColor: {
    red: ["Tatenen trekking poles_1.png", "Tatenen trekking poles_2.png", "Tatenen trekking poles_3.png"],
    orange: ["Tatenen trekking poles_4.png", "Tatenen trekking poles_5.png","Tatenen trekking poles_6.png"],
  },
  variants: [
    { id: "48531001", color: "red",  size: "S/M", price: 199, compareAtAmount:"330",  stock: 3 },
    { id: "48541002", color: "red",  size: "M/L", price: 220, compareAtAmount:"255", stock: 0 },

    { id: "49601001", color: "orange", size: "S/M", price: 199, compareAtAmount:"255", stock: 5 },
    { id: "49611002", color: "orange", size: "M/L", price: 220, compareAtAmount:"255", stock: 2 },
    

    
  ],
features:["a", "b", "c","d","e","f"],

techspecs:{weight:"", material:"", fit:""},

  seo: {
    "title": "Nike Pegasus 41 | Running Shoe",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },

},
{
  id: "prod_10006",
  handle: "nike-pegasus-41",
  title: "HeadLamps",
  brand: { "id": "brand_nike", "name": "Nike" },

  categories: [
    { "id": "cat_shoes", "name": "Shoes" },
    { "id": "cat_running", "name": "Running" }
  ],

  tags: ["new", "running", "men"],
  descriptionHtml: "<p>...</p>",
  options: {
    color: [
      { value: "black", label: "Black", swatch: "#FF3B30"},
      { value: "blue", label: "Blue", swatch: "#F97316" },
    ],
    size: null,
  },
  reviews: 5,
  reviewsCount:4,
  mediaByColor: {
    black: ["HeadLamps_1.png"],
  },
  variants: [
    { id: "58531001", color: "black",  size: null, price: 199, compareAtAmount:null,  stock: 3 },
    //{ id: "58541002", color: "red",  size: null, price: 220, compareAtAmount:"255", stock: 0 },

  ],
features:["a", "b", "c","d","e","f"],

techspecs:{weight:"", material:"", fit:""},

  seo: {
    "title": "Nike Pegasus 41 | Running Shoe",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  
}
]