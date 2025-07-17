"use client";
import { ICategory } from "@/types/category";

export default function Category({ type, onClick }: ICategory) {
    return (
        <ul className="flex gap-2" onClick={onClick}>
            {type.map((item) => (
                <li
                    key={item}
                    className="bg-green-500 rounded-sm px-5 py-1 cursor-pointer"
                    data-category={item.toLowerCase()}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
