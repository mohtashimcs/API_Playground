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

import ApiClient from '../ApiClient';

/**
 * The TextStemming200Response model module.
 * @module model/TextStemming200Response
 * @version 1.0.0
 */
class TextStemming200Response {
    /**
     * Constructs a new <code>TextStemming200Response</code>.
     * @alias module:model/TextStemming200Response
     */
    constructor() { 
        
        TextStemming200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TextStemming200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TextStemming200Response} obj Optional instance to populate.
     * @return {module:model/TextStemming200Response} The populated <code>TextStemming200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextStemming200Response();

            if (data.hasOwnProperty('original')) {
                obj['original'] = ApiClient.convertToType(data['original'], 'String');
            }
            if (data.hasOwnProperty('stemmed')) {
                obj['stemmed'] = ApiClient.convertToType(data['stemmed'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TextStemming200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TextStemming200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['original'] && !(typeof data['original'] === 'string' || data['original'] instanceof String)) {
            throw new Error("Expected the field `original` to be a primitive type in the JSON string but got " + data['original']);
        }
        // ensure the json data is a string
        if (data['stemmed'] && !(typeof data['stemmed'] === 'string' || data['stemmed'] instanceof String)) {
            throw new Error("Expected the field `stemmed` to be a primitive type in the JSON string but got " + data['stemmed']);
        }

        return true;
    }


}



/**
 * @member {String} original
 */
TextStemming200Response.prototype['original'] = undefined;

/**
 * @member {String} stemmed
 */
TextStemming200Response.prototype['stemmed'] = undefined;






export default TextStemming200Response;

