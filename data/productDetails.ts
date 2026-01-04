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
  features:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?"],


  techspecs:{weight:"xxxxx", material:"xxxxx", fit:"xxxxxxx"},

  seo: {
    "title": "stretch shell ",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  
  reviewsList:[
  ]



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
  reviews: 3.4,
  reviewsCount:10,
  mediaByColor: {
    purple: ["Fleece Hoodies men's_1.png", "Fleece Hoodies men's_2.png"],
    
  },
  variants: [
    { id: "48531001", color: "purple",  size: "S", price: 213, compareAtAmount:"330",  stock: 3 },
    { id: "48541002", color: "purple",  size: "M", price: 213, compareAtAmount:"255", stock: 0 },
    { id: "48551003", color: "purple",  size: "L", price: 213, compareAtAmount:"255", stock: 8 },
    { id: "48551004", color: "purple",  size: "XL", price: 213, compareAtAmount:"255", stock: 8 },
    
    

    
  ],
  features:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?"],


  techspecs:{weight:"xxxxx", material:"xxxxx", fit:"xxxxxxx"},

  seo: {
    "title": "Fleece Hoodies men's",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  

  reviewsList:[
    {
      Id: "r1",
      name: "Alex",
      date: "2025-01-12",
      title: "Great overall experience",
      rate: 4,
      helpful: 12,
      dislike: 1,
      content:
        "Overall, the experience has been great. The features are solid, the flow is intuitive, and it works well for daily use."
    },
    {
      Id: "r2",
      name: "Mia",
      date: "2025-01-15",
      title: "Decent, but needs polish",
      rate: 3,
      helpful: 5,
      dislike: 2,
      content:
        "It does the job, but some details feel unrefined. A few parts are a bit clunky, so I'd love to see improvements."
    },
    {
      Id: "r3",
      name: "Daniel",
      date: "2025-01-18",
      title: "Disappointing experience",
      rate: 1,
      helpful: 20,
      dislike: 6,
      content:
        "This was far from what I expected. The experience was frustrating and I ran into several issues. I wouldn't recommend it."
    },
    {
      Id: "r4",
      name: "Sophie",
      date: "2025-01-22",
      title: "Excellent value for money",
      rate: 5,
      helpful: 33,
      dislike: 0,
      content:
        "I’m genuinely impressed for the price. It’s stable, smooth to use, and delivers more than I expected. Highly recommended."
    },
    {
      Id: "r5",
      name: "Leo",
      date: "2025-01-25",
      title: "Meets expectations well",
      rate: 4,
      helpful: 8,
      dislike: 1,
      content:
        "The performance matches the description. No major drawbacks so far, and it feels reliable overall."
    },
    {
      Id: "r6",
      name: "Emily",
      date: "2025-01-28",
      title: "Some highlights, some issues",
      rate: 3,
      helpful: 6,
      dislike: 3,
      content:
        "There are a few really nice design choices, but also some small problems that get in the way. It's okay, but not perfect."
    },
    {
      Id: "r7",
      name: "Jack",
      date: "2025-02-01",
      title: "Exactly what I needed",
      rate: 5,
      helpful: 18,
      dislike: 0,
      content:
        "This fits my needs perfectly. Everything feels easy and natural to use, and I haven't noticed any big issues yet."
    },
    {
      Id: "r8",
      name: "Olivia",
      date: "2025-02-03",
      title: "Feels rough around the edges",
      rate: 1,
      helpful: 9,
      dislike: 4,
      content:
        "The core features work, but the overall experience feels a bit rough. Some interactions could be designed more thoughtfully."
    },
    {
      Id: "r9",
      name: "Ryan",
      date: "2025-02-06",
      title: "Worth trying",
      rate: 3,
      helpful: 11,
      dislike: 2,
      content:
        "There’s room to improve, but it performs well overall. For most people, it’s a pretty good option."
    },
    {
      Id: "r10",
      name: "Lily",
      date: "2025-02-10",
      title: "Better than expected",
      rate: 5,
      helpful: 27,
      dislike: 1,
      content:
        "I didn’t expect much at first, but it turned out to be really good. The details and stability are surprisingly strong."
    }
  ]


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
  features:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?"],


  techspecs:{weight:"xxxxx", material:"xxxxx", fit:"xxxxxxx"},

  seo: {
    "title": "Rain coat Waterproof GXT",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  

  reviewsList:[
    {
      Id: "r1",
      name: "Alex",
      date: "2025-01-12",
      title: "Great overall experience",
      rate: 4,
      helpful: 12,
      dislike: 1,
      content:
        "Overall, the experience has been great. The features are solid, the flow is intuitive, and it works well for daily use."
    },
    {
      Id: "r2",
      name: "Mia",
      date: "2025-01-15",
      title: "Decent, but needs polish",
      rate: 3,
      helpful: 5,
      dislike: 2,
      content:
        "It does the job, but some details feel unrefined. A few parts are a bit clunky, so I'd love to see improvements."
    },
    {
      Id: "r3",
      name: "Daniel",
      date: "2025-01-18",
      title: "Disappointing experience",
      rate: 1,
      helpful: 20,
      dislike: 6,
      content:
        "This was far from what I expected. The experience was frustrating and I ran into several issues. I wouldn't recommend it."
    },
    {
      Id: "r4",
      name: "Sophie",
      date: "2025-01-22",
      title: "Excellent value for money",
      rate: 5,
      helpful: 33,
      dislike: 0,
      content:
        "I’m genuinely impressed for the price. It’s stable, smooth to use, and delivers more than I expected. Highly recommended."
    },
    {
      Id: "r5",
      name: "Leo",
      date: "2025-01-25",
      title: "Meets expectations well",
      rate: 4,
      helpful: 8,
      dislike: 1,
      content:
        "The performance matches the description. No major drawbacks so far, and it feels reliable overall."
    },
    {
      Id: "r6",
      name: "Emily",
      date: "2025-01-28",
      title: "Some highlights, some issues",
      rate: 3,
      helpful: 6,
      dislike: 3,
      content:
        "There are a few really nice design choices, but also some small problems that get in the way. It's okay, but not perfect."
    },
    {
      Id: "r7",
      name: "Jack",
      date: "2025-02-01",
      title: "Exactly what I needed",
      rate: 5,
      helpful: 18,
      dislike: 0,
      content:
        "This fits my needs perfectly. Everything feels easy and natural to use, and I haven't noticed any big issues yet."
    },
    {
      Id: "r8",
      name: "Olivia",
      date: "2025-02-03",
      title: "Feels rough around the edges",
      rate: 2,
      helpful: 9,
      dislike: 4,
      content:
        "The core features work, but the overall experience feels a bit rough. Some interactions could be designed more thoughtfully."
    },
    {
      Id: "r9",
      name: "Ryan",
      date: "2025-02-06",
      title: "Worth trying",
      rate: 4,
      helpful: 11,
      dislike: 2,
      content:
        "There’s room to improve, but it performs well overall. For most people, it’s a pretty good option."
    },
    {
      Id: "r10",
      name: "Lily",
      date: "2025-02-10",
      title: "Better than expected",
      rate: 5,
      helpful: 27,
      dislike: 1,
      content:
        "I didn’t expect much at first, but it turned out to be really good. The details and stability are surprisingly strong."
    }
  ]


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
  reviews: 3.2,
  reviewsCount:10,
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
  features:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?"],


  techspecs:{weight:"xxxxx", material:"xxxxx", fit:"xxxxxxx"},

  seo: {
    "title": "Nike Pegasus 41 | Running Shoe",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  

  reviewsList:[
    {
      Id: "r1",
      name: "Alex",
      date: "2025-01-12",
      title: "Great overall experience",
      rate: 4,
      helpful: 12,
      dislike: 1,
      content:
        "Overall, the experience has been great. The features are solid, the flow is intuitive, and it works well for daily use."
    },
    {
      Id: "r2",
      name: "Mia",
      date: "2025-01-15",
      title: "Decent, but needs polish",
      rate: 3,
      helpful: 5,
      dislike: 2,
      content:
        "It does the job, but some details feel unrefined. A few parts are a bit clunky, so I'd love to see improvements."
    },
    {
      Id: "r3",
      name: "Daniel",
      date: "2025-01-18",
      title: "Disappointing experience",
      rate: 1,
      helpful: 20,
      dislike: 6,
      content:
        "This was far from what I expected. The experience was frustrating and I ran into several issues. I wouldn't recommend it."
    },
    {
      Id: "r4",
      name: "Sophie",
      date: "2025-01-22",
      title: "Excellent value for money",
      rate: 4,
      helpful: 33,
      dislike: 0,
      content:
        "I’m genuinely impressed for the price. It’s stable, smooth to use, and delivers more than I expected. Highly recommended."
    },
    {
      Id: "r5",
      name: "Leo",
      date: "2025-01-25",
      title: "Meets expectations well",
      rate: 4,
      helpful: 8,
      dislike: 1,
      content:
        "The performance matches the description. No major drawbacks so far, and it feels reliable overall."
    },
    {
      Id: "r6",
      name: "Emily",
      date: "2025-01-28",
      title: "Some highlights, some issues",
      rate: 2,
      helpful: 6,
      dislike: 3,
      content:
        "There are a few really nice design choices, but also some small problems that get in the way. It's okay, but not perfect."
    },
    {
      Id: "r7",
      name: "Jack",
      date: "2025-02-01",
      title: "Exactly what I needed",
      rate: 4,
      helpful: 18,
      dislike: 0,
      content:
        "This fits my needs perfectly. Everything feels easy and natural to use, and I haven't noticed any big issues yet."
    },
    {
      Id: "r8",
      name: "Olivia",
      date: "2025-02-03",
      title: "Feels rough around the edges",
      rate: 2,
      helpful: 9,
      dislike: 4,
      content:
        "The core features work, but the overall experience feels a bit rough. Some interactions could be designed more thoughtfully."
    },
    {
      Id: "r9",
      name: "Ryan",
      date: "2025-02-06",
      title: "Worth trying",
      rate: 4,
      helpful: 11,
      dislike: 2,
      content:
        "There’s room to improve, but it performs well overall. For most people, it’s a pretty good option."
    },
    {
      Id: "r10",
      name: "Lily",
      date: "2025-02-10",
      title: "Better than expected",
      rate: 4,
      helpful: 27,
      dislike: 1,
      content:
        "I didn’t expect much at first, but it turned out to be really good. The details and stability are surprisingly strong."
    }
  ]


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
      { value: "orange", label: "Orange", swatch: "#F97316" },
    ],
    size: ["S/M", "M/L"]
  },
  reviews: 3.6,
  reviewsCount:10,
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
  
features:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?"],

techspecs:{weight:"xxxxx", material:"xxxxx", fit:"xxxxxxx"},

  seo: {
    "title": "Trekking poles",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  reviewsList:[
    {
      Id: "r1",
      name: "Alex",
      date: "2025-01-12",
      title: "Great overall experience",
      rate: 4,
      helpful: 12,
      dislike: 1,
      content:
        "Overall, the experience has been great. The features are solid, the flow is intuitive, and it works well for daily use."
    },
    {
      Id: "r2",
      name: "Mia",
      date: "2025-01-15",
      title: "Decent, but needs polish",
      rate: 3,
      helpful: 5,
      dislike: 2,
      content:
        "It does the job, but some details feel unrefined. A few parts are a bit clunky, so I'd love to see improvements."
    },
    {
      Id: "r3",
      name: "Daniel",
      date: "2025-01-18",
      title: "Disappointing experience",
      rate: 1,
      helpful: 20,
      dislike: 6,
      content:
        "This was far from what I expected. The experience was frustrating and I ran into several issues. I wouldn't recommend it."
    },
    {
      Id: "r4",
      name: "Sophie",
      date: "2025-01-22",
      title: "Excellent value for money",
      rate: 5,
      helpful: 33,
      dislike: 0,
      content:
        "I’m genuinely impressed for the price. It’s stable, smooth to use, and delivers more than I expected. Highly recommended."
    },
    {
      Id: "r5",
      name: "Leo",
      date: "2025-01-25",
      title: "Meets expectations well",
      rate: 4,
      helpful: 8,
      dislike: 1,
      content:
        "The performance matches the description. No major drawbacks so far, and it feels reliable overall."
    },
    {
      Id: "r6",
      name: "Emily",
      date: "2025-01-28",
      title: "Some highlights, some issues",
      rate: 3,
      helpful: 6,
      dislike: 3,
      content:
        "There are a few really nice design choices, but also some small problems that get in the way. It's okay, but not perfect."
    },
    {
      Id: "r7",
      name: "Jack",
      date: "2025-02-01",
      title: "Exactly what I needed",
      rate: 5,
      helpful: 18,
      dislike: 0,
      content:
        "This fits my needs perfectly. Everything feels easy and natural to use, and I haven't noticed any big issues yet."
    },
    {
      Id: "r8",
      name: "Olivia",
      date: "2025-02-03",
      title: "Feels rough around the edges",
      rate: 2,
      helpful: 9,
      dislike: 4,
      content:
        "The core features work, but the overall experience feels a bit rough. Some interactions could be designed more thoughtfully."
    },
    {
      Id: "r9",
      name: "Ryan",
      date: "2025-02-06",
      title: "Worth trying",
      rate: 4,
      helpful: 11,
      dislike: 2,
      content:
        "There’s room to improve, but it performs well overall. For most people, it’s a pretty good option."
    },
    {
      Id: "r10",
      name: "Lily",
      date: "2025-02-10",
      title: "Better than expected",
      rate: 5,
      helpful: 27,
      dislike: 1,
      content:
        "I didn’t expect much at first, but it turned out to be really good. The details and stability are surprisingly strong."
    }
  ]
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
      { value: "black", label: "Black", swatch: "#000000"},
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
  features:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque tenetur molestias amet quasi? Dolorum sapiente neque explicabo iusto, corrupti saepe? Quibusdam laboriosam amet cum culpa, impedit iste dolorem quia?"],


  techspecs:{weight:"xxxxx", material:"xxxxx", fit:"xxxxxxx"},

  seo: {
    "title": "HeadLamps",
    "description": "Daily trainer with ...",
    "ogImage": "https://.../black-1.jpg"
  },
  reviewsList:[
    {
      Id: "r1",
      name: "Alex",
      date: "2025-01-12",
      title: "Great overall experience",
      rate: 4,
      helpful: 12,
      dislike: 1,
      content:
        "Overall, the experience has been great. The features are solid, the flow is intuitive, and it works well for daily use."
    },
    {
      Id: "r2",
      name: "Mia",
      date: "2025-01-15",
      title: "Decent, but needs polish",
      rate: 3,
      helpful: 5,
      dislike: 2,
      content:
        "It does the job, but some details feel unrefined. A few parts are a bit clunky, so I'd love to see improvements."
    },
    {
      Id: "r3",
      name: "Daniel",
      date: "2025-01-18",
      title: "Disappointing experience",
      rate: 1,
      helpful: 20,
      dislike: 6,
      content:
        "This was far from what I expected. The experience was frustrating and I ran into several issues. I wouldn't recommend it."
    },
    {
      Id: "r4",
      name: "Sophie",
      date: "2025-01-22",
      title: "Excellent value for money",
      rate: 5,
      helpful: 33,
      dislike: 0,
      content:
        "I’m genuinely impressed for the price. It’s stable, smooth to use, and delivers more than I expected. Highly recommended."
    },
    {
      Id: "r5",
      name: "Leo",
      date: "2025-01-25",
      title: "Meets expectations well",
      rate: 4,
      helpful: 8,
      dislike: 1,
      content:
        "The performance matches the description. No major drawbacks so far, and it feels reliable overall."
    },
    {
      Id: "r6",
      name: "Emily",
      date: "2025-01-28",
      title: "Some highlights, some issues",
      rate: 3,
      helpful: 6,
      dislike: 3,
      content:
        "There are a few really nice design choices, but also some small problems that get in the way. It's okay, but not perfect."
    },
    {
      Id: "r7",
      name: "Jack",
      date: "2025-02-01",
      title: "Exactly what I needed",
      rate: 5,
      helpful: 18,
      dislike: 0,
      content:
        "This fits my needs perfectly. Everything feels easy and natural to use, and I haven't noticed any big issues yet."
    },
    {
      Id: "r8",
      name: "Olivia",
      date: "2025-02-03",
      title: "Feels rough around the edges",
      rate: 2,
      helpful: 9,
      dislike: 4,
      content:
        "The core features work, but the overall experience feels a bit rough. Some interactions could be designed more thoughtfully."
    },
    {
      Id: "r9",
      name: "Ryan",
      date: "2025-02-06",
      title: "Worth trying",
      rate: 4,
      helpful: 11,
      dislike: 2,
      content:
        "There’s room to improve, but it performs well overall. For most people, it’s a pretty good option."
    },
    {
      Id: "r10",
      name: "Lily",
      date: "2025-02-10",
      title: "Better than expected",
      rate: 5,
      helpful: 27,
      dislike: 1,
      content:
        "I didn’t expect much at first, but it turned out to be really good. The details and stability are surprisingly strong."
    }
  ]
}
]