'use client'
import styles from "./page.module.css";

import { Header } from "@/components/Header";
import PaymentOptions from "@/components/PaymentOptions";

export default function Home() {

    return (
        <main className={styles.main}>
            <Header title="Elias, como você quer pagar?" />
            <PaymentOptions/>
        </main>
    );
}
