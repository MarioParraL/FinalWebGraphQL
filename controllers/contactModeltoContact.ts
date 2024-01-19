import { ContactModelType } from "../db/contact.ts";
import { Contact } from "../types.ts";

export const contactModelToContact = ( ContactModel: ContactModelType ): Contact => {
    return { id: ContactModel._id.toString(), nombreCompleto: ContactModel.nombreCompleto, telefono: ContactModel.telefono, pais: ContactModel.pais, horaActual: ContactModel.horaActual }
};