export type ProductReelProps = {
  subtitle: string;
  title: string;
  products: Product[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};
