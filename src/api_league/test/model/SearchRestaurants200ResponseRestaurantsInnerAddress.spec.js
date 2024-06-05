/**
 * API League
 * API League is a Hub for World Class APIs.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: mail@apileague.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiLeague);
  }
}(this, function(expect, ApiLeague) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SearchRestaurants200ResponseRestaurantsInnerAddress', function() {
    it('should create an instance of SearchRestaurants200ResponseRestaurantsInnerAddress', function() {
      // uncomment below and update the code to test SearchRestaurants200ResponseRestaurantsInnerAddress
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be.a(ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress);
    });

    it('should have the property zipcode (base name: "zipcode")', function() {
      // uncomment below and update the code to test the property zipcode
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property lon (base name: "lon")', function() {
      // uncomment below and update the code to test the property lon
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property streetAddr2 (base name: "street_addr_2")', function() {
      // uncomment below and update the code to test the property streetAddr2
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property streetAddr (base name: "street_addr")', function() {
      // uncomment below and update the code to test the property streetAddr
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property lat (base name: "lat")', function() {
      // uncomment below and update the code to test the property lat
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new ApiLeague.SearchRestaurants200ResponseRestaurantsInnerAddress();
      //expect(instance).to.be();
    });

  });

}));
