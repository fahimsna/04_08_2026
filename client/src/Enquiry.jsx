import React from "react";
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

export default function Enquiry() {
  return (
    <div>
      <h1 className="text-[40px] text-center pt-6 font-bold">User Enquiry</h1>
      <div className="grid grid-cols-2-[30%_auto]">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry form</h2>
          <form action="">
            <div className="py-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput type="text" name="name" placeholder="Enter Your Name" required />
            </div>
            <div className="py-3">
              <Label htmlFor="email">Your Email</Label>
              <TextInput type="email" name="email" placeholder="Enter Your Email" required />
            </div>
            <div className="py-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput type="text" name="phone" placeholder="Enter Your Phone" required />
            </div>
            <div className="py-3">
              <Label htmlFor="message" value="Your Message" />
              <Textarea name="message" placeholder="Enter Your Message..." required rows={4} />
            </div>
            <div className="py-3">
              <Button type="submit" className="w-full">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
