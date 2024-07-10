import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import { toast } from "react-toastify";

const UserModal = ({ openModal, setOpenModal, userID }) => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    support_id: userID,
  });

  const [loading, setLoading] = useState(false);
  const authToken = sessionStorage.getItem("authToken");
  // console.log("supportID", supportID);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ["support_id"]: userID,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // console.log("formData", formData);
      const response = await axios.post(
        "https://api.liight.com.ng/v1/responsemessages",
        formData, // Data should be the third parameter
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const responseData = response.data;
      toast.success(responseData.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setOpenModal(false);
      setFormData({
        subject: "",
        message: "",
        support_id: "",
      });
      setLoading(false);
      // Optionally, you can handle success response here
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
      // Optionally, you can handle error response here
    }
  };

  return (
    <Modal
      show={openModal}
      position={"center-right"}
      onClose={() => setOpenModal(false)}
      size="md"
      popup
    >
      <Modal.Header className="text-primary1  dark:bg-primary2"></Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className="text-primary1  bg-primary2">
          <div className="space-y-6 p-6">
            <p className="text-center">Response Message</p>

            <div className="flex flex-col">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                id=""
                className="border-primary2 text-primary7 border-[1px] resize-none mt-2 px-6 py-6 outline-none"
              />
              <input type="hidden" name="" id="" value={userID} />
            </div>
            <div className="">
              <label>Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-primary2 text-primary7 border-[1px] resize-none mt-2 px-6 py-6 outline-none"
                placeholder="Leave a message..."
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-primary2 gap-5">
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}{" "}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default UserModal;
