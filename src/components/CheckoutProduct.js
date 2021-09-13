import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket} from "../slices/basketSlice";

function CheckoutProduct({ 
    id,
    title,
    price,
    description,
    category,
    rating,
    image,
    hasPrime,
}) {

    const dispatch = useDispatch();

    const addItemsToBasket = () => {
      const product = {
        id,
        title,
        price,
        description,
        category,
        rating,
        image,
        hasPrime,
      };
      //push item to redux
        dispatch(addToBasket(product));
    }

    const removeItemsFromBasket = () => {
        //remove items from redux
        dispatch(removeFromBasket({id}));
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/*middle */}
            <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
               {Array(rating).fill().map((_,i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
               ))}
            </div>


            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={price} currency="GBP" />

            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img
                        loading="lazy"
                        className="w-12"
                        src="https://links.papareact.com/fdw" alt="" 
                    />
                 <p className="text-xs text-gray-500">Free Next-day Delivery</p>   
                </div>
            )}
            </div>

            {/* Right add/remove button*/}
            <div className="flex flex-col space-y-2 my-auto justify-self-auto">
            <button className="button " onClick={addItemsToBasket}>Add To Basket</button>
            <button className="button " onClick={removeItemsFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
