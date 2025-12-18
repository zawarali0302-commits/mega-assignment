import { useForm } from "react-hook-form";
import type { CustomerType } from "../types/CustomerType";
interface AddCustomerFormProps {
    onAddCustomer: (newCustomer: Omit<CustomerType, "id" | "imageUrl">) => void;
}

const AddCustomerForm = ({ onAddCustomer }: AddCustomerFormProps) => {
    const {register, handleSubmit} = useForm<Omit<CustomerType, "id" | "imageUrl">>();
  return (
    <div >
      <h2 className="flex items-center justify-center text-2xl font-bold underline mb-2">Add New Customer</h2>
      <form className="flex flex-col max-w-md mx-auto border rounded-2xl space-y-4 p-4" onSubmit={handleSubmit(onAddCustomer)}>
        <label htmlFor="name">Name:</label>
        <input id="name" className="border border-gray-300 p-2 rounded-md" type="text" placeholder="Name" {...register("name", {required: true})} />
        <label htmlFor="age">Age:</label>
        <input id="age" className="border border-gray-300 p-2 rounded-md" type="number"  placeholder="e.g., 25" min={0} max={100} {...register("age", {required: true})} />
        <label htmlFor="city">City:</label>
        <input id="city" className="border border-gray-300 p-2 rounded-md" type="text" placeholder="City" {...register("address.city", {required: true})} />
        <label htmlFor="country">Country:</label>
        <input id="country" className="border border-gray-300 p-2 rounded-md" type="text" placeholder="Country" {...register("address.country", {required: true})} />
        <div className="flex justify-end">
        <button className="w-fit bg-blue-500 hover:bg-blue-600 text-white hover:cursor-pointer px-4 py-2 rounded-md" type="submit">Add Customer</button>
        </div>
      </form>
    </div>
  )
}

export default AddCustomerForm
