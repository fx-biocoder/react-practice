export default function Contact() {
    async function submitForm(formData) {
        "use server";
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        };
        console.log("formfields", formFields);
        console.log("TODO: Send these form field values to a backend");
        return formFields;
    }

    return (
        <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-black">
            <h1 className="text-2xl font-bold text-center mb-6">Contact us!</h1>
            <form className="space-y-4" action={submitForm}>
                <div>
                    <label 
                        htmlFor="email" 
                        className="block 
                        text-sm 
                        font-medium"
                    >Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        required
                        className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label 
                        htmlFor="message" 
                        className="block text-sm font-medium"
                    >Message</label>
                    <textarea 
                        id="message" 
                        required 
                        name="message" 
                        rows="4"
                        className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-600 rounded-md p-3">Send message</button>
            </form>
        </main>
    );
}