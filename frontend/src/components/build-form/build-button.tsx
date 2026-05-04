import styles from "@/styles/page.module.css";

export default function BuildButton() 
{
    return (
        <button type="submit" className={`btn btn-primary btn-lg mt-5 ${styles.growOnHover}`}>Build It! 🚀</button>
    );
}