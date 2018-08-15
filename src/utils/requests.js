async function _parseResponse(response) {
  const contentType = response.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') !== -1) {
    return await response.json();
  } else if (contentType && contentType.indexOf('text/plain') !== -1) {
    return await response.text();
  } else {
    throw new Error(`Unrecognized content type "${contentType}"`);
  }
}

export async function checkStatus(response) {
  let data = await _parseResponse(response);
  if (response.ok) {
    return data;
  } else {
    const error = new Error();

    // Add the list of error messages, if any, from the API response to the error being thrown
    error.messages = data.errors;
    error.status = response.status;

    throw error;
  }
}
