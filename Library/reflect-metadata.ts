import "reflect-metadata";

class MyClass {
    @Reflect.metadata("customKey", "afshin")
    getName() {

    }

    
}


const metadataValue = Reflect.getMetadata("customKey", MyClass.prototype, "getName");
console.log(metadataValue); // Afshin


// NOTE: Now that both Decorators and Decorator Metadata have achieved Stage 3 within TC39, the API proposed below is no longer being considered for standardization. 
// However, this package will continue to support projects that leverage TypeScript's legacy --experimentalDecorators option as some projects may not be able 
// to migrate to use standard decorators.