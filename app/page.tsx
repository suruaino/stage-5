// 'use client'
// import { useState, useRef } from 'react';
// // import {useRouter} from 'react-router-dom';

// // import Link from 'next/link'
// import Image from "next/image";
// import styles from "./page.module.css";
// import "./globals.css";

// export default function Home() {

//   interface FormState {
//     name: string;
//     email: string;
//     password: string;
//   }


//   const [loginOrCreateAccount, setLoginOrCreateAccount] = useState(true);

//   const changePage = (e:any) => {
//     e.preventDefault()
//     setLoginOrCreateAccount(!loginOrCreateAccount);
// }



// // //LOGIC FOR LOGIN FORM SUBMISSION BELOW
// // const [loading, setLoading] = useState(false);
// //     // const router = useRouter();
// //     // const email = useRef();
//     // const [email, setEmail] = useState("");
// //     // const password = useRef();
//     // const [password, setPassword] = useState("");
// //     // const errorMessageRef = useRef();
// //     // const [errorMessage, setErrorMesssage] = useState("");
// //     const errorMessage = 'ield is not valid';

// //     const handleSubmit = async(e:any) => {
// //         e.preventDefault();
// //         setLoading(true);
// //         errorMessage.style.display = 'none';
        
// //         try{
// //             const userEmail = email.current.state;
// //             const userPassword = password.current.state;
// //             await signInWithEmailAndPassword(auth, userEmail, userPassword);
// //             setLoading(false);
// //             router.push('/account');
// //         }
// //         catch(error){
// //             console.log(error)
// //             errorMessage.style.display = 'block';
// //             setLoading(false);
// //         }
// //     }
// const [formState, setFormState] = useState<FormState>({
//   name: '',
//   email: '',
//   password: ''
// });

// const [errors, setErrors] = useState<Partial<FormState>>({});

// const validateForm = () => {
//   const errors: Partial<FormState> = {};
//   if (!formState.name) {
//     errors.name = 'Name is required';
//   }
//   if (!formState.email) {
//     errors.email = 'Email is required';
//   } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
//     errors.email = "Can't be empty";
//   }
//   if (!formState.password) {
//     errors.password = 'Please try again';
//   }
//   return errors;
// };

// const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();
//   const validationErrors = validateForm();
//   if (Object.keys(validationErrors).length === 0) {

//     console.log('Form submitted:', formState);
//   } else {
//     setErrors(validationErrors);
//   }
// };
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setFormState((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };


//   return (
//     <main
//       className={`w-full py-8 flex flex-col items-center gap-16  ${styles.form}`}
//     >
//       <div className="logo w-full pl-8 flex">
//         <Image src="/logo.png" alt="Logo" width={182.5} height={40} />
//       </div>

//       {loginOrCreateAccount ? 
//       <form onSubmit={handleSubmit} className="form w-[310px] flex flex-col gap-8">
//         <div className="header flex flex-col gap-3">
//           <h2 className="font-bold text-2xl">Login</h2>
//           <p className="text-base">Add your details below to get back into the app</p>
//         </div>

//         <div className="form-main flex flex-col gap-6">
//           <div className="email-box flex flex-col gap-1">
//             <label className="text-xs">Email address</label>
//             <div className="email-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300  rounded-md">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/envelope.svg"
//                   alt="Envelope Icon"
//                   width={13}
//                   height={10}
//                   className=""
//                 />
//                 <input
//                   type="email"
//                   placeholder="e.g. alex@email.com"
//                   className="text-xs"
//                   value={formState.name}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
//               </div>
//               {/* <label className="text-xs text-red-500 hidden">Can't be empty</label> */}
//             </div>
//           </div>
//           <div className="password-box flex flex-col gap-1 relative">
//             <label className="text-xs">Password</label>
//             <div className="password-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300  rounded-md">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/padlock.svg"
//                   alt="Padlock Icon"
//                   width={13}
//                   height={10}
//                   // className="absolute bottom-1"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter password"
//                   className="text-xs"
//                   value={formState.name}
//                   onChange={handleChange}
//                 />
//                 {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
//               </div>
//               {/* <label id="password-error" className="text-xs text-red-500 hidden">
//                 Please check again
//               </label>
//            */}
//             </div>
//           </div>
//           {/* <button className={`${styles.loginBtn}`}>Login</button> */}
//           <button type='submit' className={`flex justify-center ${styles.loginBtn}`}>Login</button>
//         </div>

//         <p className="flex flex-col items-center">
//           {/* Don't have an account? <Link href="/sign-up">Create account</Link> */}
//           Don't have an account? <button onClick={changePage}>Create account</button>
          
//         </p>
//       </form>
//       :
//       <form className="form w-[310px] flex flex-col gap-8">
//         <div className="header flex flex-col gap-3">
//           <h2 className="font-bold text-2xl">Create account</h2>
//           <p className="text-base">Let's get you started sharing your links!</p>
//         </div>

//         <div className="form-main flex flex-col gap-6">
//           <div className="email-box flex flex-col gap-1">
//             <label className="text-xs">Email address</label>
//             <div className="email-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300  rounded-md">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/envelope.svg"
//                   alt="Envelope Icon"
//                   width={13}
//                   height={10}
//                   className=""
//                 />
//                 <input
//                   type="email"
//                   placeholder="e.g. alex@email.com"
//                   className="text-xs"
//                 />
//                 {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
//               </div>
//               {/* <label className="text-xs text-red-500 hidden">Can't be empty</label> */}
//             </div>
//           </div>
//           <div className="password-box flex flex-col gap-1 relative">
//             <label className="text-xs">Create password</label>
//             <div className="password-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300  rounded-md">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/padlock.svg"
//                   alt="Padlock Icon"
//                   width={13}
//                   height={10}
//                   // className="absolute bottom-1"
//                 />
//                 <input
//                   type="password"
//                   placeholder="At least 8 characters"
//                   className="text-xs"
//                 />
//                 {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
//               </div>
//               <label id="password-error" className="text-xs text-red-500 hidden">
//                 Please check again
//               </label>
          
//             </div>
//           </div>
//           <div className="password-box flex flex-col gap-1 relative">
//             <label className="text-xs">Confirm password</label>
//             <div className="password-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300  rounded-md">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/padlock.svg"
//                   alt="Padlock Icon"
//                   width={13}
//                   height={10}
//                   // className="absolute bottom-1"
//                 />
//                 <input
//                   type="password"
//                   placeholder="At least 8 characters"
//                   className="text-xs"
//                 />
//                 {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
//               </div>
//               <label id="password-error" className="text-xs text-red-500 hidden">
//                 Please check again
//               </label>
          
//             </div>
//           </div>
//           <p className={`${styles.passwordEmphasis}`}>Password must contain at least 8 characters</p>
//           <button type='submit' className={`${styles.signUpBtn}`}>Create new account</button>
//         </div>
//         <p className="flex flex-col items-center">
//           {/* Already have an account? <Link href="/">Login</Link> */}
//           Already have an account? <button onClick={changePage}>Login</button>
//         </p>
//       </form>}
//     </main>
//   );
// }

'use client'
import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {

  interface FormState {
    name: string;
    email: string;
    password: string;
  }

  const [loginOrCreateAccount, setLoginOrCreateAccount] = useState(true);

  const changePage = (e: any) => {
    e.preventDefault();
    setLoginOrCreateAccount(!loginOrCreateAccount);
  }

  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validateForm = () => {
    const errors: Partial<FormState> = {};
    if (!formState.name) {
      errors.name = 'Name is required';
    }
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Can't be empty";
    }
    if (!formState.password) {
      errors.password = 'Please try again';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formState);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className={`w-full py-8 flex flex-col items-center gap-16 ${styles.form}`}>
      <div className="logo w-full pl-8 flex">
        <Image src="/logo.png" alt="Logo" width={182.5} height={40} />
      </div>

      {loginOrCreateAccount ?
        <form onSubmit={handleSubmit} className="form w-[310px] flex flex-col gap-8">
          <div className="header flex flex-col gap-3">
            <h2 className="font-bold text-2xl">Login</h2>
            <p className="text-base">Add your details below to get back into the app</p>
          </div>

          <div className="form-main flex flex-col gap-6">
            <div className="email-box flex flex-col gap-1">
              <label className="text-xs">Email address</label>
              <div className="email-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300 rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src="/envelope.svg"
                    alt="Envelope Icon"
                    width={13}
                    height={10}
                    className=""
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. alex@email.com"
                    className="text-xs"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>
              </div>
            </div>
            <div className="password-box flex flex-col gap-1 relative">
              <label className="text-xs">Password</label>
              <div className="password-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300 rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src="/padlock.svg"
                    alt="Padlock Icon"
                    width={13}
                    height={10}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="text-xs"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
                </div>
              </div>
            </div>
            <button type="submit" className={`flex justify-center ${styles.loginBtn}`}>Login</button>
          </div>

          <p className="flex flex-col items-center">
            Don't have an account? <button onClick={changePage}  className={`${styles.formLinks}`}>Create account</button>
          </p>
        </form>
        :
        <form className="form w-[310px] flex flex-col gap-8">
          <div className="header flex flex-col gap-3">
            <h2 className="font-bold text-2xl">Create account</h2>
            <p className="text-base">Let's get you started sharing your links!</p>
          </div>

          <div className="form-main flex flex-col gap-6">
            <div className="email-box flex flex-col gap-1">
              <label className="text-xs">Email address</label>
              <div className="email-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300 rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src="/envelope.svg"
                    alt="Envelope Icon"
                    width={13}
                    height={10}
                    className=""
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. alex@email.com"
                    className="text-xs"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>
              </div>
            </div>
            <div className="password-box flex flex-col gap-1 relative">
              <label className="text-xs">Create password</label>
              <div className="password-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300 rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src="/padlock.svg"
                    alt="Padlock Icon"
                    width={13}
                    height={10}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="At least 8 characters"
                    className="text-xs"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
                </div>
                <label id="password-error" className="text-xs text-red-500 hidden">
                  Please check again
                </label>
              </div>
            </div>
            <div className="password-box flex flex-col gap-1 relative">
              <label className="text-xs">Confirm password</label>
              <div className="password-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300 rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src="/padlock.svg"
                    alt="Padlock Icon"
                    width={13}
                    height={10}
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="At least 8 characters"
                    className="text-xs"
                  />
                  {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
                </div>
                <label id="password-error" className="text-xs text-red-500 hidden">
                  Please check again
                </label>
              </div>
            </div>
            <p className={`${styles.passwordEmphasis}`}>Password must contain at least 8 characters</p>
            <button type="submit" className={`${styles.signUpBtn}`}>Create new account</button>
          </div>
          <p className="flex flex-col items-center">
            Already have an account? <button onClick={changePage}  className={`${styles.formLinks}`}>Login</button>
          </p>
        </form>
      }
    </main>
  );
}
