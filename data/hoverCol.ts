import { RootCategory } from "@/interface/menuData";
export const menuData:  RootCategory[]= [
    {
      "Men's": [
        { Tops: ["Tees & Tanks", "Shirts", "Hoodies"] },
        { Jackets: ["Shell & Rain", "Insulation", "Fleece"] },
        { Gloves: ["Snow Gloves", "Climbing Gloves", "Everyday Gloves"] },
        { Bottoms: ["Shorts", "Pants", "Shell & Rain"] },
        { Footwear: ["Approach Shoes", "Climbing Shoes", "Lifestyle Shoes"] },
        { "Hats & Caps": [] } 
      ]
    },
    {
      "Women's": [
        { Tops: ["Tees & Tanks", "Shirts", "Hoodies"] },
        { Jackets: ["Shell & Rain", "Insulation", "Fleece"] },
        { Gloves: ["Snow Gloves", "Climbing Gloves", "Everyday Gloves"] },
        { Bottoms: ["Shorts", "Pants", "Shell & Rain", "Tights & Leggings"] },
        { Footwear: ["Climbing Shoes", "Approach Shoes", "Lifestyle Shoes"] },
        { "Hats & Caps": [] } 
      ]
    },
    {
      "Equipment": [
        {
          Climb: [
            "Belay & Rappel",
            "Big Wall",
            "Bouldering Pads",
            "Carabiners",
            "Chalks & Chalk Bags",
            "Climbing Gloves",
            "Climbing Packs & Bags",
            "Climbing Shoes",
            "Harnesses",
            "Helmets",
            "Ice & Alpine",
            "Quickdraws & Runners",
            "Rock Protection",
            "Ropes"
          ]
        },
        { Lighting: ["Headlamps", "Lanterns", "Batteries"] },
        {
          Packs: [
            "Climbing Packs & Bags",
            "Hiking Packs",
            "Running Packs",
            "Ski Packs"
          ]
        },
        { "Tents & Shelters": [] }, // 标题有，但截图没看到子项
        {
          Poles: [
            "Running Poles",
            "Trekking Poles",
            "Ski Poles",
            "Pole Accessories"
          ]
        },
        {
          Ski: [
            "Ski Poles",
            "Snow Gloves",
            "Snow Safety",
            "Ski Packs",
            "Climbing Skins",
            "Ski Accessories",
          ]
        }
      ]
    }
  ];