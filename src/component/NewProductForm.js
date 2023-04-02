import React, {useState} from 'react';

function NewProductForm(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState();

    const submitProduct = () => {
        if (name !== '' && price !== '') {
            props.addProduct(name, price);
            setName('');
            setPrice('');
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        onChange={e => setName(e.target.value)}
                        value={name}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Price</label>
                    <input 
                        className='form-control' 
                        required
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                    ></input>
                </div>
                <button 
                    type='button' 
                    className='btn btn-primary mt-3' 
                    onClick={submitProduct}
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}


export default NewProductForm