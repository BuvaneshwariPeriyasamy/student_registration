import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../index.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form() {
    const { handleSubmit, control, register, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-3xl text-center pb-10 font-bold">Student Registration</h1>
            <div className="border border-black p-5 w-full max-w-lg md:w-2/3 lg:w-1/2 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)} className="text-lg p-5 flex flex-col">
                    <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                        <label className="w-full sm:w-1/3 text-left">First Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your First Name"
                            className="border border-black p-2 flex-grow rounded-xl"
                            {...register('firstName', { required: 'First Name is required' })}
                        />
                    </div>
                    {errors.firstName && <p className="text-red-600 text-right text-base">{errors.firstName.message}</p>}

                    <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                        <label className="w-full sm:w-1/3 text-left">Last Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your Last Name"
                            className="border border-black p-2 flex-grow rounded-xl"
                            {...register('lastName', { required: 'Last Name is required' })}
                        />
                    </div>
                    {errors.lastName && <p className="text-red-600 text-right p-1 text-base">{errors.lastName.message}</p>}

                    <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                        <label className="w-full sm:w-1/3 text-left">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="border border-black p-2 flex-grow rounded-xl"
                            {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email format' } })}
                        />
                    </div>
                    {errors.email && <p className="text-red-600 text-right p-1 text-base">{errors.email.message}</p>}

                    <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                        <label className="w-full sm:w-1/3 text-left">Date of Birth:</label>
                        <Controller
                            name="dob"
                            control={control}
                            rules={{ required: 'Date of birth is required' }} // Validation rule for required field
                            render={({ field }) => (
                                <DatePicker
                                    placeholderText="Select a Date"
                                    dateFormat="dd/MM/yyyy"

                                    className="border border-black p-2 flex-grow rounded-xl"
                                    onChange={(date) => field.onChange(date)} // update react-hook-form state
                                    selected={field.value} // set the selected date
                                />
                            )}
                        />
                    </div>
                                        {errors.dob && <p className="text-red-600 text-right p-1 text-base">{errors.dob.message}</p>}


                    <div className="text-center pt-5">
                        <button className="border-2 border-green-600 px-5 bg-green-600 rounded-xl text-xl font-semibold text-black hover:border-black hover:text-white hover:bg-green-800">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
