// import { createSelector } from "reselect";

// export const getContacts = state => state.contacts.item;
// export const getFilter = state => state.contacts.changeFilter;


// export const getAllContacts = createSelector(
//     [getContacts, getFilter],
//     (contactsArray, filterValue) => {
//         let normalizeFilter = filterValue.toLowerCase();
//         return contactsArray.filter((contact) => {
//             return contact.name.toLowerCase().includes(normalizeFilter)
//         });
//     }
// );