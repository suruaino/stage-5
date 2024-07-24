import Link from 'next/link'
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
      <form className="form w-[310px] flex flex-col gap-8">
        <div className="header flex flex-col gap-3">
          <h2 className="font-bold text-2xl">Login</h2>
          <p className="text-base">Add your details below to get back into the app</p>
        </div>

        <div className="form-main flex flex-col gap-6">
          <div className="email-box flex flex-col gap-1">
            <label className="text-xs">Email address</label>
            <div className="email-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300  rounded-md">
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
                  placeholder="e.g. alex@email.com"
                  className="text-xs"
                />
              </div>
              <label className="text-xs text-red-500 hidden">Can't be empty</label>
            </div>
          </div>
          <div className="password-box flex flex-col gap-1 relative">
            <label className="text-xs">Password</label>
            <div className="password-input px-4 py-3 flex items-center justify-between gap-0 relative border border-gray-300  rounded-md">
              <div className="flex items-center gap-2">
                <Image
                  src="/padlock.svg"
                  alt="Padlock Icon"
                  width={13}
                  height={10}
                  // className="absolute bottom-1"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="text-xs"
                />
              </div>
              <label id="password-error" className="text-xs text-red-500 hidden">
                Please check again
              </label>
          
            </div>
          </div>
          {/* <button className={`${styles.loginBtn}`}>Login</button> */}
          <Link href="" className={`flex justify-center ${styles.loginBtn}`}>Login</Link>
        </div>
        <p className="flex flex-col items-center">
          Don't have an account? <Link href="/sign-up">Create account</Link>
        </p>
      </form>
    </main>
  );
}
