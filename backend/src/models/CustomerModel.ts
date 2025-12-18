import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: false },
  age: { type: Number, required: true },
  address: {
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
});

customerSchema.set("toJSON", {
  transform: (_: unknown, ret: any) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
