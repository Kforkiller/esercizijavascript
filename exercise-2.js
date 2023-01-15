const order = {};

if (order && order.customer?.address?.city) {
  console.log('City is defined');
} else {
  console.log('City is required');
}