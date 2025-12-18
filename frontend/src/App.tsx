import { useEffect, useState } from "react"
import type { CustomerType } from "./types/CustomerType"
import CustomerListComponent from "./components/CustomerListComponent";
import AddCustomerForm from "./components/AddCustomerForm";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import api from "./axios";

function App() {
  const [customers, setCustomers] = useState<CustomerType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get<CustomerType[]>("/api/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setError("An error occurred while fetching customers.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAddCustomer = async (newCustomer: Omit<CustomerType, "id" | "imageUrl">) => {
    try {
      const response = await api.post<CustomerType>("/api/customers", newCustomer);
      setCustomers((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error adding customer:", error);
      setError("An error occurred while adding the customer.");
    }
  };

  const handleDeleteCustomer = async (customerId: string) => {
    try {
      const response = await api.delete(`/api/customers/${customerId}`);
      if (response.status !== 204) {
        throw new Error("Failed to delete customer");
      }
      setCustomers((prev) => prev.filter((customer) => customer.id !== customerId));
    } catch (error) {
      console.error("Error deleting customer:", error);
      setError("An error occurred while deleting the customer.");
    }
  };

  const handleEditCustomer = async (updatedCustomer: CustomerType) => {
    try {
      const response = await api.put(`/api/customers/${updatedCustomer.id}`, updatedCustomer);
      if (!response.data) {
        throw new Error("Failed to edit customer");
      }
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === updatedCustomer.id ? updatedCustomer : customer
        )
      );
    } catch (error) {
      console.error("Error editing customer:", error);
      setError("An error occurred while editing the customer.");
    }
  };


  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeaderComponent />

      <main className="grow container mx-auto bg-[#26273b] md:bg-[#141526] text-white py-8 px-4">
        <AddCustomerForm onAddCustomer={handleAddCustomer} />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <CustomerListComponent customersList={customers} onDeleteCustomer={handleDeleteCustomer} onEditCustomer={handleEditCustomer} />
      </main>
      <FooterComponent />
    </div>
    </>
  )
}

export default App
