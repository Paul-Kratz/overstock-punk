import React from "react";

type DetailBoxProps = {
    label: string;
    value: string | number;
}
export function DetailBox({ label, value }: DetailBoxProps) {
    return (
        <div className="detailBox shadow m-1">
            {value}
            <small className="text-secondary">{label}</small>
        </div>
    );
}
