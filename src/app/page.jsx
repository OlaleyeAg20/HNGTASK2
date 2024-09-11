import ProductCard from "../components/ProductCard"

const initalizeProduct = [
  {
      "productName": "Atlas Extra Large Slipcover Modular Floor Sectional Sofa",
      "productPrice": 998,
      "productImage": "./couch.png",
      "id": 1
  },
  {
      "productName": "Beryl Curved 3-Seater Couch Sofa and Lounge Chair by Acanva",
      "productPrice": 456,
      "productImage": "couch2.png",
      "id": 2
  },
  {
      "productName": "Persia Suedette 2-Piece Chaise Sectional Sofa and Armchair",
      "productPrice": 2050,
      "productImage": "couch3.png",
      "id": 3
  },
  {
      "productName": "Dori Boucle Curved 3-Seater Couch Sofa and Lounge Chair",
      "productPrice": 1280,
      "productImage": "couch4.png",
      "id": 4
  },
  {
      "productName": "Jell Armchair in Beige Fabric by Alter Ego Studio",
      "productPrice": 998,
      "productImage": "couch5.png",
      "id": 5
  },
  {
      "productName": "George Smith Kilim Standard Arm Sofa",
      "productPrice": 456,
      "productImage": "couch6.png",
      "id": 6
  },
  {
      "productName": "Albert Park Demi Mid-Sofa",
      "productPrice": 2050,
      "productImage": "couch7.png",
      "id": 7
  },
  {
      "productName": "Corduroy Velvet Camaleonda Modular Sofa",
      "productPrice": 1280,
      "productImage": "couch8.png",
      "id": 8
  },
  {
      "productName": "Atlas Extra Large Slipcover Modular Reversible Floor Sectional Sofa",
      "productPrice": 998,
      "productImage": "couch9.png",
      "id": 9
  },
  {
      "productName": "Beryl Curved 3-Seater Couch Sofa and Lounge Chair by Acanva",
      "productPrice": 456,
      "productImage": "couch10.png",
      "id": 10
  },
  {
      "productName": "Persia Suedette 2-Piece Chaise Sectional Sofa and Armchair",
      "productPrice": 2050,
      "productImage": "couch11.png",
      "id": 11
  },
  {
      "productName": "Dori Boucle Curved 3-Seater Couch Sofa and Lounge Chair",
      "productPrice": 1280,
      "productImage": "couch12.png",
      "id": 12
  }
]
export default function Home() {


const products = initalizeProduct

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   fetch("products.json")
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data)
  //     })
  //     .catch(error => {alert(error)})
  // })

  // useEffect(() => {
  //   try {
  //     fetch(cors_api + originalApi)
  //       .then(res => res.json())
  //       .then(data => {
  //         setProducts(data.items)
  //       })
  //   } catch (error) {
  //     console.error("Error fetching products:", error)
  //   }
  // }, [page]); // Only dependency is page

  const productsOutput = products.map(e => {
    return <ProductCard key={e.id} id={products.indexOf(e)} product={e} />
  })

  return (
    <>
      <div className="productsContainer">
        {productsOutput}
      </div>
    </>
  );
}

export {initalizeProduct}