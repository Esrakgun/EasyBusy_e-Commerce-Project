import { createContext, useState } from "react";
import { toast } from "react-toastify";



const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  // State alanı:
  const [basket, setBasket] = useState([]);
  console.log(basket);
  // SEPETE ÜRÜN EKLEME BİLGİSİ:
  // Sepete Ürün eklemek için ve miktarını arttırmak için bir fonksiyon yazalım:
  const addToBasket = (product) => { 
  // Sepette ürün var mı kontrol et:
  const found=basket.find((i)=>i.id===product.id)

if(!found){
  // Sepette ürün Yoksa:Sıfırdan Ekleme Yapıyoruz.
  setBasket(basket.concat({...product,amount:1}));
  toast.success('Sepete Ürün Eklendi..');
}
else{
  // Sepetteki ürün mevcutsa:Miktarını arttırıyoruz.
  const updated={...found,amount:found.amount+1};
  // Sepetteki Ürünlerin İçerisinde güncellenen elemanın güncel  değeri ekle:
  const newBasket=basket.map((i)=>(updated.id === i.id ? updated:i));
  // sepeti Güncelle:
  setBasket(newBasket);
  toast.warning(`Ürün miktarı güncellendi: ${updated.amount}`);
}
};

//  Sepette eleman var mı kontrol et:
//  const foundItem=basket.find((i)=>i.id===product.id);
// SEPETTEN ELEMAN SİLME BİLGİSİ:
// Sepetten Ürün Silmek için bir fonksiyon yazalım:
  const removeFromBasket = (delete_id) => {
    // İd'si bilinen ürünü sepetten kaldır:
    const filtred=basket.filter((i)=>i.id!==delete_id);
    // Sepeti Güncelle:
    setBasket(filtred);
    toast.error("Ürün Sepetten Kaldırıldı..")

};

// Ürün Miktarını Azaltan fonksiyon:
const decreaseAmount=(delete_id)=>{
  // miktarı azaltılacak ürünü sepette bul:
  const found= basket.find((i)=>i.id === delete_id);

//  Eğer ürünün miktarı birden fazlaysa:
if(found.amount>1){
  // Miktarı Güncelle :
  const updated={...found,amount:found.amount-1}

  // Güncel değeri diziye aktar: 
  const newBasket = basket.map((i)=>(i.id==updated.id ? updated :
    i))
      // Sepeti Güncelle:
      setBasket(newBasket);
      toast.info(`Ürün miktarı azaltıldı: ${updated.amount}`);

}else{
// Ürün miktarı 1'e eşitse bunu direct sil:
removeFromBasket(delete_id);
}
};

return (
    <BasketContext.Provider value={{ basket ,addToBasket ,removeFromBasket,decreaseAmount}}>
      {/*  */}
      {children}
    </BasketContext.Provider>
  )
}

export { BasketProvider, BasketContext };
