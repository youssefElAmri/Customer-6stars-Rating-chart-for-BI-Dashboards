export function isEmpty(value: unknown): boolean {
  return value === null || value === undefined;
}

export function isInt(value: unknown): value is number {
  return (
    typeof value === 'number' &&
    !Number.isNaN(value) &&
    Number.parseInt(value.toString(), 10) === value
  );
}

export function isNumeric(value: unknown): value is number {
  return (
    typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value)
  );
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}

export function isEmptyString(value: unknown): value is string {
  return isEmpty(value) || (isString(value) && value.trim() === '');
}

export function isElement(node: any): boolean {
  return !!(
    node &&
    (node.nodeName || // We are a direct element.
      (node.prop && node.attr && node.find))
  ); // We have an on and find method part of jQuery API.
}

export function isObject(value: unknown): boolean {
  return (
    !(value === null) && typeof value === 'object' && !Array.isArray(value)
  );
}

export function isDate(value: unknown): value is Date {
  return (
    Object.prototype.toString.call(value) === '[object Date]' ||
    value instanceof Date
  );
}

export function isUUID(value: unknown): boolean {
  return (
    isString(value) &&
    /^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-4[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/.test(
      value
    )
  );
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value) || value instanceof Array;
}

export function isFunction(value: unknown): value is Function {
  return (
    value !== null &&
    value !== undefined &&
    Object.prototype.toString.call(value) === '[object Function]'
  );
}

export function isEmptyObject(value: unknown): boolean {
  return (
    !(value === null) &&
    typeof value === 'object' &&
    Object.keys(value).length === 0
  );
}

export function isISO8601DateString(date: unknown): boolean {
  return (
    isString(date) &&
    /(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/.test(
      date
    )
  );
}

export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export function isTypedArray(value: any): boolean {
  const TYPED_ARRAY_REGEXP =
    /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;

  return (
    value &&
    isNumeric(value.length) &&
    TYPED_ARRAY_REGEXP.test(Object.prototype.toString.call(value))
  );
}

export function isBlankObject(value: unknown): boolean {
  return (
    value !== null && typeof value === 'object' && !Object.getPrototypeOf(value)
  );
}

export function isRegExp(value: unknown): value is RegExp {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}
