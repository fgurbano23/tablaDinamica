export class CellConfigurationModel {
  public _color: string;
  public _font: string;
  public _align: string;
  public _border: string;
  public _texto: string;
  public _img: string;

  constructor(color: string, font: string, align: string, border: string, texto: string, img: string) {
    this._color = color;
    this._font = font;
    this._align = align;
    this._border = border;
    this._texto = texto;
    this._img = img;
  }
}
