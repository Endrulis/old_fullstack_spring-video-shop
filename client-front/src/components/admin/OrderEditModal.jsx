import React, { useState } from "react";
import { Modal, Button, Input } from "semantic-ui-react";
import { AuthProvider } from "../auth/AuthContext";
import { config } from "../../Constants.js";
import axios from "axios";
import { orderApi } from "../services/OrderApi";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function OrderEditModal({ order, open, setOpen, handleGetOrders }) {
  const [updatedOrder, setUpdatedOrder] = useState(order);
  const [description, setDescription] = useState(order.description);
  const [orderId] = useState(order.id);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedOrder({ ...updatedOrder, [name]: value });
    setDescription(value);
  };

  const handleUpdateClick = async (event) => {
    event.preventDefault();
    const authProv = new AuthProvider();
    await axios
      .put(
        `${config.url.API_BASE_URL}/api/v1/orders/${orderId}`,
        {
          description,
        },
        {
          headers: { Authorization: orderApi.bearerAuth(authProv.getUser()) },
        }
      )
      .then((response) => {
        handleGetOrders();
      })
      .catch((error) => {
        console.log(error);
      });

    setOpen(false);
  };

  const handleCancelClick = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleCancelClick}>
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
        <div className="relative mt-16 p-4 h-3/5 w-2/5 bg-white rounded-lg">
          <Modal.Content className="flex justify-center items-center">
            <div className="flex flex-col ">
              <div className="flex jusitify-center mb-4">
                <NavLink
                  to="/admin"
                  onClick={handleCancelClick}
                  className="text-blue-800 hover:text-blue-500 jusity-start pr-0"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Back
                </NavLink>
              </div>
              <form onSubmit={handleUpdateClick} className="w-full">
                <h2 className="text-md font-bold">Order ID</h2>
                <p className="mb-4">{orderId}</p>
                <Input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={handleInputChange}
                />

                <Button
                  type="submit"
                  className="w-full bg-blue-800 text-white p-2 rounded-lg px-4 mb-0"
                >
                  Update
                </Button>
              </form>
            </div>
          </Modal.Content>
        </div>
      </div>
    </Modal>
  );
}

export default OrderEditModal;
