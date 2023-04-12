import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

function OrderForm({ orderDescription, handleInputChange, handleCreateOrder }) {
  const createBtnDisabled = orderDescription.trim() === "";
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/user/orders");
  };
  return (
    <div className="lg:mt-2 lg:py-6 text-gray-200">
      <AiOutlinePlusCircle className="inline-block lg:mr-2" />
      <h1 className="md:text-3xl sm:text-xl font-bold lg:mb-6">
        Create Your Order
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <label
            htmlFor="orderDescription"
            className="block text-gray-200 lg:mb-4 md:text-md sm:text-md"
          >
            Share your film ideas and expectations with us. Let us know the
            occasion, desired effects, mood, and expected duration for your
            shoot
          </label>
          <textarea
            placeholder="Type here"
            className=" text-gray-200 border-blue-500 bg-gray-700 appearance-none text-sm border rounded w-full lg:py-2 lg:px-3 leading-tight focus:outline-none focus:shadow-outline"
            value={orderDescription}
            maxLength={2000}
            onChange={(e) =>
              handleInputChange(e, {
                name: "orderDescription",
                value: e.target.value,
              })
            }
            rows={5}
          />
        </Form.Group>
        <div className="flex justify-end lg:mt-8">
          <Button
            icon
            labelPosition="right"
            disabled={createBtnDisabled}
            onClick={handleCreateOrder}
            className="lg:w-1/3 md:w-1/4 border-blue-500 bg-transparent text-gray-200 lg:p-2 md:p-2 hover:bg-blue-500 rounded-lg lg:px-4 hover:text-gray-200"
          >
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default OrderForm;
