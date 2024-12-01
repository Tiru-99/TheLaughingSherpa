import Navbar2 from "@/components/Navbar2"
import ProductsPage from "@/components/ProductPage"
import { StyledHeading } from "@/components/StyledHeading"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Products(){
    return(
        <>
          
           <div className="relative">
                <StyledHeading/>
           </div>

           <div className="absolute top-0 right-0 ">
             <Navbar2></Navbar2>
           </div>
           <div className="scale-95">
                <ProductsPage/>
           </div>

           <div>
              <FAQ/>
           </div>

           <div>
                <Footer/>
           </div>
           
        </>
    )
}