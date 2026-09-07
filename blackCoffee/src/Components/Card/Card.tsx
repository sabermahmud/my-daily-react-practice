export interface CardProps {
  prop: string;
}

const Card = ({ coffee, handleAddToCart }: CardProps) => {
  return (
    <>
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-amber-900/30 bg-[#17120f] text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={coffee.image}
            alt={coffee.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

          {/* Category */}
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-amber-300 backdrop-blur-sm">
            {coffee.category}
          </span>

          {/* Rating */}
          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-sm backdrop-blur-sm">
            <span className="text-yellow-400">★</span>
            <span>{coffee.rating}</span>
          </div>

          {/* Coffee name */}
          <h2 className="absolute bottom-4 left-5 text-2xl font-bold">
            {coffee.name}
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Description */}
          <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-400">
            {coffee.description}
          </p>

          {/* Size + Price */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Size
              </p>

              <p className="mt-1 font-medium text-gray-200">{coffee.size}</p>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Price
              </p>

              <p className="mt-1 text-2xl font-bold text-amber-400">
                ${coffee.price.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Button */}
          <button onClick={()=>handleAddToCart(coffee)} className="mt-auto w-full rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black transition hover:bg-amber-400 active:scale-95">
            ☕ Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
