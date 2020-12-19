function checkwallDamage(object1, object2){

    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if (object1.x-object2.x<object1.width/2+object2.width/2 && 
      object2.x-object1.x<object1.width/2+object2.width/2)
      {
  
        object1.velocityX = 0;
  
        return damage;
  
      
      }
  
  
  }