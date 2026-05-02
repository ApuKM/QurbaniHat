"use client";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
} from "@heroui/react";

const BookingForm = () => {
  return (
      <Card className="w-full max-w-md rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-950">
            Booking Form
          </h1>
          <p className="text-sm text-slate-800 mt-1">
            Enter your details to proceed
          </p>
        </div>

        <Form className="flex flex-col gap-4">
          <TextField isRequired name="name">
            <Label className="text-sm font-medium text-slate-900">
              Full Name
            </Label>
            <Input placeholder="John Doe" className="rounded-xl" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label className="text-sm font-medium text-slate-900">
              Email
            </Label>
            <Input placeholder="john@example.com" className="rounded-xl" />
            <FieldError />
          </TextField>
          <TextField isRequired name="phone" type="tel">
            <Label className="text-sm font-medium text-slate-900">
              Phone Number
            </Label>
            <Input placeholder="01XXXXXXXXX" className="rounded-xl" />
            <FieldError />
          </TextField>
          <TextField isRequired name="address">
            <Label className="text-sm font-medium text-slate-900">
              Address
            </Label>
            <TextArea
              placeholder="Enter your full address"
              className="rounded-xl"
            />
            <FieldError />
          </TextField>
          <Button
            type="submit"
            className="w-full mt-2 rounded-xl bg-slate-900 text-white font-medium shadow-md hover:bg-slate-800 transition"
          >
            Book Now
          </Button>
        </Form>
      </Card>
  );
};

export default BookingForm;