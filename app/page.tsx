// import Image from "next/image";
// import Envelope from "next/image";
// import Padlock from "next/image";
// import styles from './page.module.css';
// // import './globals.css';

// export default function Home() {
//   return (
//     <main className="w-full flex flex-col items-center">

//       <form className="w-[310px]">
//         <div className="header">
//           <h2 className="font-bold">Login</h2>
//           <p>Add your details below to get back into the app</p>
//         </div>

//         <div className="form-main">
//           <div className="email-box">
//             <label htmlFor="">Email address</label>
//             <input type="email" placeholder="e.g. alex@email.com" />
//             <label htmlFor="">Can't be empty</label>
//             <Envelope
//               src="envelope.svg"
//               alt=""
//               width={20}
//               height={20}
//             />
//           </div>
//           <div className="password-box">
//             <label htmlFor="">Password</label>
//             <input type="password" placeholder="Enter password"/>
//             <label htmlFor="" id="password-error">Please chck again</label>
//             <Padlock
//               src="padlock.svg"
//               alt=""
//               width={20}
//               height={20}
//             />
//           </div>
//           <button className={styles.page}>Login</button>
//           {/* <button className=".login-btn w-[100%] bg-default-btn-bg">Login</button> */}

//         </div>
//         <p>Don't have an account? <a href="">Create account</a></p>
//       </form>
//     </main>
//   );
// }

import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <main
      className={`w-full py-8 flex flex-col items-center gap-16  ${styles.form}`}
    >
      <div className="logo w-full pl-8 flex">
        <Image src="/logo.png" alt="Logo" width={182.5} height={40} />
      </div>
      <form className="form w-[310px] flex flex-col gap-6">
        <div className="header">
          <h2 className="font-bold">Login</h2>
          <p>Add your details below to get back into the app</p>
        </div>

        <div className="form-main flex flex-col gap-6">
          <div className="email-box flex flex-col">
            <label className="text-xs">Email address</label>
            <div className="email-input border border-gray-300 px-4 flex items-center gap-0 relative rounded-md">
              <Image
                src="/envelope.svg"
                alt="Envelope Icon"
                width={13}
                height={10}
                className=""
              />
              <input
                type="email"
                placeholder="e.g. alex@email.com"
                className="pl-4 py-3 text-xs"
              />
              <label className="text-xs text-red-500 ">Can't be empty</label>
            </div>
          </div>
          <div className="password-box flex flex-col relative">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="pl-8"
            />
            <label id="password-error" className="hidden">
              Please check again
            </label>
            <Image
              src="/padlock.svg"
              alt="Padlock Icon"
              width={13}
              height={10}
              className="absolute bottom-1"
            />
          </div>
          <button className={`${styles.loginBtn}`}>Login</button>
        </div>
        <p>
          Don't have an account? <a href="">Create account</a>
        </p>
      </form>
    </main>
  );
}
