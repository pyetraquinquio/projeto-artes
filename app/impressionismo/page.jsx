"use client"

import ImageGallery from "@/components/ImageGallery"
import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
import Header from "@/components/Header"


const fotos = [
    '../img1',
    '/img2.webp',
    '/img3.webp',
    '/img4.webp',
    '/img5.webp',
    '/img6.jpg',
    '/img7.jpg',
    '/img8.jpg',
    '/img9.jpg',
]

export default function Home() {
    return (
        <div>
            <LoggedUserProvider>
                <Header />
            
            <h1>Galeria de Imagens</h1>
            <ImageGallery fotos={fotos} />
            </LoggedUserProvider>
        </div>
    );
}