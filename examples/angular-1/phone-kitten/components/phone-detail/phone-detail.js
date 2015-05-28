'use strict';

function PhoneDetailController(phone) {
  this.phone = phone;
  this.mainImageUrl = phone.images[0];
}
PhoneDetailController.$resolve = {
	phone: ['Phone', '$routeParams', function getPhoneItem (Phone, $routeParams) {
		return Phone.get({phoneId: $routeParams.phoneId}).$promise;
	}]
};

PhoneDetailController.prototype.setImage = function(imageUrl) {
  this.mainImageUrl = imageUrl;
};

angular.module('phoneKitten.phoneDetail', []).
    controller('PhoneDetailController', ['phone', PhoneDetailController]);
