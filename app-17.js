//USER INPUT VALIDATION WITH EXPRESS AND JOI PART II
const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];

const userInput = {
    personalInfo : {
        streetAddress: '123324434',
        city: 'Kalamazoo',
        state: 'MI'
    },
    // preferences: arrayString
    preferences: arrayObjects
};

//If you are given a complicated object --> break up into individual schemas

//One schema for personalInfo
const personalInfoSchema = Joi.object().keys({
    streetAddress: Joi.string().trim().required(), 
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
});

//One schema for preferenfes
const preferencesSchema = Joi.array().items(Joi.object().keys({
    example: Joi.string().required()
})); //all items within the array must be strings

//combine both schemas
const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

Joi.validate(userInput, schema, (error, result) => {
    if(error){
        console.log(error);
        
    }else{
        console.log(result);
        
    }
});

