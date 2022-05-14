//build a class and within the constructor convertor clas take in an array and attach a method that filters out the unique values only(it removes the duplicates)

/*
class SetConvertor{
    #cache = {}
    resultArr[]
    constrctor(arr){
        this.arr= arr
    }


    getSet(){
        for (const el of this.arr){
            if !((el in this.#cache)){

            this.#cache[el]= true
            this.resultArr.push(el)
        }
    }
    return this.resultArr
    }
}

    const newSetConverter = new SetConvertor([2,4,5,7,2,5])
    console.log(newSetConverter.getSet())
    */

    //building a circle class

    
    class circle{
        PI= 3.14159
        constructor(radius){
        this.radius = radius
        }

    

    getArea(){
        return PI*this.radius*this.radius
    }
    
    getDiameter(){
        return this.radius*2
    }

    getCircumference(){
        return this.radius*2*PI
    }

    //spellchecker extension -->  