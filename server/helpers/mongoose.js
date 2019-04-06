module.exports = {
    normalizeErrors : function(error){
        //array to store the error message
        let  normalizeErrors = []; 
        for (var property in error) {
            if (error.hasOwnProperty(property)) {
                normalizeErrors.push({title :  property, detail: error[property].message})
            }
         }
         return normalizeErrors;
    }
}