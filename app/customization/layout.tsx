
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
                <span className=" h-10 flex justify-center items-center rounded-md gap-1">
                    <Image
                    src="/mini-logo.png"
                    alt="logo"
                    width={26.67}
                    height={26.67}
                    className="block md:hidden"
                    />

                    <Image
                    src="/logo.png"
                    alt="logo"
                    width={146}
                    height={32}
                    className="hidden md:block"
                    />
   
                </span>

            </div>
            <div className="center flex gap-4">
                <span className="w-16 md:w-24 h-10 bg-gray-200 md:px-7 flex justify-center items-center gap-2 rounded-md">
                <Image
                  src="/share-icon.svg"
                  alt="share Icon"
                  width={15.63}
                  height={15.63}
                  className=""
                />
                <p className={`hidden md:block ${styles.linkP}`}>Links</p>
                </span>
                <span className="w-16 md:w-auto h-10 flex justify-center items-center gap-2 rounded-md">
                    <Image
                    src="/user-icon.png"
                    alt="logo"
                    width={16.88}
                    height={16.88}
                    className=""
                    />
                    <p className="text-base text-gray-500 font-semibold hidden md:block">Profile details</p>
                </span>
            </div>
            <div className="right">
                <span className={`w-[52px] md:w-24 h-10 flex justify-center items-center rounded-md ${styles.borderClr}`}>
                    <Image
                    src="/eye-icon.svg"
                    alt="Eye Icon"
                    width={19.38}
                    height={13.13}
                    className="md:hidden"
                    />
                    <p className={`hidden md:block ${styles.linkP}`}>Preview</p>
                </span>
            </div>
        </nav>
   
        {children}
      </section>
    )
  }