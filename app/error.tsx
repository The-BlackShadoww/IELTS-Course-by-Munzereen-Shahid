"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="wrapper h-svh w-full center flex-col gap-5">
            <p className="text-3xl font-semibold text-red-500">
                {error.message}
            </p>
            <Button
                onClick={() => reset()}
                className="text-lg font-semibold"
            >
                Try again
            </Button>
        </div>
    );
};

export default Error;
