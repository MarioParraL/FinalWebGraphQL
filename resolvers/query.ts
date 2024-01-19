import { GraphQLError } from "graphql";
import { ContactModel } from "../db/contact.ts";
import { Contact } from "../types.ts"
import { contactModelToContact } from "../controllers/contactModeltoContact.ts";

export const Query = {
    getContacts: async (): Promise<Contact[]> => {
        const contacts = await ContactModel.find().exec();
        return contacts.map((Contact)=> contactModelToContact(Contact));
    },

    getContact: async (_: unknown, args: {id: string }): Promise<Contact> =>{
        const contact = await ContactModel.findById(args.id);
        if(!contact) {
            throw new GraphQLError(`Not contact founded with ${args.id}`),
            {extension: {code: "NOT_FOUND"},
        };
        }
        return contactModelToContact(contact);
    }
}