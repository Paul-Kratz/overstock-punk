import React from "react";
import styles from '../styles/beerDetails.module.css';
type DetailBoxProps = {
    label: string;
    value: string | number;
}
export function DetailBox({ label, value }: DetailBoxProps) {
    return (
        <div className={`${styles.detailBox} shadow-sm m-1`}>
            {value}
            <small className="text-secondary">{label}</small>
        </div>
    );
}
