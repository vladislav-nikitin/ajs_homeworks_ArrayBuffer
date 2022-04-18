export default class ArrayBufferConverter {
  constructor() {
    this.bufferView = null;
  }

  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    return [...this.bufferView].reduce(
      (acc, prev) => acc + String.fromCharCode(prev),
      '',
    );
  }
}
