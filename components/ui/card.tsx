import Image from "next/image";

import { cn } from "@/lib/utils";

interface cardProps {
    title: string,
    imageSrc: string,
    className?: string
}

const Card = ({ title, imageSrc, className }: cardProps) => {
    return (
        <div className={cn('flex items-center max-w-sm py-2 px-3 border-2 rounded-2xl overflow-hidden bg-white dark:bg-grey-700 dark:text-white grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-200 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]', className)}>
            <Image
                className='w-12 h-12 object-contain'
                src={imageSrc}
                alt={title}
                width={100}
                height={100}
            />
            <div className='flex items-center justify-center px-10'>
                <h2 className='text-lg font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap'>{title}</h2>
            </div>
        </div>
    );
};

export default Card;