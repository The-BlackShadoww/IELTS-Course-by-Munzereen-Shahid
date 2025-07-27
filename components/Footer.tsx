import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer
            id="page-footer"
            className="w-full text-center center h-36 mt-10 bg-[#111827] text-white/60"
        >
            &copy;
            <Link
                href="https://ashikurrahman.vercel.app/"
                className="hover:underline"
            >
                Ashikur Rahman
            </Link>
        </footer>
    );
};

export default Footer;
