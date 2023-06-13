// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    if (pickupLocation >= hqLocation) {
      return pickupLocation - hqLocation;
    } else {
      return hqLocation - pickupLocation;
    }
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(departure,destination){
    const distance = distanceFromHqInFeet(destination) - distanceFromHqInFeet(departure);
    return distance ;
  }
  function calculatesFarePrice(departure, destination) {
    const distance = distanceTravelledInFeet(departure, destination);
    if (distance <= 400){
    return 0;
    }  
    else if (distance > 400 && distance <= 2000){
        const farePerFoot = 0.02;
        return  (distance - 400) * farePerFoot;
    }
    else if (distance > 2000 && distance <=2500){
        return 25;
    }
    else if( distance > 2500) {
        return 'cannot travel that far';
    }
  }