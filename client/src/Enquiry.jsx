import React, { useState } from "react";
import axios from "axios";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { EnquiryList } from "./enquiry/EnquiryList";

export default function Enquiry() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const saveEnquiry = (e) => {
    e.preventDefault();

    // const formData = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value,
    // };

    axios
      .post("http://localhost:8020/api/website/enquiry/insert", formData)
      .then((res) => {
        console.log(res.data);
        alert("Enquiry saved successfully!");
      });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  return (
    <div>
      <h1 className="text-[40px] text-center pt-6 font-bold">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>

          <form onSubmit={saveEnquiry}>
            <div className="py-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                type="text"
                value={formData.name}
                onChange={getValue}
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="py-3">
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                type="email"
                value={formData.email}
                onChange={getValue}
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="py-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput
                type="text"
                value={formData.phone}
                onChange={getValue}
                name="phone"
                placeholder="Enter Your Phone"
                required
              />
            </div>

            <div className="py-3">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                name="message"
                onChange={getValue}
                value={formData.message}
                placeholder="Enter Your Message..."
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Save
            </Button>
          </form>
        </div>

        <EnquiryList />
      </div>
    </div>
  );
}
