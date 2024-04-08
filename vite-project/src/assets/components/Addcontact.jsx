import React from 'react'

const Addcontact = ({addContact}) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = () => {
      const newContact = { id: Math.random().toString(), name, address, tel, email }; // Fixed missing fields
      addContact(newContact);
      setName('');
      setAddress('');
      setTel('');
      setEmail('');
    };
    
    return (
        <form>
            <div>
                <img src={addimage}></img>
            </div>
            <div>
                <input type='text' onChange={(e)=> setName (e.target.value)} placeholder='name'/>
            </div>
            <div>
                <input type='text' onChange={(e)=> setAddress(e.target.value)} placeholder='address'/>
            </div>
            <div>
                <input type='text' onChange={(e)=> setTel(e.target.value)}  placeholder='tel'/>
            </div>
            <div>
                <input type='text' onChange={(e)=> setEmail(e.target.value)}  placeholder='email'/>
            </div>
            <div>
                <button onClick={handleSubmit} name='add'/>
            </div>
        </form>
    );
};

export default Addcontact