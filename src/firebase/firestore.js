import { db } from './firebase';

export const readAllProducts = (cb) => db.collection("dataProducts")
  .onSnapshot((querySnapshot) => {
    const arrProducts = [];
    querySnapshot.docs.forEach((doc) =>
        arrProducts.push({
        orderId: doc.id,
        ...doc.data(),
      })
    );
    console.log(arrProducts);
    cb(arrProducts);
  });
