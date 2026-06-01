import Image from "next/image";

type EventCardProps = {
    title: string;
    description: string;
    image: string;
};

export default function EventCard({ title, description, image}: EventCardProps) {
    return(
        <div className="relative h-[300px] rounded-2xl overflow-hidden text-left">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-base leading-snug">{description}</p>    
            </div>    
        </div>
    );
}