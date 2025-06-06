export const fetchCartTotal = async (id_usuario) => {
  try {
    const res = await fetch(`http://localhost:3001/api/cart/${id_usuario}`);
    const data = await res.json();
    return data.reduce((acc, item) => acc + item.cantidad, 0);
  } catch (error) {
    console.error("Error al obtener el total del carrito:", error);
    return 0;
  }
};
