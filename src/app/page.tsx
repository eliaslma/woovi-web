'use client'
import styles from "./page.module.css";

import { Header } from "@/components/Header";
import PaymentOptions from "@/components/PaymentOptions";
import { SecurityFooter } from "@/components/SecurityFooter";

export default function Home() {

    return (
        <main className={styles.main}>
            <Header title="Elias, como você quer pagar?" />
            <PaymentOptions/>
            <SecurityFooter/>
        </main>
    );
}
