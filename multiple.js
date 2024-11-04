onmessage = function (e) {
    var multiple;
    var from = parseInt(e.data.from);
    var to = parseInt(e.data.to);
    multiple = from * to;
    this.postMessage(multiple);
}
