export class RestClient{

    sendGetRequest(endpointUrl){

      return  cy.request({
            method: "GET",
            url: endpointUrl
        })

    }

    sendPostRequest(endpointUrl, requestHeaders, payload){

        return cy.request({
            method: "POST",
            headers: requestHeaders,
            body: payload,
            url: endpointUrl
        })

    }

    sendPutRequest(endpointUrl, requestHeaders, payload){
        return cy.request({
            method: "PUT",
            headers: requestHeaders,
            body: payload,
            url: endpointUrl
        })

    }

    sendDeleteRequest(requestHeaders, endpointUrl){

        return cy.request({
            method: "DELETE",
            headers: requestHeaders,
            url: endpointUrl
        })

    }

}

export const restClient = new RestClient();