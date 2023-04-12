import React from "react";
import { AiFillBackward } from "react-icons/ai";

const ModalAboutMoon = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed z-10 inset-0 bg-opacity-70 backdrop-filter backdrop-blur-lg">
          <div className="flex items-center justify-center min-h-screen mx-4 md:mx-0">
            <div className="fixed inset-0" aria-hidden="true" onClick={onClose}>
              <div className="relative inset-0"></div>
            </div>
            <div className="max-w-2xl mx-auto bg-gray-700 text-gray-200 rounded-lg p-8 inline-block cursor-pointer">
              <span className="py-3 hover:text-blue-200 hover:scale-95 transition">
                <AiFillBackward className="inline-block mr-2 w-4 h-4 hover:text-blue-500" />
              </span>
              <h2 className="text-lg text-amber-500 font-bold mb-4">
                About Moon
              </h2>
              <p className="max-w-md break-all">
                At Moon, we believe that everyone is looking for inspiration.
                That's why we're dedicated to the art of storytelling and we
                pride ourselves on delivering videos of the highest quality.
                Just like the moon,{" "}
                <strong>we aim to bring a sense of wonder</strong> and awe to
                our audience, and we do so with a touch of magic that sets us
                apart. <br></br>
                Join us on this journey and let the moonlight guide you!
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalAboutMoon;
