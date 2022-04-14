import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../getBuffer";

test("check load method", () => {
  const data = new ArrayBufferConverter();
  const expected = new Uint16Array(getBuffer());
  data.load(getBuffer());
  expect(data.bufferView).toEqual(expected);
});

test("check toString", () => {
  const data = new ArrayBufferConverter();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  data.load(getBuffer());
  expect(data.toString()).toEqual(expected);
});
