import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
    },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
    color: 'rgba(194, 194, 194, 0.658)',
    
  },
  input: {
    backgroundColor: 'rgba(194, 194, 194, 0.658)',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    }
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                alert('check input name please ');
        }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({
      email,
      password
    }));
    setEmail('');
    setPassword('');
        
  };
    
    return (
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          E-mail
          <input style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}          />
        </label>

         <label style={styles.label}>
         Password
          <input style={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}          />
        </label>
        <button type="submit">Sing In</button>

      </form>
   );};