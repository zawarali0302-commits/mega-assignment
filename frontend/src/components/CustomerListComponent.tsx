import type { CustomerType } from "../types/CustomerType";
import CustomerCardComponent from "./CustomerCardComponent";

interface CustomerListComponetProps {
  customersList: CustomerType[];
  onDeleteCustomer: (customerId: string) => void;
  onEditCustomer: (updatedCustomer: CustomerType) => void;
}


const CustomerListComponent = ({ customersList, onDeleteCustomer, onEditCustomer }: CustomerListComponetProps) => {
  return (
    <div>
      <h1>TOP 5 CUSTOMERS</h1>
       <ul className="flex flex-wrap gap-4 mb-4 w-fit mx-auto">
        {customersList.filter((customer, index) => index < 5).map((customer) => (
          <li key={customer.id}>
            <CustomerCardComponent customer={customer} />
          </li>
        ))}
      </ul>

      <hr  className="mb-2"/>
      <div className="flex justify-between mb-4">
        <div>CUSTOMERS LIST</div>
        <div>CUSTOMER COUNT: {customersList.length}</div>
      </div>

      <table className="min-w-full mx-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Age</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="w-1/6 border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customersList.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.address.city}, {customer.address.country} </td>
              <td className="flex justify-end gap-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md" onClick={() => onEditCustomer(customer)}>Edit</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => onDeleteCustomer(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      
    </div>
  )
}

export default CustomerListComponent
