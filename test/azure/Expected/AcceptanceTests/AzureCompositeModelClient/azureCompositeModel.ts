/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as operations from "./operations";
const WebResource = msRest.WebResource;

const packageName = "";
const packageVersion = "";

class AzureCompositeModel extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  subscriptionId: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;
  baseUri: string;

  // Operation groups
  basic: operations.BasicOperations;
  primitive: operations.Primitive;
  arrayModel: operations.ArrayModel;
  dictionary: operations.Dictionary;
  inheritance: operations.Inheritance;
  polymorphism: operations.Polymorphism;
  polymorphicrecursive: operations.Polymorphicrecursive;
  readonlyproperty: operations.Readonlyproperty;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AzureCompositeModel class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.subscriptionId = '123456';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }
    this.credentials = credentials;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.basic = new operations.BasicOperations(this);
    this.primitive = new operations.Primitive(this);
    this.arrayModel = new operations.ArrayModel(this);
    this.dictionary = new operations.Dictionary(this);
    this.inheritance = new operations.Inheritance(this);
    this.polymorphism = new operations.Polymorphism(this);
    this.polymorphicrecursive = new operations.Polymorphicrecursive(this);
    this.readonlyproperty = new operations.Readonlyproperty(this);
    this.serializer = new msRest.Serializer(Mappers);
  }
  // methods on the client.

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at
   * a given location. The response includes the display name and other details
   * about each product, and lists the products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this;
    let apiVersion = '2014-04-01-preview';
    // Validate
    try {
      if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
    requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
    let queryParamsArray: Array<any> = [];
    queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.acceptLanguage;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    httpRequest.body = null;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.CatalogArray;
            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(response);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }
  // methods on the client.

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelCreateOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async createWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelCreateOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this;
    let productDictionaryOfArray = (options && options.productDictionaryOfArray !== undefined) ? options.productDictionaryOfArray : undefined;
    let apiVersion = '2014-04-01-preview';
    // Validate
    try {
      if (subscriptionId === null || subscriptionId === undefined || typeof subscriptionId.valueOf() !== 'string') {
        throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let bodyParameter: any
    if (productDictionaryOfArray !== null && productDictionaryOfArray !== undefined) {
      bodyParameter = {};
      bodyParameter.productDictionaryOfArray = productDictionaryOfArray;
    }

    // Construct URL
    let baseUrl = this.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(subscriptionId));
    requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
    let queryParamsArray: Array<any> = [];
    queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.acceptLanguage;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Serialize Request
    let requestContent = null;
    let requestModel = null;
    try {
      if (bodyParameter !== null && bodyParameter !== undefined) {
        let requestModelMapper = Mappers.CatalogDictionaryOfArray;
        requestModel = client.serializer.serialize(requestModelMapper, bodyParameter, 'bodyParameter');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(bodyParameter, null, 2)}.`);
      return Promise.reject(serializationError);
    }
    httpRequest.body = requestContent;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.CatalogDictionary;
            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(response);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }
  // methods on the client.

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelUpdateOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async updateWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelUpdateOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this;
    let productArrayOfDictionary = (options && options.productArrayOfDictionary !== undefined) ? options.productArrayOfDictionary : undefined;
    let apiVersion = '2014-04-01-preview';
    // Validate
    try {
      if (subscriptionId === null || subscriptionId === undefined || typeof subscriptionId.valueOf() !== 'string') {
        throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let bodyParameter: any
    if (productArrayOfDictionary !== null && productArrayOfDictionary !== undefined) {
      bodyParameter = {};
      bodyParameter.productArrayOfDictionary = productArrayOfDictionary;
    }

    // Construct URL
    let baseUrl = this.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(subscriptionId));
    requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
    let queryParamsArray: Array<any> = [];
    queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'PUT';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.acceptLanguage;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Serialize Request
    let requestContent = null;
    let requestModel = null;
    try {
      if (bodyParameter !== null && bodyParameter !== undefined) {
        let requestModelMapper = Mappers.CatalogArrayOfDictionary;
        requestModel = client.serializer.serialize(requestModelMapper, bodyParameter, 'bodyParameter');
        requestContent = JSON.stringify(requestModel);
      }
    } catch (error) {
      let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
          `payload - ${JSON.stringify(bodyParameter, null, 2)}.`);
      return Promise.reject(serializationError);
    }
    httpRequest.body = requestContent;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.CatalogArray;
            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(response);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at
   * a given location. The response includes the display name and other details
   * about each product, and lists the products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogArray} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string): Promise<Models.CatalogArray>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.CatalogArray>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CatalogArray>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.CatalogArray>;
    if (!callback) {
      return this.listWithHttpOperationResponse(resourceGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as Models.CatalogArray);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listWithHttpOperationResponse(resourceGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as Models.CatalogArray;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelCreateOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.CatalogDictionary} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogDictionary} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  create(subscriptionId: string, resourceGroupName: string): Promise<Models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelCreateOptionalParams): Promise<Models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelCreateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelCreateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogDictionary>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.CatalogDictionary>;
    if (!callback) {
      return this.createWithHttpOperationResponse(subscriptionId, resourceGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as Models.CatalogDictionary);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.createWithHttpOperationResponse(subscriptionId, resourceGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as Models.CatalogDictionary;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelUpdateOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogArray} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  update(subscriptionId: string, resourceGroupName: string): Promise<Models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelUpdateOptionalParams): Promise<Models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelUpdateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogArray>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.CatalogArray>;
    if (!callback) {
      return this.updateWithHttpOperationResponse(subscriptionId, resourceGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as Models.CatalogArray);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.updateWithHttpOperationResponse(subscriptionId, resourceGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as Models.CatalogArray;
        return cb(err, result, data.request, data.response);
      });
    }
  }
}

export { AzureCompositeModel, Models as AzureCompositeModelModels, Mappers as AzureCompositeModelMappers };
