import Image from "next/image";
import styles from "./page.module.css";
import "../globals.css";

export default function Customize() {
  return (
    <main
      className={`w-full py-8 flex flex-col md:flex-row items-center gap-16  ${styles.form}`}
    >
      <div className="left w-full h-auto pl-8 hidden md:flex">
        <Image src="/phone.png" alt="Preview phone" width={40} height={100} />
      </div>

      <div className="right flex flex-col gap-3">
        <div className="top">
          <h2 className="font-bold text-2xl">Customize your links</h2>
          <p className="text-base">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className="bottom">
            <button>Add new link</button>
            <div className="description">
                <Image src="/description-icon" alt="" width={124.77} height={80} />
            </div>
        </div>
      </div>
    </main>
  );
}
