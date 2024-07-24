import Image from "next/image";
import styles from "./page.module.css";
import CustomSelect from "../../components/link-customization/LinkOptions";
import "../globals.css";

export default function Customize() {
    const defaultOptions: Option[] = [
        { text: 'GitHub', icon: '/icons/github.svg' },
        { text: 'YouTube', icon: '/icons/youtube.svg' },
        { text: 'LinkedIn', icon: '/icons/linkedin.svg' },
      ];

  return (
    <main
      className={`w-full h- py-8 px-8 flex flex-col md:flex-row items-center gap-16 ${styles.form} ${styles.main}`}
    >
      <div className="left w-full h-auto pl-8 hidden lg:flex">
        <Image src="/phone.png" alt="Preview phone" width={40} height={100} className="w-full h-full" />
      </div>

      <div className="right h-full flex flex-col justify-between items-start gap-10">
        <div className="top flex flex-col gap-2">
          <h2 className="font-bold text-2xl">Customize your links</h2>
          <p className="text-base">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className="bottom h-full text-center flex flex-col justify-between items-center gap-10">
            <button className={`font-semibold ${styles.borderClr}`}>+ Add new link</button>
            
            <div className="link-input-comp w-full">
                <div className="box-head text-gray-500 flex justify-between">
                    <span>= Link #1</span>
                    <button>Remove</button>
                </div>
                <div className="link-input-container">
                    <div className="platform flex flex-col items-start">
                        <label htmlFor="">Platform</label>
                        <CustomSelect options={defaultOptions} />

                    </div>
                </div>
            
            </div>

            <div className={`description flex flex-col items-center gap-8 ${styles.description}`}>
                <Image src="/description-icon.png" alt="" width={124.77} height={80} className="" />
                <h2 className="text-2xl font-bold">Lets get you started</h2>
                <p className="">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
            </div>
            <div className="btn-box w-full md:flex md:justify-end">
                <button className={`w-full md:w-24 ${styles.saveBtn}`}>Save</button>
            </div>
        </div>
      </div>
    </main>
  );
}
