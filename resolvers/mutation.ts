import { GraphQLError } from "graphql";
import mongoose from "mongoose";
import { Contact } from "../types.ts";
import { ContactModel, ContactModelType } from "../db/contact.ts";
import { contactModelToContact } from "../controllers/contactModeltoContact.ts";
export const Mutation = {
    addContact: async (_:unknown, args: {nombreCompleto: string, telefono: string }): 
    Promise<Contact> => {
        const contact = { nombrecompleto: args.nombreCompleto, telefono: args.telefono};
        const newContact = await ContactModel.create(contact);
        return contactModelToContact(newContact);
    },

    deleteContact: async (_:unknown, args: { id: string}): 
    Promise<boolean> => {
        const contact = await ContactModel.findByIdAndDelete(args.id);
        if(!contact){            
            throw new GraphQLError(`Not contact founded with ${args.id}`, {extensions: {code: "NOT_FOUND"},});
            return false;
        }else{
        console.log("Contact deleted");
        return true;
        }
    },

    updateContact: async (_:unknown, args: {id: string, nombreCompleto:string, telefono: string}):
    Promise<Contact> => {
        const contact = await ContactModel.findByIdAndUpdate(
            args.id, 
            { nombreCompleto: args.nombreCompleto, telefono: args.telefono },
            { new: true, runValidators: true}
        );
        if(!contact){
            throw new GraphQLError(`Not contact founded with t${args.id}`, {extensions: {code: "NOT_FOUND"},});
        
        }else{
        return contactModelToContact(contact);
        }
    },
}