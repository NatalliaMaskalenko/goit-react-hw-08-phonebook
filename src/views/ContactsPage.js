import Form from '../components/Form/Form';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import s from './views.module.css'

export default function ContactsPage() {
    return (
        <div className={s.container}>
            <h1>Phonebook</h1>
            <Form />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}
