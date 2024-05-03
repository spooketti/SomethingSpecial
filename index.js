let model = await tf.loadLayersModel('model/model.json')

preprocessCanvas = (canvas) => {
  // Preprocess image for the network
  let tensor = tf
  .fromPixels(canvas) // Shape: (300, 300, 3) - RGB image
  .resizeNearestNeighbor([28, 28]) // Shape: (28, 28, 3) - RGB image
  .mean(2) // Shape: (28, 28) - grayscale
  .expandDims(2) // Shape: (28, 28, 1) - network expects 3d values with channels in the last dimension
  .expandDims() // Shape: (1, 28, 28, 1) - network makes predictions for "batches" of images
  .toFloat(); // Network works with floating points inputs
  return tensor.div(255.0); // Normalize [0..255] values into [0..1] range
}

async function what(canvas)
{
  return await model.predict(preprocessCanvas(canvas)).data(); 
}

function test()
{
  console.log("why")
}

window.bruh = test

export default test