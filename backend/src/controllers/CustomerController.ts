import { Request, Response } from "express";
import Customer from "../models/CustomerModel";

class CustomerController {
    async getAllCustomers(req: Request, res: Response) {
        const customers = await Customer.find();
        res.json(customers);
    }


    async createCustomer(req: Request, res: Response) {
        const { name, imageUrl, age, address: { city, country } } = req.body;
        const newCustomer = new Customer({ name, imageUrl, age, address: { city, country } });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    }

    async getCustomerById(req: Request, res: Response) {
        const customerId = req.params.id;
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.json(customer);
    }

    async updateCustomer(req: Request, res: Response) {
        const customerId = req.params.id;
        const { name, imageUrl, age, address: { city, country } } = req.body;

        const customer = await Customer.findByIdAndUpdate(customerId, { name, imageUrl, age, address: { city, country } }, { new: true });
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.json(customer);
    }

    async deleteCustomer(req: Request, res: Response) {
        const customerId = req.params.id;
        await Customer.findByIdAndDelete(customerId);
        res.status(204).send();
    }
}
export default CustomerController;