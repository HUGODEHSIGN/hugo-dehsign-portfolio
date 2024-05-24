export interface Image {
  _type: 'image';
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: 'reference';
}
