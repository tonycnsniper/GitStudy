var path = require('path')
var fs = require('fs')
var join = path.join;
var Photo = require('../models/Photo');

exports.submit = function(dir) {
	return function(request, response, next) {
		var image = reqest.files.photo.image;
		var name = reqest.body.photo.name || image.name;
		var path = join(dir, image.name);

		fs.rename(image.path, path, function(err) {
			if(err) return next(err);

			Photo.create({
				name : name,
				path : img.name
			}, function(err) {
				if(err) return next(err);
				response.redirect('/');
			})
		})
	}
}

exports.form = function(request, response) {
	response.render('photos/upload', {
		title: 'Photo upload'
	});
}

exports.list = function(request, response, next) {
	Photo.find({}, function(err, photos) {
		if(err) return next(err);
		response.render('photos', {
			title: 'Photos',
			photos: photos
		});
	});
};