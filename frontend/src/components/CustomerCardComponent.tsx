import type { CustomerType } from "../types/CustomerType";

interface CustomerCardComponentProps {
  customer: CustomerType;
}
const CustomerCardComponent = ({ customer }: CustomerCardComponentProps) => {
  const { imageUrl, name, age, address } = customer;
  return (
    <div className="flex gap-4 justify-between border p-4 rounded-md w-auto items-center">
      <img className="rounded-full" src={imageUrl} alt="" width={80} height={80} />
      <div className="flex gap-4 justify-start flex-1">
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{address.city}, {address.country}</h1>
      </div>
    </div>
  )
}

export default CustomerCardComponent
