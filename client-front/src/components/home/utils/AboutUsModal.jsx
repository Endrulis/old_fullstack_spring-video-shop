import React from "react";
import { AiFillBackward } from "react-icons/ai";

const ModalAboutUs = ({ isOpen, onClose }) => {
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
                <AiFillBackward className="inline-block mr-2 w-4 h-4 hover:marker:to-blue-500" />
              </span>

              <h2 className="text-lg text-amber-500 font-bold mb-4">
                About Us
              </h2>
              <p className="max-w-md break-all">
                We are young and eager to inspire and delight our audience
                through the power of storytelling. We believe that
                <strong>
                  everyone deserves a touch of magic in their lives
                </strong>
                , and we aim to provide that through our amazing videos. With a
                team of dedicated professionals, we create high-quality content
                that captures the imagination and sparks joy.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalAboutUs;
