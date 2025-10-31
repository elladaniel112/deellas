import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white font-sans">
    
      <div className="absolute inset-0">
        <Image
          src="/boy.jpg" 
          alt="DEELLAS Fashion Background"
          fill
          className="object-cover brightness-100"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      
      <div className="relative z-10 flex items-center justify-start min-h-screen px-10 md:px-24">
        <div className="max-w-3xl text-left space-y-6">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide drop-shadow-2xl">
            DEELLAS
          </h1>

          <h2 className="text-2xl md:text-3xl font-light italic text-gray-200">
            Where Fashion Meets Confidence
          </h2>

          <p className="text-lg md:text-xl leading-relaxed opacity-95">
            Welcome to <span className="font-semibold text-white">DEELLAS</span> — a world of fashion crafted for 
            elegance, style, and comfort. Our mission is to help you look and feel your best, 
            wherever life takes you.
          </p>

          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Every piece we create is inspired by beauty, strength, and individuality. From 
            luxurious gowns to casual streetwear, DEELLAS blends timeless craftsmanship with 
            modern design to bring your personality to life.
          </p>

          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Whether you’re stepping into the spotlight or embracing everyday grace, DEELLAS 
            is here to walk with you — turning every moment into a statement of elegance and power.
          </p>

          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Explore our collection of stunning designs for women and men who dare to express 
            themselves through bold fashion. Experience the spirit of DEELLAS — confidence, 
            creativity, and class in every stitch.
          </p>

          <div className="pt-4">
            <Link href="/shop"><button className="bg-white text-black font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
              Shop Now
            </button>
            </Link>
          </div>

          

        </div>
      </div>

      
      <div className="absolute bottom-6 right-8 text-sm md:text-base text-gray-300 italic">
        “Redefining style, one outfit at a time.”
      </div>
    </main>
  );
}
