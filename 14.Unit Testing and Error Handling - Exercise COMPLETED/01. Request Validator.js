function requestValidator(obj) {
  let uriPattern = /^[\w.]+$/g;
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let validMessageChars = [`<`, `>`, `\\`, `&`, `'`, `"`];
  if (!validMethods.includes(obj.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  if (
    !obj.hasOwnProperty("uri") ||
    (!uriPattern.test(obj.uri) && obj.uri !== "*")
  ) {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  if (!obj.hasOwnProperty("version") || !validVersions.includes(obj.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  if (!obj.hasOwnProperty("message")) {
    throw new Error(`Invalid request header: Invalid Message`);
  }
  for (let chars of obj.message) {
    if (validMessageChars.includes(chars)) {
      throw new Error(`Invalid request header: Invalid Message`);
    }
  }

  return obj;
}
let obj = requestValidator({
  method: "GET",
  uri: "a",
  version: "HTTP/1.1",
  message: `<script>alert("xss vulnerable")</script>`,
});
console.log(obj);
