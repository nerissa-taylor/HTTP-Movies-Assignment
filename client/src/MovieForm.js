import React from 'react';
import { Field, withFormik, Form, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: ''
};

const MovieForm = () => {
    return (
        <div className="movie-form">

            <h1>Edit your movie form</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="number" name="id" />
                        <ErrorMessage name="id" component="div" />
                        <Field type="text" name="title" />
                        <ErrorMessage name="title" component="div" />
                        <Field type=""></Field>
                        <button type="submit" disabled={isSubmitting}>
                            Update
          </button>
                    </Form>
                )}
            </Formik>
        </div>
    );

    export default MovieForm;
}

const ItemForm = props => {
    const [item, setItem] = useState(initialItem);

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'price') {
            value = parseInt(value, 10);
        }

        setItem({
            ...item,
            [ev.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    placeholder="name"
                    value={item.name}
                />
                <div className="baseline" />

                <input
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    placeholder="Price"
                    value={item.price}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="imageUrl"
                    onChange={changeHandler}
                    placeholder="Image"
                    value={item.imageUrl}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="description"
                    onChange={changeHandler}
                    placeholder="Description"
                    value={item.description}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="shipping"
                    onChange={changeHandler}
                    placeholder="Shipping"
                    value={item.shipping}
                />
                <div className="baseline" />

                <button className="md-button form-button">Add New Item</button>
            </form>
        </div>
    );
};

export default ItemForm;
