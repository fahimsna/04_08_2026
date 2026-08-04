import React from "react";
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function Enquiry() {
  let saveEnquiry = (e) => {
    alert("Enquiry saved successfully!");
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-[40px] text-center pt-6 font-bold">User Enquiry</h1>
      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry form</h2>
          <form action="" onSubmit={saveEnquiry}>
            <div className="py-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput
                type="text"
                name="phone"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="message" value="Your Message" />
              <Textarea
                name="message"
                placeholder="Enter Your Message..."
                required
                rows={4}
              />
            </div>
            <div className="py-3">
              <Button type="submit" className="w-full">
                Save
              </Button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-[20px] font-bold">Enquiry List</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Serial Number</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Phone</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                  </TableCell>
                  <TableCell>White</TableCell>
                  <TableCell>Laptop PC</TableCell>
                  <TableCell>$1999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Magic Mouse 2
                  </TableCell>
                  <TableCell>Black</TableCell>
                  <TableCell>Accessories</TableCell>
                  <TableCell>$99</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
