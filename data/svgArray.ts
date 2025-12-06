import BlackDiamond from "@/data/svg/blackdiomand";
import Arcteryx from "@/data/svg/arcteryx";
import Salomon from "@/data/svg/salomon";
import Columnbia from "@/data/svg/columnbia";
import Patagonia from "@/data/svg/patagonia";
import Norrona from "@/data/svg/norrona";
import {SiNike, SiAdidas, SiNewbalance, SiThenorthface, } from "react-icons/si";

import { BrandItem } from "@/interface/menuData";

 export const BrandList:BrandItem[]=[
    {id:"nike", Icon:SiNike, className:"w-20 h-20"},
    {id:"adidas", Icon:SiAdidas, className:"w-20 h-20"},
    {id:"newBalance", Icon:SiNewbalance, className:"w-20 h-20"},
    {id:"theNorthFace", Icon:SiThenorthface, className:"w-20 h-20"},
    {id:"blackDiamond", Icon:BlackDiamond, className:"w-70 h-20"},
    {id:"arcteryx", Icon:Arcteryx, className:"w-40 h-20"},
    {id:"salomon", Icon:Salomon, className:"w-50 h-20"},
    {id:"columnbia", Icon:Columnbia, className:"w-50 h-20"},
    {id:"patagonia", Icon:Patagonia, className:"w-50 h-20"},
    {id:"norrona", Icon:Norrona, className:"w-100 h-20"},

]