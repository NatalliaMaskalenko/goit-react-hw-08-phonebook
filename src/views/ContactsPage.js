import Form from '../components/Form/Form';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter';


export default function ContactsPage() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactsList/>
      </div>
   );};