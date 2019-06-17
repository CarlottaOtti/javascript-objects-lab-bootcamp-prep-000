var recipes = {torta: 'mela'}

function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign({}, object, {[key]:value})
}

updateObjectWithKeyAndValue(recipes, "plumcake", "banana");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

  object[key]= value
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "minestrone","verdure");

function deleteFromObjectByKey(object, key){

  var object = newObject
  newObject = Object.assign({}, obj)
  delete newObject[key]
  return newObject
}

deleteFromObjectByKey(recipes, "plumcake");

function destructivelyDeleteFromObjectByKey(object, key) {

  delete object[key]
  return object
}

destructivelyDeleteFromObjectByKey(recipes, "minestrone");
