import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetAllColors } from '../redux/slices/menuSlice';

const FormField = ({ store }) => {
    const [formData, setFormData] = useState({
        inputs: ['', '', '', ''],
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();

    const handleInputChange = (e, index) => {
        const newInputs = [...formData.inputs];
        newInputs[index] = e.target.value;

        setFormData({
            inputs: newInputs,
        });

        checkFormValidity(newInputs);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid) {
            console.log('Form submitted:', formData);
        }
    };

    const handleReset = () => {
        setFormData({
            inputs: ['', '', '', ''],
        });
        setIsFormValid(false);
        dispatch(resetAllColors());
    };

    const checkFormValidity = (inputs) => {
        const isValid = inputs.every((input) => input.trim() !== '');
        setIsFormValid(isValid);
    };

    // reset color
    let backgroundColorSubmit = "#7bc043";
    let backgroundColorReset = "#e74c3c";

    if (store.selectedIndex !== null && store.menu[store.selectedIndex]) {
        backgroundColorSubmit = store.menu[store.selectedIndex].color;
        backgroundColorReset = store.menu[store.selectedIndex].color;
    }

    if (store.resetColor) {
        backgroundColorSubmit = "#7bc043";
        backgroundColorReset = "#e74c3c";
    }


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2 className='form-title'>Form Başlığı</h2>
            {formData.inputs.map((input, index) => (
                <input
                    key={index}
                    type="text"
                    value={input}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder={`Input ${index + 1}`}
                    required
                    className="form-input"
                />
            ))}

            <div className='form-btn-container'>
                <button type="reset" onClick={handleReset} className="form-button " disabled={!formData.inputs.some((input) => input.trim() !== '')} style={{ backgroundColor: backgroundColorReset }}>
                    Reset
                </button>
                <Link to="/detail" style={{ color: 'inherit' }}>
                    <button type="submit" className="form-button " disabled={!isFormValid} style={{ backgroundColor: backgroundColorSubmit }}>
                        Submit
                    </button>
                </Link>

            </div>

        </form>
    );
};

export default FormField;
