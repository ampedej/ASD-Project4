function(doc) {
  if (doc._id.substr(0,7) === "recipe:"){
  	emit(doc._id.substr(7), {
  		"rev": doc._rev,
  		"name": doc.rname,
  		"date": doc.date,
  		"category": doc.category,
  		"type": doc.rtype,
  		"ingredients": doc.ingredients,
  		"direction": doc.directions,
  		});
  	}
};