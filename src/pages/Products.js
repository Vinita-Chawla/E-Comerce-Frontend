import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "../store/slices/itemSlice";
import { useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function Products(props) {
  const dispatch = useDispatch();
  const [items, setItems] = useState();
  const state = useSelector((state) => state);
  const searchTerm = props.searchTerm;

  const navigate = useNavigate();

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const fetchres = await dispatch(fetchItems());
    if (fetchItems.fulfilled.match(fetchres)) {
      setItems((prev) => {
        return fetchres.payload;
      });
    } else if (fetchItems.rejected.match(fetchres)) {
      return "Error in fetching data";
    }
  };

  const itemAddedToCart = (item) => {
    dispatch(addToCart(item));
    // toast.success(`Item added to cart!`)
  };

  const filteredItems = items?.filter((item) => {
    if (searchTerm === "" || searchTerm === undefined) {
      return item;
    } 
    else if (item?.title?.toLowerCase().includes(searchTerm?.toLowerCase()))
      return item;
  });

  return (
    <div className="mt-[8rem] w-[90%] mx-auto flex items-center flex-col">
      <h1 className="text-center my-[3rem] text-[#000] font-bold text-[1.8rem]">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
        {state.items.isLoading ? (
          <h1>Loading....</h1>
        ) : (
          filteredItems?.map((item, index) => {
            return (
              <div
                id={item.id}
                key={index}
                className="flex items-center flex-col gap-[0.6rem] w-[250px] bg-[#D0B8A8] rounded"
              >
                <img
                  className="w-[230px] h-[250px] mt-[0.7rem] rounded cursor-pointer"
                  src={item.image}
                  alt=""
                  onClick = {()=> navigate(`/product?id=${item.id}`)}
                />
                <div className="px-[0.7rem] text-white mb-[0.7rem]">
                  <h1 className="text-[0.9rem] w-[220px]">{item.title}</h1>
                  <p>${item.price}</p>
                  <p>Category: {item.category}</p>
                  <div className="flex gap-[0.3rem] justify-end mt-[0.5rem]">
                    <i
                      className="bx bx-shopping-bag cursor-pointer text-[#ff5252] bg-white px-[6px] py-[6px] rounded-[50%] text-[1.5rem]"
                      onClick={() => itemAddedToCart(item)}
                    ></i>
                    {/* <i className="fa fa-heart cursor-pointer text-[#ff5252] bg-white px-[6px] py-[6px] rounded-[50%] text-[1.2rem]"></i> */}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Products;
