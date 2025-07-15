"use client";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import MenuIcons from "./MenuIcons";

export default function MenuSidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            className={`bg-gray-900 text-white min-h-screen p-4 transition-all duration-300 ${
                collapsed ? "w-16" : "w-64"
            }`}
        >
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-white"
            >
                {collapsed ? "➡️" : "⬅️"}
            </button>

            {collapsed ? <MenuIcons /> : <MenuItems />}
        </div>
    );
}
