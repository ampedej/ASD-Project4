function(doc) {
  if (doc._id.substr(0,7) === "recipe:"){
  	emit(doc._id.substr(7), {
  		"Name": doc.rname,
  		"Date": doc.date,
  		"Rating": doc.rating,
  		"Category": doc.category,
  		"Type": doc.rtype,
  		"Ingredients": doc.ingredients,
  		"Direction": doc.directions
  		});
  	}
};