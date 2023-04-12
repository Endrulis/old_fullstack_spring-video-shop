import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { orderApi } from "../services/OrderApi";
import { handleLogError } from "../utils/Helpers";
import Navbar from "./Navbar";
import OrderForm from "./OrderForm";
import { AiOutlineVideoCamera } from "react-icons/ai";
import MoonInHands2 from "../../assets/MoonInHands2.mp4";

const UserPage = () => {
  const Auth = useContext(AuthContext);

  const [userMe, setUserMe] = useState(null);
  const [isUser, setIsUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [orderDescription, setOrderDescription] = useState("");

  const handleInputChange = (e, { name, value }) => {
    setOrderDescription(value);
  };

  const handleGetUserMe = () => {
    const user = Auth.getUser();

    setIsLoading(true);
    orderApi
      .getUserMe(user)
      .then((response) => {
        setUserMe(response.data);
      })
      .catch((error) => {
        handleLogError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCreateOrder = async () => {
    const user = Auth.getUser();

    let trimmedDescription = orderDescription.trim();
    if (!trimmedDescription) {
      return;
    }

    const order = { description: trimmedDescription };
    await orderApi
      .createOrder(user, order)
      .then(() => {
        handleGetUserMe();
        setOrderDescription("");
      })
      .catch((error) => {
        handleLogError(error);
      });
  };

  const isUserValid = () => {
    const user = Auth.getUser();
    return user.data.role[0] === "USER";
  };

  useEffect(() => {
    setIsUser(isUserValid());
    // eslint-disable-next-line
  }, []);

  if (!isUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gray-700 h-screen w-screen ">
      <div className="flex h-auto w-screen bg-gray-700">
        <div className="bg-gray-700 fixed left-0 h-full w-auto flex flex-col items-center">
          <Navbar />
        </div>

        <div className="py-6 lg:px-6 lg:ml-20 md:ml-10 sm:ml-5 flex lg:flex-nowrap md:flex-wrap sm:flex-wrap justify-center text-gray-200">
          <div className="lg:w-1/2 md:w-2/3 sm:w-2/3 lg:p-4">
            <OrderForm
              orders={userMe && userMe.orders}
              isLoading={isLoading}
              orderDescription={orderDescription}
              handleCreateOrder={handleCreateOrder}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="lg:ml-15 md:ml-1 sm:ml-0 lg:w-1/2 md:w-2/3 sm:w-2/3 lg:p-4 lg:mt-8">
            <AiOutlineVideoCamera className="inline-block lg:mr-2" />
            <h2 className="md:text-3xl sm:text-xl font-bold lg:mb-6">
              Capture the magic
            </h2>
            <p className="block text-gray-200 lg:mb-4 md:text-md sm:text-md">
              Join us on this journey and experience the wonder of Moon. We love
              creating videos for various magic informal or formal occasions
            </p>
            <video
              src={MoonInHands2}
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover -z-50"
            />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center py-1 mb-0"
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <p className="text-gray-100 text-xs b-0">
          © 2023 Moon Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default UserPage;
