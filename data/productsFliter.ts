import { FacetOption } from "@/interface/fliterResponse";
import { MocData } from "@/interface/fliterResponse";
export const Activity : FacetOption[]=[];
export const ProductType : FacetOption[]=[];
export const Color : FacetOption[]=[];
export const Gender : FacetOption[]=[];
export const Discount : FacetOption[]=[];
export const Reviews : FacetOption[]=[];

export const fliterScope:MocData={
"ProductType":[
    { "value": 1, "name": "Jackets", "count": 120 },
    { "value": 2, "name": "Pants",   "count": 80  },
    { "value": 3, "name": "Tops", "count": 130 },
    { "value": 4, "name": "Gloves",   "count": 90  },
    { "value": 5, "name": "Accessories",   "count": 95 }
],
"Activities":[
    { "value": 1, "name": "Climbing", "count": 300 },
    { "value": 2, "name": "Hiking",   "count": 200  },
    { "value": 3, "name": "Running", "count": 180 },
    { "value": 4, "name": "Skiing & Snowboarding",   "count": 250  }
],
"Size":[
    { "value": 1, "name": "L", "count": 300 },
    { "value": 2, "name": "M",   "count": 200  },
    { "value": 3, "name": "One size", "count": 180 },
    { "value": 4, "name": "S",   "count": 250  },
    { "value": 5, "name": "XL", "count": 300 },
    { "value": 6, "name": "XS",   "count": 200  },
    { "value": 7, "name": "XXL", "count": 180 },
    { "value": 8, "name": "XXS",   "count": 250  }

],
"Gender":[
    { "value": 1, "name": "Men's", "count": 120 },
    { "value": 2, "name": "Women's",   "count": 80  },
    { "value": 3, "name": "Unisex", "count": 130 },
],

"Discount Tier":[
    { "value": 1, "name": "70%", "count": 300 },
    { "value": 2, "name": "60%",   "count": 200  },
    { "value": 3, "name": "50%", "count": 180 },
    { "value": 4, "name": "40%",   "count": 250  },
    { "value": 5, "name": "30%", "count": 300 },
    { "value": 6, "name": "25%",   "count": 200  },

],
"Price":[
    { "value": 1, "name": "14", "count": 1},
    { "value": 2, "name": "720",   "count": 1},

],
"Color":[
    { "value": 1, "name": "#FF3B30", "count":0 },
    { "value": 2, "name": "#345975",   "count": 0  },
    { "value": 3, "name": "#5D9787", "count": 0 },
    { "value": 4, "name": "#FFFFFF",   "count": 0  },
    { "value": 5, "name": "8B4513", "count": 0 },
    { "value": 6, "name": "#000000",   "count": 0  },
    { "value": 7, "name": "#8E44AD",   "count": 0  }
],

"Reviews":[
    { "value": 1, "name": "5", "count": 300 },
    { "value": 2, "name": "4",   "count": 200  },
    { "value": 3, "name": "3", "count": 180 },
    { "value": 4, "name": "2",   "count": 250  },
    { "value": 5, "name": "1", "count": 300 },

],

}