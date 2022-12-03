import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Toyota Allion',
    price: 8000,
    description: 'Name: Toyota Allion | Made In: Japan | Manufacture Year: 2018 | Color: Wine Red'
  },
  {
    id: 'p2',
    title: 'Honda Vezel',
    price: 5000,
    description: 'Name: Honda Vezel | Made In: Japan | Manufacture Year: 2019 | Color: White'
  },
  {
    id: 'p3',
    title: 'Toyota Aqua',
    price: 4500,
    description: 'Name: Toyota Aqua | Made In: Japan | Manufacture Year: 2017 | Color: Blue'
  },
  {
    id: 'p4',
    title: 'Nissan Xtrail Hybrid',
    price: 7000,
    description: 'Name: Nissan Xtrail Hybrid | Made In: Japan | Manufacture Year: 2018 | Color: Red'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMY_PRODUCTS.map( item => {
            return <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
          })
        }
        
      </ul>
    </section>
  );
};

export default Products;
