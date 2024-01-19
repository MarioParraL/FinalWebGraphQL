import { Contact } from "../types.ts";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    nombreCompleto: {type: String, required: true },
    telefono: {type: String, required: true},
    pais: {type: String, required: true},
    horaActual: {type: String, required: true},
},
{ timestamps: true},
);


export type ContactModelType = mongoose.Document &
Omit<Contact, "id">;

export const ContactModel = mongoose.model<ContactModelType>(
    "Contact",
    contactSchema
);