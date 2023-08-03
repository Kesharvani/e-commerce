import "./UserAddress.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";
import { useProduct } from "../../Contexts/ProductContext";
const UserAddress = () => {
  const { setAddAddress, addAddress } = useProduct();
  const [isaddAddress, setIsAddAddress] = useState(false);

  const [address, setAddress] = useState({});

  const handleInputField = (e, key) => {
    setAddress((prev) => ({ ...prev, [key]: e.target.value, id: uuid() }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (addAddress.find((item) => item.id !== address.id)) {
      setAddAddress((prev) => [...prev, address]);
    } else {
      toast.error("Error occured due to duplicate Values!!");
    }
    setAddress((prev) => ({
      ...prev,
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    }));
  };

  const addAddressHandler = () => {
    setIsAddAddress(!isaddAddress);
    setAddress((prev) => ({
      ...prev,
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    }));
  };

  const removeHandler = (id) => {
    const findAddressObject = addAddress.find((item) => item.id === id);
    setAddAddress((prev) => prev.filter((item) => item !== findAddressObject));
  };

  const editHandler = (id) => {
    setIsAddAddress(!isaddAddress);
    const findEditableAddress = addAddress.find((item) => item.id === id);
    setAddress((prev) => ({
      ...prev,
      ...findEditableAddress,
    }));
  };
  return (
    <div className="address-container">
      {addAddress.map((item) => {
        return (
          <div key={item.id}>
            <h3>Name:{item.name}</h3>
            <p>Street:{item?.street}</p>
            <p>City:{item.city}</p>
            <p>State:{item?.state}</p>
            <p>Country:{item.country}</p>
            <p>Zipcode:{item.zipCode}</p>
            <p>Mobile:{item?.mobile}</p>
            <button
              style={{
                padding: "1rem",
                color: "white",
                marginRight: "1rem",
                marginBottom: "1rem",
              }}
              onClick={() => editHandler(item.id)}
            >
              Edit
            </button>
            <button
              style={{ padding: "1rem", color: "white", marginBottom: "1rem" }}
              onClick={() => removeHandler(item?.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        style={{ padding: "1rem", color: "white", marginBottom: "1rem" }}
        onClick={addAddressHandler}
      >
        Add Address
      </button>
      {isaddAddress && (
        <form onSubmit={submit}>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={address.name}
            onChange={(e) => handleInputField(e, "name")}
            required={true}
          />
          <input
            type="text"
            value={address.street}
            placeholder="Enter Your Street"
            onChange={(e) => handleInputField(e, "street")}
          />
          <input
            type="text"
            placeholder="Enter Your City"
            value={address.city}
            onChange={(e) => handleInputField(e, "city")}
            required
          />
          <input
            type="text"
            value={address.state}
            placeholder="Enter Your State"
            onChange={(e) => handleInputField(e, "state")}
            required
          />
          <input
            type="text"
            value={address.country}
            placeholder="Enter Your Country"
            onChange={(e) => handleInputField(e, "country")}
            required
          />
          <input
            type="text"
            value={address.zipCode}
            placeholder="Enter Your Zipcode"
            onChange={(e) => handleInputField(e, "zipCode")}
            required
          />
          <input
            type="text"
            value={address.mobile}
            placeholder="Enter Your Mobile Number"
            onChange={(e) => handleInputField(e, "mobile")}
            required
          />
          <button
            style={{ padding: "1rem", color: "white", margin: "1rem 0rem" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};
export default UserAddress;
