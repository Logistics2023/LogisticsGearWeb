'use client';

export default function Button({ styled, children }) {
    return (
        <h3 className={`w-full font-medium text-[16px] py-5 text-center text-white ${styled}`}>{children}</h3>
    )
}
