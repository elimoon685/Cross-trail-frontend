import { apiShop} from "@/lib/apiClient";

export const ShopApi = {

    getProducts:() =>
        apiShop.get<any>("/"),

    getTargetedProducts:() =>
        apiShop.get<any>("/"),

}
