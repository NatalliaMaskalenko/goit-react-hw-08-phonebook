
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/Phonebook/phonebook-actions';
import s from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
    return (
        <label className={s.filter__label}>
            <p className = {s.text}>Find contacts by name:</p>
            <input
                className={s.filter__input}
                type="text"
                name="filter"
                value={filter}
                onChange={e => changeFilter(e.currentTarget.value)}
            />
        </label>
    );
}

const mapStateToProps = ({ contacts: { filter } }) => ({ filter: filter });

const mapDispatchToProps = dispatch => ({
    changeFilter: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);





