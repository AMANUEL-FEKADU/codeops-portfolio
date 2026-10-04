
import CatagoryBar from "./CatagoryBar";
import Counter from "./Counter";


export default function MenuLayout({ children }) {
    return (
   
     
    <div>
        <CatagoryBar/>
        <Counter/>

        
        <main>{children}</main>

    </div>
      
     
  
  );
}
