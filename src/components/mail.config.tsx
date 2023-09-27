import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://app.us21.list-manage.com/subscribe/post?u=27530cc11e306144d49342e26&id=1fbd08f27e";

export function CustomForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status }) => (
        <form
          className="grid grid-rows-2 gap-20 2xl:mt-20"
          onSubmit={e => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              name: { value: string };
              email: { value: string };
            };
            const formData = {
              EMAIL: target.email.value,
              MERGE6: target.name.value
            };

            if (email && fullName === '') {
              status === "error"
              return;
            }

            try {
              subscribe(formData);
              setFullName("");
              setEmail("");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <div>
            <label className='text-sm'>Full Name</label>
            <input value={fullName} onChange={(e: any) => setFullName(e.target.value)} type="text" name="name" className='text-sm bg-transparent py-2 px-1 w-full border-b outline-none' />
          </div>

          <div>
            <label className='text-sm'>Email Address</label>
            <input value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" name="email" className='text-sm bg-transparent py-2 px-1 w-full border-b outline-none' />
          </div>

          <button disabled={status === "sending"} className={`p-2 rounded-md transition-all bg-[#5CA8FF] hover:bg-[#4f92df] disabled:cursor-not-allowed ${status === "error" && 'bg-red-600 hover:bg-red-500'}`}>
            {status === "sending" ? 'Subscribing...' : status === "error" ? 'Error' : 'Subscribe'}
          </button>
        </form>
      )}
    />
  )
}
