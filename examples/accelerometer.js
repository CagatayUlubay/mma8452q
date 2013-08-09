var accel = require('mma8452q');

// Initialize the accelerometer.
accel.initialize();

// Loop forever.
while (true) {
  // Returns an array of three numbers [x, y, z] of G force in each axis.
  var xyz = accel.getAcceleration(); 

  console.log("x:", xyz[0].toFixed(2),
    "y:", xyz[1].toFixed(2),
    "z:", xyz[2].toFixed(2));
}