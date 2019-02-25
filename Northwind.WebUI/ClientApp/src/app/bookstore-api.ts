﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.13.0 (NJsonSchema v9.13.17.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IOrderClient {
    getAll(): Observable<OrderPreviewDto | null>;
    delete(orderId: number, productId: number): Observable<void>;
}

@Injectable()
export class OrderClient implements IOrderClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getAll(): Observable<OrderPreviewDto | null> {
        let url_ = this.baseUrl + "/api/Order";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(<any>response_);
                } catch (e) {
                    return <Observable<OrderPreviewDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderPreviewDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<OrderPreviewDto | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? OrderPreviewDto.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderPreviewDto | null>(<any>null);
    }

    delete(orderId: number, productId: number): Observable<void> {
        let url_ = this.baseUrl + "/api/Order/deleteItem?";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined and cannot be null.");
        else
            url_ += "orderId=" + encodeURIComponent("" + orderId) + "&"; 
        if (productId === undefined || productId === null)
            throw new Error("The parameter 'productId' must be defined and cannot be null.");
        else
            url_ += "productId=" + encodeURIComponent("" + productId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processDelete(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
    }
}

export interface IProductsClient {
    getAll(): Observable<ProductsListViewModel | null>;
    create(command: CreateProductCommand): Observable<number>;
    get(id: number): Observable<ProductViewModel | null>;
    update(id: number, command: UpdateProductCommand): Observable<ProductDto | null>;
    delete(id: number): Observable<void>;
}

@Injectable()
export class ProductsClient implements IProductsClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getAll(): Observable<ProductsListViewModel | null> {
        let url_ = this.baseUrl + "/api/Products";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(<any>response_);
                } catch (e) {
                    return <Observable<ProductsListViewModel | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<ProductsListViewModel | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<ProductsListViewModel | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ProductsListViewModel.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ProductsListViewModel | null>(<any>null);
    }

    create(command: CreateProductCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/Products";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    get(id: number): Observable<ProductViewModel | null> {
        let url_ = this.baseUrl + "/api/Products/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<ProductViewModel | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<ProductViewModel | null>><any>_observableThrow(response_);
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<ProductViewModel | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ProductViewModel.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ProductViewModel | null>(<any>null);
    }

    update(id: number, command: UpdateProductCommand): Observable<ProductDto | null> {
        let url_ = this.baseUrl + "/api/Products/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<ProductDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<ProductDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processUpdate(response: HttpResponseBase): Observable<ProductDto | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ProductDto.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ProductDto | null>(<any>null);
    }

    delete(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/Products/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processDelete(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            }));
        }
    }
}

export class OrderPreviewDto implements IOrderPreviewDto {
    orderId?: number;
    customerId?: string | undefined;
    products?: ProductPreviewDto[] | undefined;

    constructor(data?: IOrderPreviewDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.orderId = data["orderId"];
            this.customerId = data["customerId"];
            if (data["products"] && data["products"].constructor === Array) {
                this.products = [] as any;
                for (let item of data["products"])
                    this.products!.push(ProductPreviewDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): OrderPreviewDto {
        data = typeof data === 'object' ? data : {};
        let result = new OrderPreviewDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId;
        data["customerId"] = this.customerId;
        if (this.products && this.products.constructor === Array) {
            data["products"] = [];
            for (let item of this.products)
                data["products"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IOrderPreviewDto {
    orderId?: number;
    customerId?: string | undefined;
    products?: ProductPreviewDto[] | undefined;
}

export class ProductPreviewDto implements IProductPreviewDto {
    productId?: number;
    productName?: string | undefined;
    unitPrice?: number | undefined;

    constructor(data?: IProductPreviewDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.productId = data["productId"];
            this.productName = data["productName"];
            this.unitPrice = data["unitPrice"];
        }
    }

    static fromJS(data: any): ProductPreviewDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductPreviewDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["productId"] = this.productId;
        data["productName"] = this.productName;
        data["unitPrice"] = this.unitPrice;
        return data; 
    }
}

export interface IProductPreviewDto {
    productId?: number;
    productName?: string | undefined;
    unitPrice?: number | undefined;
}

export class ProductsListViewModel implements IProductsListViewModel {
    products?: ProductDto[] | undefined;
    createEnabled?: boolean;

    constructor(data?: IProductsListViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["products"] && data["products"].constructor === Array) {
                this.products = [] as any;
                for (let item of data["products"])
                    this.products!.push(ProductDto.fromJS(item));
            }
            this.createEnabled = data["createEnabled"];
        }
    }

    static fromJS(data: any): ProductsListViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductsListViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.products && this.products.constructor === Array) {
            data["products"] = [];
            for (let item of this.products)
                data["products"].push(item.toJSON());
        }
        data["createEnabled"] = this.createEnabled;
        return data; 
    }
}

export interface IProductsListViewModel {
    products?: ProductDto[] | undefined;
    createEnabled?: boolean;
}

export class ProductDto implements IProductDto {
    productId?: number;
    productName?: string | undefined;
    unitPrice?: number | undefined;
    supplierId?: number | undefined;
    supplierCompanyName?: string | undefined;
    categoryId?: number | undefined;
    categoryName?: string | undefined;
    discontinued?: boolean;

    constructor(data?: IProductDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.productId = data["productId"];
            this.productName = data["productName"];
            this.unitPrice = data["unitPrice"];
            this.supplierId = data["supplierId"];
            this.supplierCompanyName = data["supplierCompanyName"];
            this.categoryId = data["categoryId"];
            this.categoryName = data["categoryName"];
            this.discontinued = data["discontinued"];
        }
    }

    static fromJS(data: any): ProductDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["productId"] = this.productId;
        data["productName"] = this.productName;
        data["unitPrice"] = this.unitPrice;
        data["supplierId"] = this.supplierId;
        data["supplierCompanyName"] = this.supplierCompanyName;
        data["categoryId"] = this.categoryId;
        data["categoryName"] = this.categoryName;
        data["discontinued"] = this.discontinued;
        return data; 
    }
}

export interface IProductDto {
    productId?: number;
    productName?: string | undefined;
    unitPrice?: number | undefined;
    supplierId?: number | undefined;
    supplierCompanyName?: string | undefined;
    categoryId?: number | undefined;
    categoryName?: string | undefined;
    discontinued?: boolean;
}

export class ProductViewModel implements IProductViewModel {
    productId?: number;
    productName?: string | undefined;
    unitPrice?: number | undefined;
    supplierId?: number | undefined;
    supplierCompanyName?: string | undefined;
    categoryId?: number | undefined;
    categoryName?: string | undefined;
    discontinued?: boolean;
    editEnabled?: boolean;
    deleteEnabled?: boolean;

    constructor(data?: IProductViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.productId = data["productId"];
            this.productName = data["productName"];
            this.unitPrice = data["unitPrice"];
            this.supplierId = data["supplierId"];
            this.supplierCompanyName = data["supplierCompanyName"];
            this.categoryId = data["categoryId"];
            this.categoryName = data["categoryName"];
            this.discontinued = data["discontinued"];
            this.editEnabled = data["editEnabled"];
            this.deleteEnabled = data["deleteEnabled"];
        }
    }

    static fromJS(data: any): ProductViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["productId"] = this.productId;
        data["productName"] = this.productName;
        data["unitPrice"] = this.unitPrice;
        data["supplierId"] = this.supplierId;
        data["supplierCompanyName"] = this.supplierCompanyName;
        data["categoryId"] = this.categoryId;
        data["categoryName"] = this.categoryName;
        data["discontinued"] = this.discontinued;
        data["editEnabled"] = this.editEnabled;
        data["deleteEnabled"] = this.deleteEnabled;
        return data; 
    }
}

export interface IProductViewModel {
    productId?: number;
    productName?: string | undefined;
    unitPrice?: number | undefined;
    supplierId?: number | undefined;
    supplierCompanyName?: string | undefined;
    categoryId?: number | undefined;
    categoryName?: string | undefined;
    discontinued?: boolean;
    editEnabled?: boolean;
    deleteEnabled?: boolean;
}

export class CreateProductCommand implements ICreateProductCommand {
    productName?: string | undefined;
    unitPrice?: number | undefined;
    supplierId?: number | undefined;
    categoryId?: number | undefined;
    discontinued?: boolean;

    constructor(data?: ICreateProductCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.productName = data["productName"];
            this.unitPrice = data["unitPrice"];
            this.supplierId = data["supplierId"];
            this.categoryId = data["categoryId"];
            this.discontinued = data["discontinued"];
        }
    }

    static fromJS(data: any): CreateProductCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateProductCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["productName"] = this.productName;
        data["unitPrice"] = this.unitPrice;
        data["supplierId"] = this.supplierId;
        data["categoryId"] = this.categoryId;
        data["discontinued"] = this.discontinued;
        return data; 
    }
}

export interface ICreateProductCommand {
    productName?: string | undefined;
    unitPrice?: number | undefined;
    supplierId?: number | undefined;
    categoryId?: number | undefined;
    discontinued?: boolean;
}

export class UpdateProductCommand implements IUpdateProductCommand {
    productId?: number;
    productName?: string | undefined;
    unitPrice?: number | undefined;
    supplierId?: number | undefined;
    categoryId?: number | undefined;
    discontinued?: boolean;

    constructor(data?: IUpdateProductCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.productId = data["productId"];
            this.productName = data["productName"];
            this.unitPrice = data["unitPrice"];
            this.supplierId = data["supplierId"];
            this.categoryId = data["categoryId"];
            this.discontinued = data["discontinued"];
        }
    }

    static fromJS(data: any): UpdateProductCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateProductCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["productId"] = this.productId;
        data["productName"] = this.productName;
        data["unitPrice"] = this.unitPrice;
        data["supplierId"] = this.supplierId;
        data["categoryId"] = this.categoryId;
        data["discontinued"] = this.discontinued;
        return data; 
    }
}

export interface IUpdateProductCommand {
    productId?: number;
    productName?: string | undefined;
    unitPrice?: number | undefined;
    supplierId?: number | undefined;
    categoryId?: number | undefined;
    discontinued?: boolean;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}