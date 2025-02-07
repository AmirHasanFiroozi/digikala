import { memo, useCallback, useEffect, useState } from "react";
import { Minus, Plus, Trash } from "../SVGs/Svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeElementFromCart,
} from "../../features/Cart/addToCartSlice";

/* eslint-disable react/prop-types */
function AddToCartButton({ data, color }) {
  const { cart } = useSelector((store) => store.cartReducer);
  const [NumberOfElement, setNumberOfElement] = useState(0);
  const dispatch = useDispatch();

  function updateAddToCart(number) {
    dispatch(
      addToCart({
        id: data.id,
        images: { main: data.images.main },
        title_fa: data.title_fa,
        default_variant: {
          price: data.default_variant.price,
        },
        number: number,
        color: color,
      }),
    );
  }

  function deleteFromCart(id) {
    dispatch(removeElementFromCart(id));
  }

  function addToCartHandler() {
    setNumberOfElement(() => {
      const newNumber = 1;
      updateAddToCart(newNumber);
      return newNumber;
    });
  }

  function deleteElementHandler() {
    setNumberOfElement(() => {
      const newNumber = 0;
      deleteFromCart(data.id);
      return newNumber;
    });
  }

  function plusElementHandler() {
    setNumberOfElement((number) => {
      const newNumber = number + 1;
      updateAddToCart(newNumber);
      return newNumber;
    });
  }

  function minusElementHandler() {
    setNumberOfElement((number) => {
      const newNumber = number - 1;
      updateAddToCart(newNumber);
      return newNumber;
    });
  }

  const checkOnCart = useCallback(
    function () {
      if (data?.id)
        return cart.find((cartElement) => cartElement.id === data.id);
    },
    [cart, data.id],
  );

  useEffect(
    function () {
      const Element = checkOnCart();
      if (Element) {
        setNumberOfElement(Element.number);
      } else {
        setNumberOfElement(0);
      }
    },
    [checkOnCart],
  );

  return (
    <>
      <button
        onClick={addToCartHandler}
        className={`${NumberOfElement === 0 ? "mt-4 flex w-full items-center justify-center rounded-xl bg-[var(--color-red)] py-3 font-bold text-white max-md:w-[50%]" : "hidden"}`}
      >
        افزودن به سبد خرید
      </button>
      <div
        className={`${NumberOfElement === 0 ? "hidden" : "mt-4 flex w-full items-center justify-around rounded-xl border-2 border-[var(--color-red)] bg-white py-3 font-bold text-[var(--text-color)] max-md:w-[50%]"}`}
      >
        {NumberOfElement === 1 ? (
          <>
            <div className="flex w-full cursor-default items-center justify-around">
              <button
                onClick={plusElementHandler}
                className="cursor-pointer hover:text-[var(--color-red)]"
              >
                <Plus />
              </button>
              <span>{NumberOfElement}</span>
              <button
                onClick={deleteElementHandler}
                className="cursor-pointer hover:text-[var(--color-red)]"
              >
                <Trash />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full items-center justify-around">
              <button
                onClick={plusElementHandler}
                className="cursor-pointer hover:text-[var(--color-red)]"
              >
                <Plus />
              </button>
              <span>{NumberOfElement}</span>
              <button
                onClick={minusElementHandler}
                className="cursor-pointer hover:text-[var(--color-red)]"
              >
                <Minus />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default memo(AddToCartButton);
