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
