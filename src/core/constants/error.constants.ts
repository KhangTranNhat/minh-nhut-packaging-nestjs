export enum ErrorCode {
  BANNNER001 = "Fail to create banner",
  BANNNER002 = "Failed to update brand",
  BANNNER003 = "Failed to delete brand",
  BANNNER004 = "Banner does not exist",

  AUTH001 = "Invalid identifier or password",
  AUTH002 = "Invalid access token",

  PRODUCT001 = "Fail to create product",
  PRODUCT002 = "Failed to update product",
  PRODUCT003 = "Failed to delete product",
  PRODUCT004 = "Product does not exist",

  CATEGORY001 = "Fail to create category",
  CATEGORY002 = "Failed to update category",
  CATEGORY003 = "Failed to delete category",
  CATEGORY004 = "Category does not exist",

  UPLOAD001 = "Fail to upload image",
  UPLOAD002 = "File is required",

  //Validation
  V000='Valid fail',
  V001='Banner name is required',
  V002='Banner name must be string',
  V003='Banner image is required',
  V004='Banner image must be number',

  V005='Product name is required',
  V006='Product name must be string',
  V007='Product images is required',
  V008='Product images must be array string',

  V009='Username is required',
  V010='Username must be string',
  V011='Password  must be string',
  V012='Password is required',

}