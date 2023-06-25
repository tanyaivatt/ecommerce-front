import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Main1 from "@/components/Main1";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import {WishedProduct} from "@/models/WishedProduct";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import { Setting } from "@/models/Setting";
import Footer2 from "@/components/Footer2";
import Wave from "@/components/Wave";
import WaveBottom from "@/components/WaveBottom";
import Instagram from "@/components/Instagram";


export default function HomePage({featuredProduct,newProducts,wishedNewProducts}) {
  return (
    <div>
      <Header />
      <Main1 />
      <NewProducts products={newProducts} wishedProducts={wishedNewProducts} />
      <Wave/>
      <Featured product={featuredProduct} />
      <WaveBottom/>
      <Instagram />
      <Wave/>
      <Footer2/>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  //const featuredProductId = '647dd48d1c89da0ea83e7cd9';
  await mongooseConnect();
  const featuredProductSetting = await Setting.findOne({name:'featuredProductId'});
  const featuredProductId = featuredProductSetting.value;
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedNewProducts = session?.user
    ? await WishedProduct.find({
        userEmail:session.user.email,
        product: newProducts.map(p => p._id.toString()),
      })
    : [];
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      wishedNewProducts: wishedNewProducts.map(i => i.product.toString()),
    },
  };
}
