import { Rating } from "@smastrom/react-rating";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const Mytoysdetails = ({ toys, deletetoy, updatetoy, recentupdate, modal }) => {
  return (
    <>
      <tr className={toys._id == recentupdate && "border-l-2 border-main"}>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask w-28 h-28 shadow-md p-2 rounded-md">
                <img src={toys.thumbnail} />
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">{toys.name}</div>
              <div className="text-sm opacity-50">
                Seller: {toys.sellername}
              </div>
              <div className="text-sm opacity-50">
                Seller Email: {toys.selleremail}
              </div>
            </div>
          </div>
        </td>
        <td>
          <span className="flex gap-2 items-center">
            <span className="font-bold">Rating :</span>
            <Rating
              style={{ maxWidth: 80 }}
              value={toys.rating}
              readOnly={true}
            />
            <span>{toys.rating}</span>
          </span>
          <span>
            <span className="font-bold">Catagory: </span>
            {toys.catagory}
          </span>
          <br />
          <span>
            <span className="font-bold">Quantity: </span>
            {toys.quantity}
          </span>
          <br />
          <span>
            <span className="font-bold">Price: </span>${toys.price}
          </span>
        </td>

        <th>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => deletetoy(toys._id)}
              className="px-5 py-2 mr-3 bg-[red] rounded-md text-white shadow-md"
              title="Delete"
            >
              <BiTrash />
            </button>

            <label
              onClick={() => {
                updatetoy(toys._id);
                modal();
              }}
              htmlFor="my-modal-5"
              className="px-5 py-2 bg-button rounded-md text-white shadow-md"
            >
              <BiEdit />
            </label>
          </div>
        </th>
      </tr>
    </>
  );
};

export default Mytoysdetails;
