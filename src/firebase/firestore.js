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

 export const createItems = (object) => db.collection('items').add(object);

 export const readAllItems = (cb) => db.collection("items")
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

  export const deleteItem = (id) => db.collection('items').doc(id).delete()
