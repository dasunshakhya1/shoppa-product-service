import {checkSchema} from 'express-validator'

export const createProductSchema = checkSchema({
    name: {
        trim: true,
        isString: true,
        escape: true,
        notEmpty: {
            if: false,
            errorMessage: "Name is required."
        }, exists: {
            if: false,
            errorMessage: "Name field not found."
        }
    },
    vendor: {
        trim: true,
        isString: true,
        escape: true,
        notEmpty: {
            if: false,
            errorMessage: "Vendor is required."
        }, exists: {
            if: false,
            errorMessage: "Vendor field not found."
        }
    },
    description: {
        trim: true,
        isString: true,
        escape: true,
        isLength: {
            options: {
                min: 20,
                max: 220
            },
            errorMessage: "Description must have be between 20 and 220 characters"
        },
        notEmpty: {
            if: false,
            errorMessage: "Description is required."
        },
        exists: {
            if: false,
            errorMessage: "Description field is not found."
        }
    },
    price: {
        trim: true,
        isNumeric: true,
        escape: true,
        custom: {
            options: (val) => {
                return parseFloat(val) > 0
            }
        },
        notEmpty: {
            if: false,
            errorMessage: "Price is required."
        },
        exists: {
            if: false,
            errorMessage: "Price field is not found."
        }
    }
})


