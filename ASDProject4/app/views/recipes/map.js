function(doc) {
  if (doc._id.substr(0,7) === "recipe:"){
  	emit(doc._id.substr(7), {
  		"name": doc.rname,
  		"date": doc.date,
  		"rating": doc.rating,
  		"category": doc.category,
  		"type": doc.rtype,
  		"ingredients": doc.ingredients,
  		"direction": doc.directions
  		});
  	}
};