import ImgShift from "./imgShift";
import InfoDetails from "./infoDetails";
import ProductOptions from "./productOptions";
import ReviewsArea from "./reviewsArea";
const ProductDetailsView = () => {

    return (

        <div className="flex flex-col">
            <div className="flex">
                <ImgShift />
                <ProductOptions />
            </div>
            <div className="">
                <InfoDetails />
            </div>
            <div>
                <ReviewsArea />
            </div>
        </div>
    )
}
export default ProductDetailsView