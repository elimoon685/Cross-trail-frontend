
const Product={
id: "prod_10001",
  handle: "nike-pegasus-41",
  title: "Nike Pegasus 41",
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
      { value: "green", label: "Green", swatch: "#5D9787" },
    ],
    size: ["40", "41", "41", "43"]
  },

  mediaByColor: {
    red: ["black-1.jpg", "black-2.jpg"],
    orange: ["blue-1.jpg", "blue-2.jpg"],
    green: ["purple-1.jpg"],
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
  




}