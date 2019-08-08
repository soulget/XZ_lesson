function marry (man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: 'John'
},{
  name: 'Ann'
})
      Global
        |
      Object(family)
                     |
 Object(father)  -> Object(mother)     