import Date from "./Date";
import '../index.css';

function Form() {
    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-3xl text-center pb-10 font-bold">Student Registration</h1>
            <div className="border border-black p-5 w-full max-w-lg md:w-2/3 lg:w-1/2 rounded-md">
                <form className="text-lg p-5 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <label className="w-full sm:w-1/3 text-left">First Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your First Name"
                            className="border border-black p-2 flex-grow rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <label className="w-full sm:w-1/3 text-left">Last Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your Last Name"
                            className="border border-black p-2 flex-grow rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <label className="w-full sm:w-1/3 text-left">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="border border-black p-2 flex-grow rounded-xl"
                        />
                    </div>

                    <div>
                        <Date />
                    </div>

                    <div className="text-center pt-5">
                        <button className="border-2 border-green-600 px-5 bg-green-600 rounded-xl text-xl font-semibold text-black hover:border-black hover:text-white hover:bg-green-800">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
