// ProductCard Component


type ProductCardProps = {
  name: string
  price: number
  description: string
  imageUrl: string
}

export default function ProductCard({ name, price, description, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-64 hover:scale-105 transition-transform">
      <img src={imageUrl} alt={name} className="rounded-lg mb-3" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-blue-600 font-bold mt-2">₹{price}</p>
      <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  )
}


// App.tsx


import ProductCard from "./components/ProductCard";

const products = [
  {
    name: "iPhone 16 Pro Max",
    price: 133900,
    description: "Latest iPhone with A16 Bionic chip, 256 GB Storage",
    imageUrl: "/iphone_16pm.jpg"
  },
  {
    name: "MacBook Air",
    price: 115990,
    description: "Lightweight laptop with M4 chip, 16 GB Ram & 512 GB Storage",
    imageUrl: "/macbook_air.jpg"
  },
  {
    name: "AirPods Pro",
    price: 22990,
    description: "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​(White)",
    imageUrl: "/airpods_pro.jpg"
  }
]

// App.tsx

function App() {
  

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
