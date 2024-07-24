
import Image from "next/image";
import styles from "./layout.module.css";
export default function CustomizationLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className="px-4 pt-4 flex justify-between">
            <div className="left">
                <span className="w-[52px] h-10 flex justify-center items-center rounded-md">
                    <Image
                    src="/mini-logo.png"
                    alt="logo"
                    width={26.67}
                    height={26.67}
                    className=""
                    />
                </span>

            </div>
            <div className="center flex">
                <span className="w-16 h-10 bg-gray-200 flex justify-center items-center rounded-md">
                <Image
                  src="/share-icon.svg"
                  alt="share Icon"
                  width={15.63}
                  height={15.63}
                  className=""
                />
                </span>
                <span className="w-16 h-10 flex justify-center items-center rounded-md">
                    <Image
                    src="/user-icon.png"
                    alt="logo"
                    width={16.88}
                    height={16.88}
                    className=""
                    />
                </span>
            </div>
            <div className="right">
                <span className={`w-[52px] h-10 flex justify-center items-center rounded-md ${styles.borderClr}`}>
                    <Image
                    src="/eye-icon.svg"
                    alt="Eye Icon"
                    width={19.38}
                    height={13.13}
                    className=""
                    />
                </span>
            </div>
        </nav>
   
        {children}
      </section>
    )
  }