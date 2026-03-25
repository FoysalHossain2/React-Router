import React, { useEffect, useRef } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);

    useEffect(() => {

        const fetchProducts = () => {
            
        };

        const onIntersection = (items) => {
            const loaderItem = items[0];

            if(loaderItem.isIntersecting && hasMore) {
                fetchProducts();
            }
        }
        
        const observer = new IntersectionObserver(onIntersection);

      if (observer && loaderRef.current) {
        observer.observe(loaderRef.current);
      }

      //cleanup
      return () => {
        if(observer) observer.disconnect();
      }
    }, []);

  return (
    <div>
        <div>Product List</div>

        <div>Loding more products...</div>
    </div>
  )
}

export default ProductList