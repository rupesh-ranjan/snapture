import React from "react";

export default function MenuItems() {
    return (
        <ul className="mt-5 flex flex-col gap-4">
            <li className="flex gap-2">
                🏠 <span>Home</span>
            </li>
            <li className="flex gap-2">
                📸 <span>Category</span>
            </li>
            <li className="flex gap-2">
                🙍🏾‍♂️<span>About</span>
            </li>
            <li className="flex gap-2">
                📞 <span>Contact Us</span>
            </li>
        </ul>
    );
}
