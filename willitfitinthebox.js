function box(leng, width, heigth , content){
  if (content == 0 || leng == 0 || width == 0 || heigth == 0){
    return null;
  }
  let volume = (leng*0.393701) * ((width*0.393701) * (heigth*0.393701))
    console.log(Math.round((volume + Number.EPSILON) * 100) / 100)

  return volume > content
}


console.log(box(35,22,26 , 1221.1))

/**
 * yung ERD palitan dagdagan ng admin at previledge
 * 
 */