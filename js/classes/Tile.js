export class Tile{
    constructor(position,solid,color="black"){
        this.position = position;
        this.solid = solid;
        this.color = color;
    }
    read(){
        return this;
    }
}