
import Counter from "./Counter";


export default function MenuLayout({ children }) {
    return (
     
    <div>
   
        <Counter/>

        
        <main>{children}</main>

    </div>
      
     
  
  );
}
